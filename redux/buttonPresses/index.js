const { combineEpics } = require('redux-observable')

const captureButtonPresses = require('./captureButtonPresses')
const executeButtonPressesEpic = require('./executeButtonPressesEpic')
const executeCommandEpic = require('./executeCommandEpic')
const requestsEpic = require('./requestsEpic')
const startButtonListenerEpic = require('./startButtonListenerEpic')
const startFlicClientEpic = require('./startFlicClientEpic')

const buttonPressesEpic = (
	combineEpics(
		captureButtonPresses,
		executeButtonPressesEpic,
		executeCommandEpic,
		requestsEpic,
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
