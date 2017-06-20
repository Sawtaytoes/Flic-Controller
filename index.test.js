try {
	require('./api.js')
} catch (err) {
	// Do Nothing
}
require('isomorphic-fetch')
const test = require('tape')

// Global Dir Hack
global.baseDir = `${__dirname}/`

// Load Config settings
const dir = require(`${global.baseDir}/global-dirs`)
const config = require(`${dir.configs}config-settings`)

// --------------------------------------------------------
// Globals
// --------------------------------------------------------

//


// --------------------------------------------------------
// Login
// --------------------------------------------------------

// test('Login: No Data', t => {
	//
// })
