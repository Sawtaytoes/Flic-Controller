const test = require('ava')

test('Handle Button Press: ', t => {
	const buttonConfigs = {
		'00:00:00:00:00:00': {
			name: 'Master Bathroom',
			'1press': {
				action: 'toggle-scene',
				device: 'lifx',
				name: 'Shower',
			},
			'2press': {
				action: 'toggle-scene',
				device: 'lifx',
				name: 'Shower',
			},
			'1pressHold': {
				action: 'toggle-group',
				device: 'lifx',
				name: 'Master Bathroom',
			},
		}
	}

	t.true(true)
})
