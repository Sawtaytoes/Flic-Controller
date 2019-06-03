const { configurationSetSelector } = require('@ghadyani-framework/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@ghadyani-framework/node/redux/configurations/actions')
const { FlicClient } = require('$lib/fliclibNodeJs')
const { map, switchMap } = require('rxjs/operators')
const { ofTaskName } = require('@ghadyani-framework/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@ghadyani-framework/node/redux/tasks/actions')
const { stateSelector } = require('@ghadyani-framework/redux-utils')

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
	)
)

module.exports = startFlicClientEpic
