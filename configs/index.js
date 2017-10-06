const fs = require('fs')
const merge = require('lodash/merge')

const dir = require(`${global.baseDir}directories`)
const defaultConfig = require(`${dir.configs}default`)
const envConfig = require(`${dir.configs}env`)

const configFilePath = `${dir.configs}custom.js`
const customConfig = (
	fs.existsSync(configFilePath)
	? require(configFilePath)
	: {}
)

const config = merge({}, defaultConfig, envConfig, customConfig)

const uris = [
	config.flicClient,
	config.lifxApi,
	config.wemoApi,
]

uris
.forEach(uri => uri.port = Number(uri.port))

const assembleUri = ({ hostname, port, protocol }) => (
	`${protocol}://${hostname}:${port}`
)

module.exports = {
	getDeviceApiUri: deviceType => assembleUri(config[`${deviceType}Api`]),
	getEnv: () => config.env,
	getFlicClientHostname: () => config.flicClient.hostname,
	getFlicClientPort: () => config.flicClient.port,
	isDev: () => config.env === 'development',
	isProd: () => config.env === 'production',
}
