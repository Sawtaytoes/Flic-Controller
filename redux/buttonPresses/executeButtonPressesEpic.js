const chalk = require('chalk')
const { buffer, debounceTime, filter, map, tap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const {
	CAPTURE_BUTTON_PRESS,
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

const getNumberOfButtonDowns = getNumberOfPresses(BUTTON_DOWN)
const getNumberOfButtonUps = getNumberOfPresses(BUTTON_UP)

const executeButtonPressesEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(CAPTURE_BUTTON_PRESS),
		buffer(
			action$
			.pipe(
				ofType(CAPTURE_BUTTON_PRESS),
				debounceTime(300),
			)
		),
		// Ignore first item if it was someone lifting up their finger.
		map(buttonPresses => (
			(
				buttonPresses[0]
				.buttonPressState === BUTTON_UP
			)
			? buttonPresses.slice(1)
			: buttonPresses
		)),
		filter(buttonPresses => (
			buttonPresses
			.length > 0
		)),
		map(buttonPresses => ({
			buttonId: (
				buttonPresses[0]
				.buttonId
			),
			buttonPressStates: (
				buttonPresses
				.map(({ buttonPressState }) => (
					buttonPressState
				))
			),
			hostname: (
				buttonPresses[0]
				.hostname
			),
		})),
		map(({
			buttonPressStates,
			...props
		}) => ({
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
	)
)

module.exports = executeButtonPressesEpic
