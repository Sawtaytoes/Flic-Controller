const merge = require('lodash/merge')

const dir = require(`${global.baseDir}global-dirs`)

let configCustom = {}
try {
	configCustom = require(`${dir.configs}config`)
} catch (e) {
	// Do Nothing
}

const configDefaults = {
	env: 'production',

	flicClient: {
		hostname: 'localhost',
		port: 5551,
	},

	lifxApi: {
		hostname: 'localhost',
		port: 36001,
		protocol: 'http',
	},

	wemoApi: {
		hostname: 'localhost',
		port: 36002,
		protocol: 'http',
	},
}

const configEnv = {
	env: process.env.NODE_ENV,

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

	getDeviceApiUri: deviceType => assembleUri(config[`${deviceType}Api`]),
}
