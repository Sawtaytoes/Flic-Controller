const { combineEpics } = require('redux-observable')

const requestsEpic = require('./requestsEpic')

const buttonPressesEpic = (
	combineEpics(
		requestsEpic,
	)
)

module.exports = {
	buttonPressesEpic,
}
