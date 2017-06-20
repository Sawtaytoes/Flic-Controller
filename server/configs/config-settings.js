const dir = require(`${global.baseDir}/global-dirs`)
let configCustom = {}
try {
	configCustom = require(`${dir.configs}config`)
} catch (e) {
	// Do Nothing
}

const configDefaults = {
	env: 'production',        // Can be 'development' or 'production'.

	//- Server (use this in your browser)
	protocol: 'http',         // Using `https` requires valid certificates.
	hostname: '0.0.0.0',      // Can be 0.0.0.0 for binding to all ports.
	port: 3000,               // Port of webserver.

	apiToken: '',               // LIFX HTTP API Key (https://api.developer.lifx.com/)
}

const configEnv = {
	env: process.env.NODE_ENV,

	protocol: process.env.PROTOCOL,
	hostname: process.env.HOSTNAME,
	port: process.env.PORT,

	apiToken: process.env.API_TOKEN,
}

Object.keys(configEnv)
.forEach(key => typeof configEnv[key] === 'undefined' && delete configEnv[key])

const config = Object.assign({}, configDefaults, configEnv, configCustom)
config.port = Number(config.port)

module.exports = {
	isSecure: () => config.protocol === 'https',
	isDev: () => config.env === 'development',
	isProd: () => config.env === 'production',

	getEnv: () => config.env,

	getProtocol: () => config.protocol,
	getHostname: () => config.hostname,
	getPort: () => config.port,

	getSafeUrl: portFunc => portFunc().replace('0.0.0.0', 'localhost'),
	getServerUrl: () => `${config.protocol}://${config.hostname}:${config.port}`,

	getApiToken: () => config.apiToken,
}
