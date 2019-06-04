const chalk = require('chalk')
const { catchEpicError } = require('@ghadyani-framework/redux-utils')
const { filter, map, mergeMap, tap } = require('rxjs/operators')
const { of } = require('rxjs')
const { ofType } = require('redux-observable')

const {
	CAPTURE_BUTTON_PRESSES,
	executeButtonPresses,
} = require('./actions')

const BUTTON_UP = 'ButtonUp'
const BUTTON_DOWN = 'ButtonDown'

const getNumberOfPresses = (
	requiredButtonPressState,
) => (
	buttonPressStates,
) => (
	buttonPressStates
	.filter(buttonPressState => (
		buttonPressState === requiredButtonPressState
	))
	.length
)

const getNumberOfButtonDowns = (
	getNumberOfPresses(BUTTON_DOWN)
)

const getNumberOfButtonUps = (
	getNumberOfPresses(BUTTON_UP)
)

const executeButtonPressesEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(CAPTURE_BUTTON_PRESSES),
		mergeMap(({
			buttonPressStates,
			...props
		}) => (
			of(buttonPressStates)
			.pipe(
				map(buttonPressStates => (
					// Ignore first item if it was someone lifting up their finger.
					buttonPressStates[0] === BUTTON_UP
					? buttonPressStates.slice(1)
					: buttonPressStates
				)),
				filter(buttonPressStates => (
					buttonPressStates
					.length > 0
				)),
				map(buttonPressStates => ({
					...props,
					numberOfButtonDowns: (
						getNumberOfButtonDowns(
							buttonPressStates,
						)
					),
					numberOfButtonUps: (
						getNumberOfButtonUps(
							buttonPressStates,
						)
					),
				})),
			)
		)),
		tap(props => (
			console
			.info(
				(
					chalk
					.yellow('[BUTTON PRESSES]')
					.concat('\n')
				),
				(
					props
				),
			)
		)),
		map(({
			buttonId,
			numberOfButtonDowns,
			numberOfButtonUps,
		}) => ({
			buttonId,
			pressCount: numberOfButtonDowns,
			pressType: (
				numberOfButtonDowns === numberOfButtonUps
				? 'press'
				: 'pressHold'
			),
		})),
		map(executeButtonPresses),
		catchEpicError(),
	)
)

module.exports = executeButtonPressesEpic
