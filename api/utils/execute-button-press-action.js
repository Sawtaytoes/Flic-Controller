const fetch = require('node-fetch')

const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)
const logger = require(`${dir.utils}logger`)

const LIFX_API = config.getLifxApiUri()
const WEMO_API = config.getWemoApiUri()

const changeLifxState = actionType => value => (
	value instanceof Array
	? fetch(`${LIFX_API}/${actionType}/${value.join('/')}`)
	: fetch(`${LIFX_API}/${actionType}/${value}`)
)

const changeWemoDeviceState = actionType => value => (
	fetch(`${WEMO_API}/${actionType}/${value}`)
)

const deviceTypes = {
	lifx: changeLifxState,
	wemo: changeWemoDeviceState,
}

const changeState = deviceType => deviceTypes[deviceType]

const executeButtonPressAction = ({ action, config, device }) => (
	logger.log(`${device} ${action}:`, config)
	|| (
		changeState(device)(action)(config)
		.then(() => logger.log(`Action ${action}/${config} Executed Successfully`))
		.catch(err => logger.logError(err))
	)
)

module.exports = executeButtonPressAction
