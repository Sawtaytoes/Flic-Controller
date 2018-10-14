const EXECUTE_BUTTON_COMMAND = 'BUTTON_PRESSES::EXECUTE_BUTTON_COMMAND'
const RECORD_BUTTON_PRESS_SET = 'BUTTON_PRESSES::RECORD_BUTTON_PRESS_SET'

const executeButtonCommand = (
	actionSets,
) => ({
	actionSets,
	type: EXECUTE_BUTTON_COMMAND,
})

const recordButtonPressSet = ({
	buttonId,
	connection,
	pressCount,
	pressType,
}) => ({
	buttonId,
	connection,
	pressCount,
	pressType,
	type: RECORD_BUTTON_PRESS_SET,
})

module.exports = {
	EXECUTE_BUTTON_COMMAND,
	executeButtonCommand,
	RECORD_BUTTON_PRESS_SET,
	recordButtonPressSet,
}
