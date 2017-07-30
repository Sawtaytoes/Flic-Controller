const dir = require(`${global.baseDir}global-dirs`)
const logger = require(`${dir.utils}logger`)

const logBluetoothControllerChange = state => (
	logger.log('Bluetooth controller state change: ' + state)
)

const logClose = hadError => (
	hadError
	? logger.logError(hadError)
	: logger.log('Connection to daemon is now closed')
)

const logError = error => logger.logError('Daemon connection error: ' + error)

const logNewButton = bdAddr => logger.log('A new button was added: ' + bdAddr)

const logReady = () => logger.log('Connected to daemon!')

module.exports = flicClient => (
	flicClient
	.on('bluetoothControllerStateChange', logBluetoothControllerChange)
	.on('close', logClose)
	.on('error', logError)
	.on('newVerifiedButton', logNewButton)
	.once('ready', logReady)
)
