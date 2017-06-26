const fetch = require('node-fetch')

const fliclib = require("./fliclibNodeJs")
const FlicClient = fliclib.FlicClient
const FlicConnectionChannel = fliclib.FlicConnectionChannel
const FlicScanner = fliclib.FlicScanner

const client = new FlicClient("apple-pi.kevinghadyani.com", 5551)

const buttonConfigs = {
	'80:e4:da:72:9d:27': {
		SingleClick: () => fetch('http://lifx.kevinghadyani.com:36001/toggle-scene/Shower'),
		DoubleClick: () => fetch('http://lifx.kevinghadyani.com:36001/toggle-scene/Late Night Bathroom'),
		Hold: () => fetch('http://lifx.kevinghadyani.com:36001/toggle-group/Master Bathroom'),
	}
}

const listenToButton = (bluetoothAddress) => {
	const cc = new FlicConnectionChannel(bluetoothAddress)

	client.addConnectionChannel(cc)
	cc.on("buttonSingleOrDoubleClickOrHold", clickType => {
		console.log('clickType', clickType)

		buttonConfigs[bluetoothAddress][clickType.replace('Button', '')]()
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

client.once("ready", function() {
	console.log("Connected to daemon!")

	client.getInfo(info => (
		info.bdAddrOfVerifiedButtons.forEach(
			bluetoothAddress => listenToButton(bluetoothAddress)
		)
	))
})

client.on("bluetoothControllerStateChange", function(state) {
	console.log("Bluetooth controller state change: " + state)
})

client.on("newVerifiedButton", function(bdAddr) {
	console.log("A new button was added: " + bdAddr)
	listenToButton(bdAddr)
})

client.on("error", function(error) {
	console.log("Daemon connection error: " + error)
})

client.on("close", function(hadError) {
	console.log("Connection to daemon is now closed")
})
