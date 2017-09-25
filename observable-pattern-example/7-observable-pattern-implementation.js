import { doSomething } from './actions'

const createButtonObserver = bluetoothAddress => observer => (
	new FlicConnectionChannel(bluetoothAddress)
	.on(
		'buttonUpOrDown',
		buttonPressState => observer.next(buttonPressState)
	)
)

const doButtonPressAction = (bluetoothAddress, numButtonPresses) => doSomething

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
	.map(buttonPressStates => (
		buttonPressStates[0] === BUTTON_UP
		? buttonPressStates.slice(1)
		: buttonPressStates
	))
	.map(buttonPressStates => ({
		numDown: getNumberOfDowns(buttonPressStates),
		numUp: getNumberOfUps(buttonPressStates),
	}))
	.subscribe(numButtonPresses => (
		doButtonPressAction(
			bluetoothAddress,
			numButtonPresses
		)
	)
}
