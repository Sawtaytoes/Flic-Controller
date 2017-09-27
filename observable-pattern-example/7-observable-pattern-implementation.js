import {
	BUTTON_UP,
	doButtonPressAction,
} from './actions'

const createButtonObserver = bluetoothAddress => observer => (
	new FlicConnectionChannel(bluetoothAddress)
	.on(
		'buttonUpOrDown',
		buttonPressState => observer.next(buttonPressState)
	)
)

const listenForButtonPress = bluetoothAddress => {
	const buttonUpDown$ = (
		Rx.Observable
		.create(
			createButtonObserver(bluetoothAddress)
		)
	)

	buttonUpDown$
	.buffer(
		buttonUpDown$
		.debounceTime(300)
	)
	.map(buttonStates => (
		buttonStates[0] === BUTTON_UP
		? buttonStates.slice(1)
		: buttonStates
	))
	.map(buttonStates => ({
		numDown: getNumberOfDowns(buttonStates),
		numUp: getNumberOfUps(buttonStates),
	}))
	.subscribe(
		doButtonPressAction(bluetoothAddress)
	)
}
