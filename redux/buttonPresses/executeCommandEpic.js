const chalk = require('chalk')
const { catchError, ignoreElements, map, mergeMap, pluck, reduce, switchMap, tap, toArray } = require('rxjs/operators')
const { configurationSetSelector } = require('@ghadyani-framework/node/redux/configurations/selectors')
const { defaultConfigurationsNamespace } = require('@ghadyani-framework/node/redux/configurations/actions')
const { from, of } = require('rxjs')
const { ofType } = require('redux-observable')
const { stateSelector } = require('@ghadyani-framework/redux-utils')

const { EXECUTE_COMMAND } = require('./actions')

const configurationSetProps = {
	namespace: defaultConfigurationsNamespace,
}

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
		switchMap(actionSets => (
			stateSelector({
				props: configurationSetProps,
				selector: configurationSetSelector,
				state$,
			})
			.pipe(
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
		ignoreElements(),
	)
)

module.exports = executeCommandEpic
