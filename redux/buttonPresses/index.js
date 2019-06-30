const { combineEpics } = require('redux-observable')

const captureButtonPresses = require('./captureButtonPresses')
const executeButtonPressesEpic = require('./executeButtonPressesEpic')
const executeLifxCommandEpic = require('./executeLifxCommandEpic')
const executeWemoCommandEpic = require('./executeWemoCommandEpic')
const requestsEpic = require('./requestsEpic')
const splitCommandsEpic = require('./splitCommandsEpic')
const startButtonListenerEpic = require('./startButtonListenerEpic')
const startFlicClientEpic = require('./startFlicClientEpic')

const buttonPressesEpic = (
	combineEpics(
		captureButtonPresses,
		executeButtonPressesEpic,
		executeLifxCommandEpic,
		executeWemoCommandEpic,
		requestsEpic,
		splitCommandsEpic,
		startButtonListenerEpic,
		startFlicClientEpic,
	)
)

module.exports = {
	buttonPresses: {
		actions: require('./actions'),
	},
	buttonPressesEpic,
}
