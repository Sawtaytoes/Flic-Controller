const fetch = require('node-fetch')

const dir = require(`${global.baseDir}directories`)
const config = require(`${dir.configs}`)
const logger = require(`${dir.utils}logger`)

const buildWebRequests = actionSet => (
	Array.from(
		actionSet
		.map(({ action, device, name }) => ({
			name,
			url: `${config.getDeviceApiUri(device)}/${action}`,
		}))
		.reduce(
			(map, { url, name }) => (
				map.has(url)
				? (
					map.set(
						url,
						(
							map
							.get(url)
							.concat(name)
						)
					)
				)
				: map.set(url, [name])
			),
			new Map()
		)
	)
	.map(([url, names]) => ([
		url,
		{
			body: JSON.stringify({ names }),
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT',
		}
	]))
)

const formatActionSet = actionSet => (
	Array.isArray(actionSet)
	? actionSet
	: [actionSet]
)

const sendWebRequests = requests => (
	requests
	.map(([url, init]) => (
		fetch(url, init)
		.then(() => logger.log("Action executed successfully"))
		.then(() => logger.log(url))
		.then(() => logger.log(init))
		.catch(err => logger.logError(url, init, err))
	))
)

const executeActionSets = actionSet => (
	actionSet
	? (
		Promise.resolve(actionSet)
		.then(formatActionSet)
		.then(buildWebRequests)
		.then(sendWebRequests)
		.catch(logger.logError)
	)
	: logger.logError("There is no action for this press type.")
)

module.exports = {
	buildWebRequests,
	default: executeActionSets,
	formatActionSet,
	sendWebRequests,
}
