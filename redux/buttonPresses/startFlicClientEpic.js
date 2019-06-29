const { catchEpicError, stateSelector } = require('@redux-observable-backend/redux-utils')
const { configurationSetSelector } = require('@redux-observable-backend/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@redux-observable-backend/node/redux/configurations/actions')
const { FlicClient } = require('$lib/fliclibNodeJs')
const { map, switchMap } = require('rxjs/operators')
const { ofTaskName } = require('@redux-observable-backend/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@redux-observable-backend/node/redux/tasks/actions')

const { addFlicClient } = require('./actions')

const configurationSetProps = {
	namespace: defaultConfigurationsNamespace,
}

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
		switchMap(() => (
			stateSelector({
				props: configurationSetProps,
				selector: configurationSetSelector,
				state$,
			})
		)),
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
