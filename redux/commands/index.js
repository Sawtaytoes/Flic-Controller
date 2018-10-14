const { combineEpics } = require('redux-observable')

const executeCommandsEpic = require('./executeCommandsEpic')

const commandsEpic = (
	combineEpics(
		executeCommandsEpic,
	)
)

module.exports = {
	commandsEpic,
}
