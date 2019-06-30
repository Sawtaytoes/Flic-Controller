const chalk = require('chalk')
const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { catchError, filter, ignoreElements, map, mergeMap, pluck, reduce, switchMap, tap, toArray } = require('rxjs/operators')
const { configurations } = require('@redux-observable-backend/node')
const { from, of } = require('rxjs')
const { ofType } = require('redux-observable')

const { EXECUTE_COMMAND } = require('./actions')

const assembleUrl = ({
	hostname,
	port,
	protocol,
}) => (
	`${protocol}://`
	.concat(hostname)
	.concat(`:${Number(port)}`)
)

const combineSimilarRequests = (
	map,
	{
		name,
		url,
	},
) => (
	(
		map
		.has(url)
	)
	? (
		map
		.set(
			(
				url
			),
			(
				map
				.get(url)
				.concat(name)
			)
		)
	)
	: (
		map
		.set(
			url,
			[name],
		)
	)
)

const executeCommandEpic = (
	action$,
	state$,
	{ fetch },
) => (
	action$
	.pipe(
		ofType(EXECUTE_COMMAND),
		pluck('actionSets'),
		map(actionSets => (
			(
				Array
				.isArray(actionSets)
			)
			? actionSets
			: [actionSets]
		)),
		mergeMap(actionSets => (
			of(state$.value)
			.pipe(
				map(
					configurations
					.selectors
					.selectConfigurationSet()
				),
				switchMap(configurationSet => (
					from(actionSets)
					.pipe(
						map(({
							action,
							device,
							name,
						}) => ({
							name,
							url: (
								assembleUrl(
									configurationSet[
										device
									]
								)
								.concat(`/${action}`)
							),
						})),
						reduce(
							combineSimilarRequests,
							new Map(),
						),
						switchMap(requests => (
							Array
							.from(requests)
						)),
						map(([
							url,
							names,
						]) => ({
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
						mergeMap(({
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
								}) => (
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
								)),
							)
						)),
						toArray(),
						tap(() => (
							console
							.info(
								chalk
								.green(
									"Completed executing button command(s)."
								)
							)
						)),
						tap(responses => (
							responses
							.map(({
								error,
							}) => (
								error
							))
							.filter(Boolean)
							.forEach((
								error,
							) => (
								console
								.error(
									chalk
									.redBright(
										error
									)
								)
							))
						)),
					)
				)),
			)
		)),
		catchEpicError(),
		ignoreElements(),
	)
)

module.exports = executeCommandEpic
