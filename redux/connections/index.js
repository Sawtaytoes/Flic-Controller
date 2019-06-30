const { combineEpics } = require('redux-observable')

const connectToLifxEpic = require('./connectToLifxEpic')

const connectionsEpic = (
	combineEpics(
		connectToLifxEpic,
	)
)

module.exports = {
	connectionsEpic,
}
