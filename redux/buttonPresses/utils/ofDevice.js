const { filter } = require('rxjs/operators')

const ofDevice = (
	expectedDevice => (
		filter(({ device }) => (
			device === expectedDevice
		))
	)
)

module.exports = ofDevice
