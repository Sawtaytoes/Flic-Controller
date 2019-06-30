const chalk = require('chalk')
const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { externalConnections } = require('@redux-observable-backend/websocket')
const { catchError, ignoreElements, map, mapTo, mergeMap, tap } = require('rxjs/operators')
const { of } = require('rxjs')
const { ofType } = require('redux-observable')

const ofDevice = require('./utils/ofDevice')
const { EXECUTE_COMMAND } = require('./actions')

const executeLifxCommandEpic = (
	action$,
	state$,
) => (
	action$
	.pipe(
		ofType(EXECUTE_COMMAND),
		ofDevice('lifxApi'),
		mergeMap(({
			action,
			names,
		}) => (
			of(state$.value)
			.pipe(
				map(
					externalConnections
					.selectors
					.selectExternalConnection({
						namespace: 'ws://lol.lifx.kevinghadyani.com:36001@v1',
					})
				),
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

module.exports = executeLifxCommandEpic
