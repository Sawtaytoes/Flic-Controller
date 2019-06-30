const chalk = require('chalk')
const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { externalConnections } = require('@redux-observable-backend/websocket')
const { catchError, filter, ignoreElements, map, mapTo, mergeMap, tap } = require('rxjs/operators')
const { of } = require('rxjs')
const { ofType } = require('redux-observable')

const { EXECUTE_COMMAND } = require('./actions')

const executeWebSocketCommandEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(EXECUTE_COMMAND),
		mergeMap(({
			action,
			device,
			names,
		}) => (
			of(state$.value)
			.pipe(
				map(
					externalConnections
					.selectors
					.selectExternalConnection({
						namespace: device,
					})
				),
				filter(Boolean),
				tap(connection => (
					connection
					.next({
						names,
						type: action,
					})
				)),
				mapTo({}),
				catchError(error => (
					of({ error })
				)),
				tap(({
					error,
				}) => {
					console
					.info(
						(
							error
							? (
								chalk
								.red(
									"❌ Failed to send command:"
								)
							)
							: (
								chalk
								.green(
									"✔️ Successfully executed button command:"
								)
							)
						),
						(
							'\n'
						),
						({
							action,
							names,
						}),
					)
				}),
			)
		)),
		catchEpicError(),
		ignoreElements(),
	)
)

module.exports = executeWebSocketCommandEpic
