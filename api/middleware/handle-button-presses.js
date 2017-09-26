const fetch = require('node-fetch')
const Rx = require('rxjs/Rx')

const dir = require(`${global.baseDir}global-dirs`)
const buttonConfigs = require(`${dir.configs}button-configs`)
const config = require(`${dir.configs}config-settings`)
const executeButtonPressAction = require(`${dir.utils}execute-button-press-action`)
const logger = require(`${dir.utils}logger`)
const { FlicConnectionChannel } = require(`${dir.lib}fliclibNodeJs`)

const LIFX_API = config.getLifxApiUri()
const WEMO_API = config.getWemoApiUri()

const BUTTON_UP = 'ButtonUp'
const BUTTON_DOWN = 'ButtonDown'

const createButtonObserver = flicConnectionChannel => observer => (
	flicConnectionChannel
	.on(
		'buttonUpOrDown',
		buttonPressState => observer.next(buttonPressState)
	)
)

const getNumberOfPresses = type => buttonPressStates => (
	buttonPressStates.filter(buttonPressState => buttonPressState === type).length
)

const getNumberOfDowns = getNumberOfPresses(BUTTON_DOWN)
const getNumberOfUps = getNumberOfPresses(BUTTON_UP)

const getPressType = ({ numDown, numUp }) => (
	numDown === numUp
	? `${numDown}press`
	: `${numDown}pressHold`
)

const handleButtonPresses = bluetoothAddress => numPressStates => {
	const flicButton = buttonConfigs[bluetoothAddress]

	if (!flicButton) return

	const pressType = getPressType(numPressStates)
	const actionSet = flicButton[pressType]

	if (actionSet instanceof Array) {
		logger.log(actionSet)

		const lifxConfigs = (
			actionSet
			.filter(({ device }) => device === 'lifx')
		)

		const lifxConfigNames = (
			lifxConfigs
			.map(({ config }) => config)
		)

		const lifxAction = (
			lifxConfigs
			.slice(0, 1)
			.map(({ action }) => action)
			.find(() => true)
		)

		fetch(`${LIFX_API}/${lifxAction}s`, {
			body: JSON.stringify({ names: lifxConfigNames }),
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT',
		})

		const wemoConfigs = (
			actionSet
			.filter(({ device }) => device === 'wemo')
		)

		const wemoDeviceNames = (
			wemoConfigs
			.map(({ config }) => config)
		)

		const wemoAction = (
			wemoConfigs
			.slice(0, 1)
			.map(({ action }) => action)
			.find(() => true)
		)

		fetch(`${WEMO_API}/${wemoAction}s`, {
			body: JSON.stringify({ names: wemoDeviceNames }),
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT',
		})
		.then(({ status, statusText }) => console.log(status, statusText))
		.catch(console.error)

	} else if (actionSet) {
		logger.log(actionSet)
		executeButtonPressAction(actionSet)

	} else {
		logger.logError('Error: You need to assign an action set to this click type')
	}
}

const listenToButton = flicClient => bluetoothAddress => {
	const flicConnectionChannel = new FlicConnectionChannel(bluetoothAddress)

	flicClient.addConnectionChannel(flicConnectionChannel)

	const buttonUpDown$ = (
		Rx.Observable
		.create(
			createButtonObserver(flicConnectionChannel)
		)
	)

	buttonUpDown$
	.buffer(
		buttonUpDown$
		.debounceTime(300)
	)
	.map(buttonPressStates => (
		buttonPressStates[0] === BUTTON_UP
		? buttonPressStates.slice(1)
		: buttonPressStates
	))
	.filter(buttonPressStates => buttonPressStates.length > 0)
	.map(buttonPressStates => ({
		numDown: getNumberOfDowns(buttonPressStates),
		numUp: getNumberOfUps(buttonPressStates),
	}))
	.subscribe(
		handleButtonPresses(bluetoothAddress)
	)

	// flicConnectionChannel
	// .on('connectionStatusChanged', (connectionStatus, disconnectReason) => {
	// 	logger.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
	// })
}

const executeButtonPressActions = flicClient => () => (
	flicClient.getInfo(info => (
		info.bdAddrOfVerifiedButtons
		.map(listenToButton(flicClient))
	))
)

module.exports = flicClient => (
	flicClient.once('ready', executeButtonPressActions(flicClient))
)
