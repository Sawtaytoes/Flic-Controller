const { resolve } = require('path')

module.exports = {
	extends: [
		'@ghadyani-eslint/node',
	],
	settings: {
		'import/resolver': {
			alias: [
				['$redux', resolve(__dirname, 'redux')],
				['$utils', resolve(__dirname, 'utils')],
			],
		}
	},
}
