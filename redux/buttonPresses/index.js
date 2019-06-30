const { combineEpics } = require('redux-observable')

const captureButtonPresses = require('./captureButtonPresses')
const executeButtonPressesEpic = require('./executeButtonPressesEpic')
const executeHttpCommandEpic = require('./executeHttpCommandEpic')
const executeWebSocketCommandEpic = require('./executeWebSocketCommandEpic')
const requestsEpic = require('./requestsEpic')
const splitCommandsEpic = require('./splitCommandsEpic')
const startButtonListenerEpic = require('./startButtonListenerEpic')
const startFlicClientEpic = require('./startFlicClientEpic')

const buttonPressesEpic = (
	combineEpics(
		captureButtonPresses,
		executeButtonPressesEpic,
		executeHttpCommandEpic,
		executeWebSocketCommandEpic,
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
