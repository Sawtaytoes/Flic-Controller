const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { map, switchMap, tap } = require('rxjs/operators')
const { configurations, ofTaskName, tasks } = require('@redux-observable-backend/node')
const { externalConnections } = require('@redux-observable-backend/websocket')
const { ofType } = require('redux-observable')

const connectToLifxEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(
			tasks
			.actions
			.START_TASK
		),
		ofTaskName(
			'listen',
			'undefined',
		),
		map(() => state$.value),
		map(
			configurations
			.selectors
			.selectConfigurationSet()
		),
		map(({
			lifxApi,
		}) => ({
			protocolVersion: lifxApi.protocolVersion,
			url: (
				lifxApi.protocol
				.concat('://')
				.concat(lifxApi.hostname)
				.concat(':')
				.concat(lifxApi.port)
			),
		})),
		map(
			externalConnections
			.actions
			.connectToServer
		),
		catchEpicError(),
	)
)

module.exports = connectToLifxEpic
