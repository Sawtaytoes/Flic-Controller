const fetch = require('node-fetch')

const dir = require(`${global.baseDir}global-dirs`)
const config = require(`${dir.configs}config-settings`)

const LIFX_API = config.getLifxApiUri()
const WEMO_API = config.getWemoApiUri()

const executeButtonPressActions = actionSet => {
	const lifxConfigs = (
		actionSet
		.filter(({ device }) => device === 'lifx')
	)

	const lifxNames = (
		lifxConfigs
		.map(({ name }) => name)
	)

	const lifxAction = (
		lifxConfigs
		.slice(0, 1)
		.map(({ action }) => action)
		.find(() => true)
	)

	fetch(`${LIFX_API}/${lifxAction}s`, {
		body: JSON.stringify({ names: lifxNames }),
		headers: { 'Content-Type': 'application/json' },
		method: 'PUT',
	})

	const wemoConfigs = (
		actionSet
		.filter(({ device }) => device === 'wemo')
	)

	const wemoNames = (
		wemoConfigs
		.map(({ name }) => name)
	)

	const wemoAction = (
		wemoConfigs
		.slice(0, 1)
		.map(({ action }) => action)
		.find(() => true)
	)

	fetch(`${WEMO_API}/${wemoAction}s`, {
		body: JSON.stringify({ names: wemoNames }),
		headers: { 'Content-Type': 'application/json' },
		method: 'PUT',
	})
	.then(({ status, statusText }) => console.log(status, statusText))
	.catch(console.error)
}

module.exports = executeButtonPressActions
