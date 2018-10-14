const EXECUTE_COMMAND = 'COMMANDS::EXECUTE_COMMAND'

const executeCommand = (
	payload,
) => ({
	payload,
	type: EXECUTE_COMMAND,
})

module.exports = {
	EXECUTE_COMMAND,
	executeCommand,
}
