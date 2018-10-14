const RECORD_BUTTON_PRESS_SET = 'BUTTON_PRESSES::RECORD_BUTTON_PRESS_SET'

const recordButtonPressSet = (
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
	RECORD_BUTTON_PRESS_SET,
	recordButtonPressSet,
}
