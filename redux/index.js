const { combineEpics } = require('redux-observable')
const { combineReducers } = require('redux')
const { webSocketsEpic, webSocketsReducers } = require('@ghadyani-framework/websocket')

const { buttonPressesEpic } = require('./buttonPresses')
const { commandsEpic } = require('./commands')

const rootEpic = (
	combineEpics(
		buttonPressesEpic,
		commandsEpic,
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
