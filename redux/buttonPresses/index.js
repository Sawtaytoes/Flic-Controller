const { combineEpics } = require('redux-observable')

const chooseButtonActionEpic = require('./chooseButtonActionEpic')
const executeButtonPressesEpic = require('./executeButtonPressesEpic')
const executeCommandEpic = require('./executeCommandEpic')
const requestsEpic = require('./requestsEpic')
const startButtonListenerEpic = require('./startButtonListenerEpic')

const buttonPressesEpic = (
	combineEpics(
		chooseButtonActionEpic,
		executeButtonPressesEpic,
		executeCommandEpic,
		requestsEpic,
		startButtonListenerEpic,
	)
)

module.exports = {
	buttonPressesEpic,
}
