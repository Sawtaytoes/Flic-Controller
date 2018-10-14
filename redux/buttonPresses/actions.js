const RECORD_BUTTON_PRESS_SET = 'BUTTON_PRESSES::RECORD_BUTTON_PRESS_SET'

const recordButtonPressSet = (
	buttonId,
	pressSet,
) => ({
	buttonId,
	pressSet,
	type: RECORD_BUTTON_PRESS_SET,
})

module.exports = {
	RECORD_BUTTON_PRESS_SET,
	recordButtonPressSet,
}
