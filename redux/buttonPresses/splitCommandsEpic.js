const { catchEpicError } = require('@redux-observable-backend/redux-utils')
const { from } = require('rxjs')
const { ignoreElements, groupBy, map, mergeAll, mergeMap, pluck, tap, toArray } = require('rxjs/operators')
const { ofType } = require('redux-observable')

const {
	executeCommand,
	SPLIT_COMMANDS,
} = require('./actions')

const splitCommandsEpic = (
	action$,
) => (
	action$
	.pipe(
		ofType(SPLIT_COMMANDS),
		mergeMap(({ actionSets }) => (
			from(actionSets)
			.pipe(
				groupBy(({ device }) => (
					device
				)),
				mergeMap(deviceGroupedActionSets$ => (
					deviceGroupedActionSets$
					.pipe(
						groupBy(({ action }) => (
							action
						)),
						mergeAll(),
						toArray(),
					)
				)),
			)
		)),
		mergeMap(groupedActionSets => (
			from(groupedActionSets)
			.pipe(
				pluck('name'),
				toArray(),
				map(names => ({
					action: groupedActionSets[0].action,
					device: groupedActionSets[0].device,
					names,
				}))
			)
		)),
		map(executeCommand),
		catchEpicError(),
	)
)

module.exports = splitCommandsEpic
