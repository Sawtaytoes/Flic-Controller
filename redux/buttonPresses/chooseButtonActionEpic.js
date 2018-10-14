const { map, switchMap, take } = require('rxjs/operators')
const { of } = require('rxjs')
const { ofType } = require('redux-observable')
const { sendMessage } = require('@ghadyani-framework/websocket/redux/messages/actions')

const buttonConfigs = require('./utils/buttonConfigs')

const {
	executeButtonCommand,
	RECORD_BUTTON_PRESS_SET,
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

const chooseButtonActionEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(RECORD_BUTTON_PRESS_SET),
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
						executeButtonCommand(
							actionSets
						)
					)
					: (
						sendMessage({
							connection,
							message: {
								errorMessage: (
									"Command does not exist for button:"
									.concat(' ')
									.concat(buttonId)
									.concat(' ')
									.concat(`when ${pressType}ing ${pressCount} times.`)
								),
								type: 'RESPONSE::ERROR',
							},
						})
					)
				)),
			)
		)),
	)
)

module.exports = chooseButtonActionEpic
