import { singlePressAction } from './actions'

const handleButtonPress = buttonState => (
	buttonState === 'ButtonDown'
	&& singlePressAction()
)

const listenForButtonPress = bluetoothAddress => {
	new FlicConnectionChannel(bluetoothAddress)
	.on('buttonUpOrDown', handleButtonPress)
}
