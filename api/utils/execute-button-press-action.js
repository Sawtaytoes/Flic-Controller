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

const executeButtonPressAction = ({ action, device, name }) => (
	logger.log(`${device} ${action}:`, name)
	|| (
		changeState(device)(action)(name)
		.then(() => logger.log(`Action ${action}/${name} Executed Successfully`))
		.catch(err => logger.logError(err))
	)
)

module.exports = executeButtonPressAction
