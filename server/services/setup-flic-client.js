const fetch = require('node-fetch')

const fliclib = require("./fliclibNodeJs");
const FlicClient = fliclib.FlicClient;
const FlicConnectionChannel = fliclib.FlicConnectionChannel;
const FlicScanner = fliclib.FlicScanner;

const client = new FlicClient("apple-pi.kevinghadyani.com", 5551);

const buttonConfigs = {
	'80:e4:da:72:9d:27': () => fetch('http://tablettron:30061/toggle-scene/Late Night Bedroom')
}

const listenToButton = (bdAddr) => {
	const cc = new FlicConnectionChannel(bdAddr);
	client.addConnectionChannel(cc);
	cc.on("buttonUpOrDown", (...args) => {
		buttonConfigs[bdAddr]()
		.then(() => console.log('Command Executed Successfully'))
		.catch(err => console.error(err))
		console.log(args);
	});
	// cc.on("buttonUpOrDown", (clickType, wasQueued, timeDiff) => {
	// 	console.log(bdAddr + " " + clickType + " " + (wasQueued ? "wasQueued" : "notQueued") + " " + timeDiff + " seconds ago");
	// });
	cc.on("connectionStatusChanged", (connectionStatus, disconnectReason) => {
		console.log(bdAddr + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""));
	});
}

client.once("ready", function() {
	console.log("Connected to daemon!");
	client.getInfo(function(info) {
		info.bdAddrOfVerifiedButtons.forEach(function(bdAddr) {
			listenToButton(bdAddr);
		});
	});
});

client.on("bluetoothControllerStateChange", function(state) {
	console.log("Bluetooth controller state change: " + state);
});

client.on("newVerifiedButton", function(bdAddr) {
	console.log("A new button was added: " + bdAddr);
	listenToButton(bdAddr);
});

client.on("error", function(error) {
	console.log("Daemon connection error: " + error);
});

client.on("close", function(hadError) {
	console.log("Connection to daemon is now closed");
});
