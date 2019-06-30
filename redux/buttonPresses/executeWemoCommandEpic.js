const chalk = require('chalk')
const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { catchError, ignoreElements, map, mergeMap, pluck, switchMap, tap } = require('rxjs/operators')
const { configurations } = require('@redux-observable-backend/node')
const { from, of } = require('rxjs')
const { ofType } = require('redux-observable')

const ofDevice = require('./utils/ofDevice')
const { EXECUTE_COMMAND } = require('./actions')

const executeWemoCommandEpic = (
	action$,
	state$,
	{ fetch },
) => (
	action$
	.pipe(
		ofType(EXECUTE_COMMAND),
		ofDevice('wemoApi'),
		mergeMap(({
			action,
			names,
		}) => (
			of(state$.value)
			.pipe(
				map(
					configurations
					.selectors
					.selectConfigurationSet()
				),
				pluck('wemoApi'),
				map(({
					hostname,
					port,
					protocol,
				}) => (
					`${protocol}://`
					.concat(hostname)
					.concat(`:${Number(port)}`)
					.concat(`/${action}`)
				)),
				map(url => ({
					body: (
						JSON
						.stringify({ names })
					),
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'PUT',
					url,
				})),
				switchMap(({
					url,
					...fetchOptions
				}) => (
					from(
						fetch(
							url,
							fetchOptions,
						)
					)
					.pipe(
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
									...fetchOptions,
									url,
								}),
							)
						}),
					)
				)),
			)
		)),
		catchEpicError(),
		ignoreElements(),
	)
)

module.exports = executeWemoCommandEpic
