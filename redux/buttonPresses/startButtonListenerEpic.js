const { bindCallback, fromEvent, of } = require('rxjs')
const { FlicConnectionChannel } = require('$lib/fliclibNodeJs')
const { buffer, debounceTime, map, mergeMap, switchMap, tap } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const {
	ADD_FLIC_CLIENT,
	captureButtonPresses,
} = require('./actions')

const startButtonListenerEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(ADD_FLIC_CLIENT),
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
						map(flicConnectionChannel => (
							fromEvent(
								flicConnectionChannel,
								'buttonUpOrDown',
							)
						)),
						switchMap(buttonPress$ => (
							buttonPress$
							.pipe(
								map(([buttonPressState]) => (
									buttonPressState
								)),
								buffer(
									buttonPress$
									.pipe(
										debounceTime(300),
									)
								),
							)
						)),
						map(buttonPressStates => ({
							bluetoothAddress,
							buttonPressStates,
							hostname,
						})),
						map(captureButtonPresses),
					)
				)),
			)
		)),
	)
)

module.exports = startButtonListenerEpic
