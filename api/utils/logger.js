const dir = require(`${global.baseDir}/global-dirs`)
const config = require(`${dir.configs}config-settings`)

const noop = () => {}

const log = config.isDev() ? console.log : noop
const logError = config.isDev() ? err => console.error(err) : noop

module.exports = {
	log,
	logError,
}
