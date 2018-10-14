const { ignoreElements, tap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const { RECORD_BUTTON_PRESS_SET } = require('$redux/buttonPresses/actions')

const executeCommandsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(RECORD_BUTTON_PRESS_SET),
		tap(console.log),
		ignoreElements(),
	)
)

module.exports = executeCommandsEpic
