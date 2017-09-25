import { singlePressAction } from './actions'

const createButtonObserver = bluetoothAddress => observer => (
	new FlicConnectionChannel(bluetoothAddress)
	.on(
		'buttonUpOrDown',
		buttonPressState => observer.next(buttonPressState)
	)
)

const listenForButtonPress = bluetoothAddress => {
	Rx.Observable
	.create(
		createButtonObserver(bluetoothAddress)
	)
	.subscribe(singlePressAction)
}
