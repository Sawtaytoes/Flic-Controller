const ACTION = {
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_SCENE: 'toggle-scene',
}

const NAME = {
	LATE_NIGHT_BATHROOM: 'Late Night Bathroom',
	MASTER_BATHROOM: 'Master Bathroom',
	SHOWER: 'Shower',
}

const buttonConfigs = {
	'00:00:00:00:00:00': {
		name: 'Master Bathroom',
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			name: NAME.SHOWER,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			name: NAME.LATE_NIGHT_BATHROOM,
		},
		Hold: {
			action: ACTION.TOGGLE_GROUP,
			name: NAME.MASTER_BATHROOM,
		},
	}
}

module.exports = buttonConfigs
