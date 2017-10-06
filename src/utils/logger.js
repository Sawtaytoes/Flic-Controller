const dir = require(`${global.baseDir}directories`)
const config = require(`${dir.configs}`)

const noop = () => undefined

const log = config.isDev() ? console.log : noop
const logError = config.isDev() ? err => console.error(err) : noop

module.exports = {
	log,
	logError,
}
