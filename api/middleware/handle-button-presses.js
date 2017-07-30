const fetch = require('node-fetch')

const dir = require(`${global.baseDir}global-dirs`)
const buttonConfigs = require(`${dir.configs}button-configs`)
const config = require(`${dir.configs}config-settings`)
const executeAction = require(`${dir.utils}execute-action`)
const logger = require(`${dir.utils}logger`)
const { FlicConnectionChannel } = require(`${dir.lib}fliclibNodeJs`)

const LIFX_API = config.getLifxApiUri()
const WEMO_API = config.getWemoApiUri()

const listenToButton = flicClient => bluetoothAddress => {
	const flicConnectionChannel = new FlicConnectionChannel(bluetoothAddress)

	flicClient.addConnectionChannel(flicConnectionChannel)

	flicConnectionChannel
	.on('buttonSingleOrDoubleClickOrHold', clickType => {
		logger.log('Bluetooth Address:', bluetoothAddress)
		logger.log('Click Type:', clickType)

		const flicButton = buttonConfigs[bluetoothAddress]

		if (!flicButton) return

		const actionSetClickType = flicButton[clickType]

		if (actionSetClickType instanceof Array) {
			logger.log(actionSetClickType);

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

			fetch(`${LIFX_API}/toggle-scenes`, {
				body: JSON.stringify({ sceneNames }),
				headers: { 'Content-Type': 'application/json' },
				method: 'PUT',
			})

			fetch(`${WEMO_API}/toggle-devices`, {
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

	// .on('buttonUpOrDown', (clickType, wasQueued, timeDiff) => {
	// 	logger.log(bluetoothAddress + " " + clickType + " " + (wasQueued ? "wasQueued" : "notQueued") + " " + timeDiff + " seconds ago")
	// })

	// .on('connectionStatusChanged', (connectionStatus, disconnectReason) => {
	// 	logger.log(bluetoothAddress + " " + connectionStatus + (connectionStatus == "Disconnected" ? " " + disconnectReason : ""))
	// })
}

const handleButtonPresses = flicClient => () => (
	flicClient.getInfo(info => (
		info.bdAddrOfVerifiedButtons
		.map(listenToButton(flicClient))
	))
)

module.exports = flicClient => (
	flicClient.once('ready', handleButtonPresses(flicClient))
)
