const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')
const { webSocketsEpic, webSocketsReducers } = require('@redux-observable-backend/websocket')

const { buttonPressesEpic } = require('./buttonPresses')
const { connectionsEpic } = require('./connections')

const rootEpic = (
	combineEpics(
		buttonPressesEpic,
		connectionsEpic,
		webSocketsEpic,
	)
)

const rootReducers = {
	...webSocketsReducers,
}

const rootReducer = (
	combineReducers(
		rootReducers,
	)
)

module.exports = {
	rootEpic,
	rootReducers,
	rootReducer,
}
