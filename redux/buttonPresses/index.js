const { combineEpics } = require('redux-observable')

const chooseButtonActionEpic = require('./chooseButtonActionEpic')
const executeButtonCommandEpic = require('./executeButtonCommandEpic')
const requestsEpic = require('./requestsEpic')

const buttonPressesEpic = (
	combineEpics(
		chooseButtonActionEpic,
		executeButtonCommandEpic,
		requestsEpic,
	)
)

module.exports = {
	buttonPressesEpic,
}
