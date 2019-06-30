const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { map, mergeAll } = require('rxjs/operators')
const { configurations, ofTaskName, tasks } = require('@redux-observable-backend/node')
const { externalConnections } = require('@redux-observable-backend/websocket')
const { ofType } = require('redux-observable')

const connectToServersEpic = (
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
			.selectConfigurationSet({
				namespace: 'externalConnections',
			})
		),
		map(externalConnections => (
			Object
			.keys(externalConnections)
		)),
		mergeAll(),
		map(
			externalConnections
			.actions
			.connectToServer
		),
		catchEpicError(),
	)
)

module.exports = connectToServersEpic
