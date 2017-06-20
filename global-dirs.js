// Setup directories
const base = global.baseDir

const api = `${base}api/`
const cache = `${base}.cache/`
const server = `${base}server/`

const middleware = `${api}middleware/`
const utils = `${api}utils/`

const configs = `${server}configs/`
const services = `${server}services/`

module.exports = {
	api,
	base,
	cache,
	configs,
	middleware,
	server,
	services,
	utils,
}
