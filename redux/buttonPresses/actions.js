const ADD_FLIC_CLIENT = 'BUTTON_PRESSES::ADD_FLIC_CLIENT'
const CAPTURE_BUTTON_PRESSES = 'BUTTON_PRESSES::CAPTURE_BUTTON_PRESSES'
const EXECUTE_BUTTON_PRESSES = 'BUTTON_PRESSES::EXECUTE_BUTTON_PRESSES'
const EXECUTE_COMMAND = 'BUTTON_PRESSES::EXECUTE_COMMAND'

const addFlicClient = ({
	flicClient,
	hostname,
}) => ({
	flicClient,
	hostname,
	type: ADD_FLIC_CLIENT,
})

const captureButtonPresses = ({
	bluetoothAddress,
	buttonPressStates,
	hostname,
}) => ({
	buttonId: bluetoothAddress,
	buttonPressStates,
	hostname,
	type: CAPTURE_BUTTON_PRESSES,
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
	ADD_FLIC_CLIENT,
	addFlicClient,
	CAPTURE_BUTTON_PRESSES,
	captureButtonPresses,
	EXECUTE_BUTTON_PRESSES,
	EXECUTE_COMMAND,
	executeButtonPresses,
	executeCommand,
}
