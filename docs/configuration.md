# Configuration
Default config values are found in [server/configs/configSettings.js](server/configs/configSettings.js).

Create a custom `config.js` in `server/configs/` to change 


## Example
```js
module.exports = {
	env: 'development',
	
	lifxApi: {
		hostname: 'lifx.local',
		port: 4000,
	},
}
```


# Config Values

## `env`
Node.js environment. This value can be either `'development'` or `'production'`.

### Environment Variables
`NODE_ENV`

### Example
```
env: 'development',
```


## `flicClient`
Domain location of the Flic Client process from the Flic SDK.

### Environment Variables
`FLIC_CLIENT_HOSTNAME`
`FLIC_CLIENT_PORT`

### Example
```
flicClient: {
	hostname: 'localhost',
	port: 5551,
},
```


## `lifxApi`
Domain Location of the LIFX Controller.

### Environment Variables
`LIFX_API_HOSTNAME`
`LIFX_API_PORT`
`LIFX_API_PROTOCOL`

### Example
```
lifxApi: {
	hostname: 'localhost',
	port: 36001,
	protocol: 'http',
},
```


## `wemoApi`
Domain Location of the WeMo Controller.

### Environment Variables
`WEMO_API_HOSTNAME`
`WEMO_API_PORT`
`WEMO_API_PROTOCOL`

### Example
```
wemoApi: {
	hostname: 'localhost',
	port: 36002,
	protocol: 'http',
},
```
