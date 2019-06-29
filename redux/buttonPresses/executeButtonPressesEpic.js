const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { map, switchMap, take } = require('rxjs/operators')
const { messages } = require('@redux-observable-backend/websocket')
const { of } = require('rxjs')
const { ofType } = require('redux-observable')

const buttonConfigs = require('./utils/buttonConfigs')

const {
	executeCommand,
	EXECUTE_BUTTON_PRESSES,
} = require('./actions')

const getPressActionName = ({
	pressCount,
	pressType,
}) => (
	pressType === 'press'
	? `${pressCount}press`
	: `${pressCount}pressHold`
)

const selectButtonConfig = (
	buttonId,
) => (
	buttonConfigs[
		buttonId
	]
)

const executeButtonPressesEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(EXECUTE_BUTTON_PRESSES),
		switchMap(({
			buttonId,
			connection,
			pressCount,
			pressType,
		}) => (
			of([
				(
					selectButtonConfig(
						buttonId,
					)
				),
				(
					getPressActionName({
						pressCount,
						pressType,
					})
				),
			])
			.pipe(
				take(1),
				map(([
					buttonConfig,
					pressActionName,
				]) => (
					buttonConfig
					&& (
						buttonConfig[
							pressActionName
						]
					)
				)),
				map(actionSets => (
					actionSets
					? (
						executeCommand(
							actionSets
						)
					)
					: (
						messages
						.actions
						.sendMessage({
							connection,
							message: {
								errorMessage: (
									"Command does not exist for button:"
									.concat(' ')
									.concat(buttonId)
									.concat(' ')
									.concat(`when ${pressType}ing ${pressCount} times.`)
								),
								type: 'RESPONSE::ERROR_MESSAGE',
							},
						})
					)
				)),
			)
		)),
		catchEpicError(),
	)
)

module.exports = executeButtonPressesEpic
