import {
	BUTTON_DOWN,
	singlePressAction,
} from './actions'

const handleButtonPress = buttonState => (
	buttonState === BUTTON_DOWN
	&& singlePressAction()
)

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
