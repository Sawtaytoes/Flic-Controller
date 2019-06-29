const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { configurations } = require('@redux-observable-backend/node')
const { FlicClient } = require('$lib/fliclibNodeJs')
const { map, switchMap } = require('rxjs/operators')
const { ofTaskName } = require('@redux-observable-backend/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@redux-observable-backend/node/redux/tasks/actions')

const { addFlicClient } = require('./actions')

const startFlicClientEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(START_TASK),
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
