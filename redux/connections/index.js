const { combineEpics } = require('redux-observable')

const connectToServersEpic = require('./connectToServersEpic')

const connectionsEpic = (
	combineEpics(
		connectToServersEpic,
	)
)

module.exports = {
	connectionsEpic,
}
