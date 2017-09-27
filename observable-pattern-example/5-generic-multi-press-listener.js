import {
	BUTTON_DOWN,
	BUTTON_UP,
	doButtonPressAction,
} from './actions'

const timeLimit = 300

let timeoutId = 0

const numButtonPresses = {
	numDown: 0,
	numUp: 0,
}

const resetButtonPresses = () => {
	numButtonPresses.numDown = 0
	numButtonPresses.numUp = 0
}

const handleButtonPress = buttonState => {
	if (buttonState === BUTTON_DOWN) {
		numButtonPresses.numDown += 1
	}

	else if (buttonState === BUTTON_UP) {
		numButtonPresses.numUp += 1
	}

	clearTimeout(timeoutId)

	new Promise(resolve => (
		timeoutId = setTimeout(resolve, timeLimit)
	))
	.then(resetButtonPresses)
	.then(
		doButtonPressAction(
			bluetoothAddress,
			{ ...numButtonPresses }
		)
	)
}

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
