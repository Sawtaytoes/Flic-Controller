import { doSomething } from './actions'

const timeLimit = 300

let timeoutId = 0

const numButtonPresses = {
	numDown: 0,
	numUp: 0,
}

const resetButtonPresses = callback => () => {
	numButtonPresses.numDown = 0
	numButtonPresses.numUp = 0

	callback()
}

const doButtonPressAction = (bluetoothAddress, numButtonPresses) => () => (
	doSomething
)

const handleButtonPress = buttonState => {
	if (buttonState === 'ButtonDown') {
		numButtonPresses.numDown += 1
	}

	else if (buttonState === 'ButtonUp') {
		numButtonPresses.numUp += 1
	}

	clearTimeout(timeoutId)

	timeoutId = (
		setTimeout(
			resetButtonPresses(
				doButtonPressAction(
					bluetoothAddress,
					numButtonPresses
				)
			),
			timeLimit
		)
	)
}

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
