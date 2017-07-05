const fetch = require('node-fetch')

const fliclib = require("./fliclibNodeJs")
const { FlicClient, FlicConnectionChannel, FlicScanner } = fliclib

const client = new FlicClient("localhost", 5551)
const LIFX_API = 'http://lifx.kevinghadyani.com/'

const changeLightsState = changeType => name => fetch(`${LIFX_API}${changeType}/${name}`)

const executeAction = ({ action, config }) => {
	console.log(`${action}:`, config)

	changeLightsState(action)(config)
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
			const sceneNames = actionSetClickType.map(({ config }) => config)

			console.log(JSON.stringify({ sceneNames }));

			fetch(`${LIFX_API}toggle-scenes`, {
				body: JSON.stringify({ sceneNames }),
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
