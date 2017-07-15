const fetch = require('node-fetch')

const fliclib = require("./fliclibNodeJs")
const { FlicClient, FlicConnectionChannel, FlicScanner } = fliclib

const client = new FlicClient("localhost", 5551)
// const client = new FlicClient("apple-pi.kevinghadyani.com", 5551)
// const client = new FlicClient("blueberry-pi.kevinghadyani.com", 5551)
// const client = new FlicClient("cherry-pi.kevinghadyani.com", 5551)
const LIFX_API = 'http://lifx.kevinghadyani.com/'
// const LIFX_API = 'http://localhost:36001/'
const WEMO_API = 'http://wemo.kevinghadyani.com/'
// const WEMO_API = 'http://localhost:36002/'

const changeLightsState = actionType => name => fetch(`${LIFX_API}${actionType}/${name}`)
const changeWemoDeviceState = actionType => name => fetch(`${WEMO_API}${actionType}/${name}`)

const changeState = device => (
	device === 'lifx' ? changeLightsState
	: device === 'wemo' ? changeWemoDeviceState
	: () => () => {}
)

const executeAction = ({ action, config, device }) => {
	console.log(`${device} ${action}:`, config)

	changeState(device)(action)(config)
	.then(() => console.log(`Action ${action}/${config} Executed Successfully`))
	.catch(err => console.error(err))
}

const buttonConfigs = require('./button-configs.js')

const listenToButton = bluetoothAddress => {
	const cc = new FlicConnectionChannel(bluetoothAddress)

	client.addConnectionChannel(cc)
	cc.on('buttonSingleOrDoubleClickOrHold', clickType => {
		console.log('Bluetooth Address:', bluetoothAddress)
		console.log('Click Type:', clickType)

		const flicButton = buttonConfigs[bluetoothAddress]

		if (!flicButton) return

		const actionSetClickType = flicButton[clickType]

		if (actionSetClickType instanceof Array) {
			console.log(actionSetClickType);
			const sceneNames = (
				actionSetClickType
				.filter(({ device }) => device === 'lifx')
				.map(({ config }) => config)
			)

			const deviceNames = (
				actionSetClickType
				.filter(({ device }) => device === 'wemo')
				.map(({ config }) => config)
			)

			fetch(`${LIFX_API}toggle-scenes`, {
				body: JSON.stringify({ sceneNames }),
				headers: { 'Content-Type': 'application/json' },
				method: 'PUT',
			})

			fetch(`${WEMO_API}toggle-devices`, {
				body: JSON.stringify({ deviceNames }),
				headers: { 'Content-Type': 'application/json' },
				method: 'PUT',
			})

		} else if (actionSetClickType) {
			executeAction(actionSetClickType)

		} else {
			throw 'Error: You need to assign an action set to this click type'
		}
	})
	// cc.on('buttonUpOrDown', (clickType, wasQueued, timeDiff) => {
	// 	console.log(bluetoothAddress + " " + clickType + " " + (wasQueued ? "wasQueued" : "notQueued") + " " + timeDiff + " seconds ago")
	// })
	// cc.on('connectionStatusChanged', (connectionStatus, disconnectReason) => {
	// 	console.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
	// })
}

client.once(
	'ready',
	() => {
		console.log('Connected to daemon!')

		client.getInfo(info => (
			info.bdAddrOfVerifiedButtons.forEach(
				bluetoothAddress => listenToButton(bluetoothAddress)
			)
		))
	}
)

client.on(
	'bluetoothControllerStateChange',
	state => console.log('Bluetooth controller state change: ' + state)
)

client.on(
	'newVerifiedButton',
	bdAddr => {
		console.log('A new button was added: ' + bdAddr)
		listenToButton(bdAddr)
	}
)

client.on(
	'error',
	error => console.log('Daemon connection error: ' + error)
)

client.on(
	'close',
	hadError => (
		hadError
		? console.error(hadError)
		: console.log('Connection to daemon is now closed')
	)
)
