const ACTIONS = {
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_SCENE: 'toggle-scene',
}

const LIGHTS = {
	LATE_NIGHT_BATHROOM: 'Late Night Bathroom',
	MASTER_BATHROOM: 'Master Bathroom',
	SHOWER: 'Shower',
}

const buttonConfigs = {
	'80:e4:da:72:9d:27': {
		name: 'Master Bedroom',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.SHOWER,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_BATHROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_GROUP,
			lights: LIGHTS.MASTER_BATHROOM,
		},
	}
}

module.exports = buttonConfigs
