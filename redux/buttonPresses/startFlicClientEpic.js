const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { configurations, ofTaskName, tasks } = require('@redux-observable-backend/node')
const { FlicClient } = require('$lib/fliclibNodeJs')
const { map, switchMap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const { addFlicClient } = require('./actions')

const startFlicClientEpic = (
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
		switchMap(({ flicButtonServers }) => (
			flicButtonServers
		)),
		map(({
			hostname,
			port,
		}) => ({
			flicClient: (
				new FlicClient(
					hostname,
					port,
				)
			),
			hostname,
		})),
		map(addFlicClient),
		catchEpicError(),
	)
)

module.exports = startFlicClientEpic
