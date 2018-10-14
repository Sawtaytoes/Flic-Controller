const { bindCallback, fromEvent, of } = require('rxjs')
const { configurationSetSelector } = require('@ghadyani-framework/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@ghadyani-framework/node/redux/configurations/actions')
const { FlicClient, FlicConnectionChannel } = require('$lib/fliclibNodeJs')
const { map, mergeMap, switchMap, tap } = require('rxjs/operators')
const { ofTaskName } = require('@ghadyani-framework/node')
const { ofType } = require('redux-observable')
const { START_TASK } = require('@ghadyani-framework/node/redux/tasks/actions')
const { stateSelector } = require('@ghadyani-framework/redux-utils')

const { captureButtonPress } = require('./actions')

const configurationSetProps = {
	namespace: defaultConfigurationsNamespace,
}

const startButtonListenerEpic = (
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
		mergeMap(({
			flicClient,
			hostname,
		}) => (
			fromEvent(
				flicClient,
				'ready',
			)
			.pipe(
				switchMap(() => (
					bindCallback(
						flicClient
						.getInfo
						.bind(flicClient)
					)()
				)),
				switchMap(flicClientInfo => (
					flicClientInfo
					.bdAddrOfVerifiedButtons
				)),
				mergeMap(bluetoothAddress => (
					of(
						new FlicConnectionChannel(
							bluetoothAddress,
						)
					)
					.pipe(
						tap(flicConnectionChannel => (
							flicClient
							.addConnectionChannel(
								flicConnectionChannel,
							)
						)),
						switchMap(flicConnectionChannel => (
							fromEvent(
								flicConnectionChannel,
								'buttonUpOrDown',
							)
						)),
						map(([buttonPressState]) => ({
							bluetoothAddress,
							buttonPressState,
							hostname,
						})),
						map(captureButtonPress),
					)
				)),
			)
		)),
	)
)

module.exports = startButtonListenerEpic
