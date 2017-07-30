const dir = require(`${global.baseDir}/global-dirs`)
const config = require(`${dir.configs}config-settings`)
const { FlicClient } = require(`${dir.lib}fliclibNodeJs`)

const client = new FlicClient(
	config.getFlicClientHostname(),
	config.getFlicClientPort()
)

module.exports = client
