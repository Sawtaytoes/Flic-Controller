const fetch = require('node-fetch')

const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const LIFX_API = config.getLifxApiUri()
const WEMO_API = config.getWemoApiUri()

const changeLifxState = actionType => name => (
	fetch(`${LIFX_API}/${actionType}/${name}`)
)

const changeWemoDeviceState = actionType => name => (
	fetch(`${WEMO_API}/${actionType}/${name}`)
)

const deviceTypes = {
	lifx: changeLifxState,
	wemo: changeWemoDeviceState,
}

const changeState = deviceType => deviceTypes[deviceType]

const executeAction = ({ action, config, device }) => (
	logger.log(`${device} ${action}:`, config)
	|| (
		changeState(device)(action)(config)
		.then(() => logger.log(`Action ${action}/${config} Executed Successfully`))
		.catch(err => logger.logError(err))
	)
)

module.exports = executeAction
