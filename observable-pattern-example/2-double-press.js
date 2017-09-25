import {
	doublePressAction,
	singlePressAction,
} from './actions'

const timeLimit = 300

let startTime = Date.now()
let timeoutId = 0

const isWithinTimeLimit = () => Date.now() - startTime < timeLimit

const handleButtonPress = buttonState => {
	if (buttonState !== 'ButtonDown') {
		return
	}

	if (isWithinTimeLimit()) {
		clearTimeout(timeoutId)
		startTime = 0

		doublePressAction()
	}

	startTime = Date.now()
	timeoutId = setTimeout(singlePressAction, timeLimit)
}

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
