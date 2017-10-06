module.exports = {
	env: process.env.NODE_ENV,

	flicClient: {
		hostname: process.env.FLIC_CLIENT_HOSTNAME,
		port: process.env.FLIC_CLIENT_PORT,
	},

	lifxApi: {
		protocol: process.env.LIFX_API_PROTOCOL,
		hostname: process.env.LIFX_API_HOSTNAME,
		port: process.env.LIFX_API_PORT,
	},

	wemoApi: {
		protocol: process.env.WEMO_API_PROTOCOL,
		hostname: process.env.WEMO_API_HOSTNAME,
		port: process.env.WEMO_API_PORT,
	},
}
