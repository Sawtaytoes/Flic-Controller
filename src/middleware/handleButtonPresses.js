const Rx = require('rxjs/Rx')

const dir = require(`${global.baseDir}directories`)
const buttonConfigs = require(`${dir.configs}buttons`)
const executeActionSets = require(`${dir.utils}executeActionSets`).default
const logger = require(`${dir.utils}logger`)
const { FlicConnectionChannel } = require(`${dir.fliclib}fliclibNodeJs`)

const BUTTON_UP = 'ButtonUp'
const BUTTON_DOWN = 'ButtonDown'

const createButtonObserver = flicConnectionChannel => observer => (
	flicConnectionChannel
	.on(
		'buttonUpOrDown',
		buttonPressState => observer.next(buttonPressState)
	)
)

const createButtonObservable = (flicConnectionChannel, customObserver) => (
	Rx.Observable
	.create(
		(customObserver || createButtonObserver)(flicConnectionChannel)
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

	if (!flicButton) {
		logger.logError("No configuration exists for this button.")
	}

	const pressType = getPressType(numPressStates)

	executeActionSets(flicButton[pressType])
}

const listenToButton = flicClient => bluetoothAddress => {
	const flicConnectionChannel = (
		new FlicConnectionChannel(
			bluetoothAddress,
			{ latencyMode: 'LowLatency' }
		)
	)

	flicClient.addConnectionChannel(flicConnectionChannel)

	const buttonUpDown$ = createButtonObservable(flicConnectionChannel)

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
}

const startButtonListeners = flicClient => () => (
	flicClient.getInfo(info => (
		info.bdAddrOfVerifiedButtons
		.map(listenToButton(flicClient))
	))
)

module.exports = flicClient => (
	flicClient.once('ready', startButtonListeners(flicClient))
)
