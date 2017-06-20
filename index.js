// Global Dir Hack
global.baseDir = `${__dirname}/`

// Load Config settings
const dir = require(`${global.baseDir}/global-dirs`)
const lifxConfig = require(`${dir.services}setup-lifx-config`)
const lifxClient = require(`${dir.services}setup-lifx-client`)
const setupServer = require(`${dir.server}setup-server`)
const startServer = require(`${dir.server}start-server`)

// Load Middleware
const discoverDevices = require(`${dir.middleware}discover-devices`)
const toggleGroup = require(`${dir.middleware}toggle-group`)
const toggleScene = require(`${dir.middleware}toggle-scene`)

lifxClient.init()
lifxConfig.init()

const lifxMiddleware = {
	get: action => (req, res) => res.send(
		action(lifxClient, lifxConfig)(req.params.name)
	)
}

const serverSettings = setupServer()

serverSettings.get(
	'/',
	(req, res) => res.end('You no be hearz.')
)

serverSettings.get(
	'/discover-devices',
	lifxMiddleware.get(discoverDevices)
)

serverSettings.get(
	'/toggle-group/:name',
	lifxMiddleware.get(toggleGroup)
)

serverSettings.get(
	'/toggle-scene/:name',
	lifxMiddleware.get(toggleScene)
)

startServer(serverSettings)
