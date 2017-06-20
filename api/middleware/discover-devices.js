const Promise = require('bluebird')

const dir = require(`${global.baseDir}/global-dirs`)
const logger = require(`${dir.utils}/logger`)

const DURATION = 30000

module.exports = flicClient => () => {
	logger.log('Command: Discover Devices')

	flicClient.startDiscovery()

	Promise.delay(DURATION)
	.then(() => flicClient.stopDiscovery())
	.then(() => logger.log('Discover Devices: Complete'))
	.catch(err => console.error('Discover Devices:', err))
}
