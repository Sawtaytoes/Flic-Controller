// Global Dir Hack
global.baseDir = `${__dirname}/`

const dir = require(`${global.baseDir}global-dirs`)
const flicClient = require(`${dir.services}setup-flic-client`)

const handleButtonPresses = require(`${dir.middleware}handle-button-presses`)
const logChanges = require(`${dir.middleware}log-changes`)

handleButtonPresses(flicClient)
logChanges(flicClient)
