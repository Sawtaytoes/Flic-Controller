const fs = require('fs')

try {
	fs
	.mkdirSync('.cache')
}
catch(exception) {
	if (exception.code !== 'EEXIST') {
		throw exception
	}
}
