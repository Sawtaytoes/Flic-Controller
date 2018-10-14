const CAPTURE_BUTTON_PRESS = 'BUTTON_PRESSES::CAPTURE_BUTTON_PRESS'
const EXECUTE_BUTTON_PRESSES = 'BUTTON_PRESSES::EXECUTE_BUTTON_PRESSES'
const EXECUTE_COMMAND = 'BUTTON_PRESSES::EXECUTE_COMMAND'

const captureButtonPress = ({
	bluetoothAddress,
	buttonPressState,
	hostname,
}) => ({
	buttonId: bluetoothAddress,
	buttonPressState,
	hostname,
	type: CAPTURE_BUTTON_PRESS,
})

const executeButtonPresses = ({
	buttonId,
	connection,
	pressCount,
	pressType,
}) => ({
	buttonId,
	connection,
	pressCount,
	pressType,
	type: EXECUTE_BUTTON_PRESSES,
})

const executeCommand = (
	actionSets,
) => ({
	actionSets,
	type: EXECUTE_COMMAND,
})

module.exports = {
	CAPTURE_BUTTON_PRESS,
	captureButtonPress,
	EXECUTE_BUTTON_PRESSES,
	EXECUTE_COMMAND,
	executeButtonPresses,
	executeCommand,
}
