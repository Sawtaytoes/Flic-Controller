import {
	doublePressAction,
	holdPressAction,
	singlePressAction,
} from './actions'

const timeLimit = 300

let startTime = Date.now()
let timeoutId = 0

const isWithinTimeLimit = () => Date.now() - startTime < timeLimit

const handleButtonPress = buttonState => {
	if (buttonState === 'ButtonDown') {
		if (isWithinTimeLimit()) {
			clearTimeout(timeoutId)
			startTime = 0

			doublePressAction()
		}

		else {
			startTime = Date.now()
			timeoutId = (
				setTimeout(holdPressAction, timeLimit)
			)
		}
	}

	else if (buttonState === 'ButtonUp') {
		if (isWithinTimeLimit()) {
			clearTimeout(timeoutId)

			startTime = Date.now()
			timeoutId = (
				setTimeout(singlePressAction, timeLimit)
			)
		}
	}
}

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
