// Global Dir Hack
global.baseDir = `${__dirname}/`

// Load Config settings
const dir = require(`${global.baseDir}/global-dirs`)
const flicClient = require(`${dir.services}setup-flic-client`)
const setupServer = require(`${dir.server}setup-server`)
const startServer = require(`${dir.server}start-server`)

// Load Middleware
const discoverDevices = require(`${dir.middleware}discover-devices`)

flicClient.init()

const flicMiddleware = {
	get: action => (req, res) => res.send(
		action(flicClient)(req.params.name)
	)
}

const serverSettings = setupServer()

serverSettings.get(
	'/',
	(req, res) => res.end('You no be hearz.')
)

serverSettings.get(
	'/discover-devices',
	flicMiddleware.get(discoverDevices)
)

startServer(serverSettings)
