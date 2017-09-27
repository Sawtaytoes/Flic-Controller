import {
	BUTTON_DOWN,
	BUTTON_UP,
	holdPressAction,
	singlePressAction,
} from './actions'

const timeLimit = 300

let startTime = Date.now()
let timeoutId = 0

const isWithinTimeLimit = () => Date.now() - startTime < timeLimit

const handleButtonPress = buttonState => {
	if (buttonState === BUTTON_DOWN) {
		startTime = Date.now()
		timeoutId = setTimeout(holdPressAction, timeLimit)
	}

	else if (buttonState === BUTTON_UP) {
		if (isWithinTimeLimit()) {
			clearTimeout(timeoutId)
			startTime = 0

			singlePressAction()
		}
	}
}

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
