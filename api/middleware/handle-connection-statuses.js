const dir = require(`${global.baseDir}global-dirs`)
const logger = require(`${dir.utils}logger`)

const listenToConnectionStatuses = flicConnectionChannel => {
	flicConnectionChannel
	.on(
		'connectionStatusChanged',
		(connectionStatus, disconnectReason) => {
			logger.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
		}
	)
}

module.exports = listenToConnectionStatuses
