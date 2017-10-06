const dir = require(`${global.baseDir}directories`)
const config = require(`${dir.configs}config`)
const { FlicClient } = require(`${dir.fliclib}fliclibNodeJs`)

module.exports = (
	new FlicClient(
		config.getFlicClientHostname(),
		config.getFlicClientPort()
	)
)
