# Flic Controller
WebSockets-based Flic Controller software. This is the server portion which executes commands. There is a related piece which listens for button presses and sends them to this controller.

For an example use case, look at [`./app.js`](app.js).

## Installation

### `npm`
```sh
npm i
```

### `yarn`
```sh
yarn
```

## Configuration
Create a `localConfig.js` in the project root. Here, you'll add your app configurations; namely, the flicButtonServers, LIFX API server, and WeMo API server.

Your `localConfig.js` will look something like this:

```js
module.exports = {
	externalConnections: {
		lifxApi: {
			hostname: '',
			port: 80,
			protocol: 'ws',
			protocolVersion: 'v1',
		},
	},

	flicButtonServers: [{
		hostname: 'raspberry-pi-1',
		port: 5551,
	}, {
		hostname: 'raspberry-pi-2',
		port: 5551,
	}, {
		hostname: 'raspberry-pi-2',
		port: 5551,
	}],

	wemoApi: {
		hostname: 'wemo.example.com',
		port: 80,
		protocol: 'http',
	},
}
```

## Testing Button Presses
To test executing button presses, load up a browser, and go to `about:blank`.

Then paste this into the devtools console:
```js
webSocket = new WebSocket('ws://localhost:3000', 'v1')
webSocket.onmessage = console.log
webSocket.onerror = console.error
webSocket.onclose = console.info
webSocket.onopen = () => {
	console.log('READY')

	webSocket
	.send(
		JSON
		.stringify({
			buttonId: '80:e4:da:86:44:9e',
			pressCount: 1,
			pressType: 'hold',
			type: 'REQUEST::EXECUTE_BUTTON_PRESSES',
		})
	)
}
```
