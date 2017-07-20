const merge = require('lodash/merge')

const dir = require(`${global.baseDir}global-dirs`)

let configCustom = {}
try {
	configCustom = require(`${dir.configs}config`)
} catch (e) {
	// Do Nothing
}

const configDefaults = {
	env: 'production', // Can be 'development' or 'production'.

	flicClient: {
		hostname: 'localhost',
		port: 5551,
	},

	lifxApi: {
		protocol: 'http',
		hostname: 'localhost',
		port: 36001,
	},

	wemoApi: {
		protocol: 'http',
		hostname: 'localhost',
		port: 36002,
	},
}

const configEnv = {
	flicClient: {
		hostname: process.env.FLIC_CLIENT_HOSTNAME,
		port: process.env.FLIC_CLIENT_PORT,
	},

	lifxApi: {
		protocol: process.env.LIFX_API_PROTOCOL,
		hostname: process.env.LIFX_API_HOSTNAME,
		port: process.env.LIFX_API_PORT,
	},

	wemoApi: {
		protocol: process.env.WEMO_API_PROTOCOL,
		hostname: process.env.WEMO_API_HOSTNAME,
		port: process.env.WEMO_API_PORT,
	},
}

const config = merge({}, configDefaults, configEnv, configCustom)

const uris = [
	config.flicClient,
	config.lifxApi,
	config.wemoApi,
]

uris.forEach(uri => uri.port = Number(uri.port))

const assembleUri = ({ hostname, port, protocol }) => (
	`${protocol}://${hostname}:${port}`
)

module.exports = {
	isDev: () => config.env === 'development',
	isProd: () => config.env === 'production',

	getEnv: () => config.env,

	getFlicClientHostname: () => config.flicClient.hostname,
	getFlicClientPort: () => config.flicClient.port,

	getLifxApiUri: () => assembleUri(config.lifxApi),
	getWemoApiUri: () => assembleUri(config.wemoApi),
}
