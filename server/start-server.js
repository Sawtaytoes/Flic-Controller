const fs = require('fs')

const dir = require(`${global.baseDir}/global-dirs`)
const config = require(`${dir.configs}config-settings`)


// --------------------------------------------------------
// Server Listener
// --------------------------------------------------------

const secureServer = serverSettings => {
	const https = require('https')
	const enforce = require('express-sslify')

	serverSettings
	.use(enforce.HTTPS({ trustProtoHeader: true }))

	return https.createServer({
		cert: fs.readFileSync('./conf/domain-crt.txt'),
		key: fs.readFileSync('./conf/key.pem'),
	}, serverSettings)
}

module.exports = serverSettings => {
	const server = config.isSecure() ? secureServer(serverSettings) : serverSettings
	server.listen(config.getPort(), err => {
		if (err) { console.error(err) }
		console.info('Web Server running as', config.getServerUrl())
	})
}
