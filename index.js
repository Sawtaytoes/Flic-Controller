const fetch = require('node-fetch')

const fliclib = require("./fliclibNodeJs")
const FlicClient = fliclib.FlicClient
const FlicConnectionChannel = fliclib.FlicConnectionChannel
const FlicScanner = fliclib.FlicScanner

const client = new FlicClient("cherry-pi.kevinghadyani.com", 5551)
const LIFX_API = 'http://localhost:36001/'

const changeLightsState = changeType => name => fetch(`${LIFX_API}${changeType}/${name}`)

const buttonConfigs = require('./lights-config.sample.js')

const listenToButton = (bluetoothAddress) => {
	const cc = new FlicConnectionChannel(bluetoothAddress)

	client.addConnectionChannel(cc)
	cc.on("buttonSingleOrDoubleClickOrHold", clickType => {
		console.log('clickType', clickType)

		const { action, lights } = buttonConfigs[bluetoothAddress][clickType.replace('Button', '')]

		changeLightsState(action)(lights)
		.then(() => console.log('Command Executed Successfully'))
		.catch(err => console.error(err))
	})
	cc.on("buttonUpOrDown", (clickType, wasQueued, timeDiff) => {
		console.log(bluetoothAddress + " " + clickType + " " + (wasQueued ? "wasQueued" : "notQueued") + " " + timeDiff + " seconds ago")
	})
	cc.on("connectionStatusChanged", (connectionStatus, disconnectReason) => {
		console.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
	})
}

client.once(
	'ready',
	() => {
		console.log("Connected to daemon!")

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
	hadError => console.log('Connection to daemon is now closed')
)
