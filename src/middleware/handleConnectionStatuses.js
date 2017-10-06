const dir = require(`${global.baseDir}directories`)
const logger = require(`${dir.utils}logger`)

const listenToConnectionStatuses = (flicConnectionChannel, bluetoothAddress) => {
	flicConnectionChannel
	.on(
		'connectionStatusChanged',
		(connectionStatus, disconnectReason) => {
			logger.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
		}
	)
}

module.exports = listenToConnectionStatuses
