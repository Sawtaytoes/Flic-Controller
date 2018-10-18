const { combineEpics } = require('redux-observable')

const chooseButtonActionEpic = require('./chooseButtonActionEpic')
const executeButtonPressesEpic = require('./executeButtonPressesEpic')
const executeCommandEpic = require('./executeCommandEpic')
const requestsEpic = require('./requestsEpic')
const startButtonListenerEpic = require('./startButtonListenerEpic')
const startFlicClient = require('./startFlicClient')

const buttonPressesEpic = (
	combineEpics(
		chooseButtonActionEpic,
		executeButtonPressesEpic,
		executeCommandEpic,
		requestsEpic,
		startButtonListenerEpic,
		startFlicClient,
	)
)

module.exports = {
	buttonPressesEpic,
}
