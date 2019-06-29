const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { map } = require('rxjs/operators')
const { ofRequestType } = require('@redux-observable-backend/websocket')

const {
	EXECUTE_BUTTON_PRESSES,
	executeButtonPresses,
} = require('./actions')

const requestsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofRequestType(EXECUTE_BUTTON_PRESSES),
		map(({
			buttonId,
			connection,
			pressCount,
			pressType,
		}) => ({
			buttonId,
			connection,
			pressCount,
			pressType,
		})),
		map(executeButtonPresses),
		catchEpicError(),
	)
)

module.exports = requestsEpic
