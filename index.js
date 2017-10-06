// Global Dir Hack
global.baseDir = `${__dirname}/`

const dir = require(`${global.baseDir}directories`)
const flicClient = require(`${dir.services}flicClient`)

const handleButtonPresses = require(`${dir.middleware}handleButtonPresses`)
const logChanges = require(`${dir.middleware}logChanges`)

handleButtonPresses(flicClient)
logChanges(flicClient)
