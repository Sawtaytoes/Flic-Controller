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

## Sample

### Execute Button Presses
To test joining a channel, load up a browser, and go to `about:blank`.

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
