const ACTIONS = {
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_SCENE: 'toggle-scene',
}

const LIGHTS = {
	// Entryway
	NORMAL_ENTRYWAY: 'Normal Entryway',

	// Family Room
	BRIGHT_FAMILY_ROOM: 'Bright Family Room',
	LATE_NIGHT_FAMILY_ROOM: 'Late Night Family Room',
	FAMILY_ROOM: 'Master Family Room',
	NORMAL_FAMILY_ROOM: 'Normal Family Room',

	// Kitchen
	BRIGHT_KITCHEN: 'Bright Kitchen',
	KITCHEN: 'Master Kitchen',
	LATE_NIGHT_KITCHEN: 'Late Night Kitchen',
	NORMAL_KITCHEN: 'Normal Kitchen',

	// Living Room
	BRIGHT_LIVING_ROOM: 'Bright Living Room',
	LATE_NIGHT_LIVING_ROOM: 'Late Night Living Room',
	LIVING_ROOM: 'Living Room',
	NORMAL_LIVING_ROOM: 'Normal Living Room',

	// Master Bathroom
	ASHLEE_VANITY: 'Ashlee\'s Vanity',
	BRIGHT_MASTER_BATHROOM: 'Bright Bathroom',
	KEVIN_VANITY: 'Kevin\'s Vanity',
	LATE_NIGHT_MASTER_BATHROOM: 'Late Night Bathroom',
	MASTER_BATHROOM: 'Master Bathroom',
	NORMAL_MASTER_BATHROOM: 'Normal Bathroom',
	SHOWER: 'Shower',

	// Master Bedroom
	BRIGHT_MASTER_BEDROOM: 'Bright Bedroom',
	LATE_NIGHT_MASTER_BEDROOM: 'Late Night Bedroom',
	MASTER_BEDROOM: 'Master Bedroom',
	NORMAL_MASTER_BEDROOM: 'Normal Bedroom',
}

const BUTTONS = {
	FAMILY_ROOM: '80:e4:da:72:4d:eb',
	KITCHEN: '80:e4:da:72:a8:a1',
	LIVING_ROOM: '80:e4:da:72:98:19',
	MASTER_BATHROOM: '80:e4:da:72:a3:49',
	MASTER_BATHROOM_AREAS: '80:e4:da:72:a8:60',
	MASTER_BEDROOM: '80:e4:da:72:40:7c',
	TEST_1: '80:e4:da:72:9d:27',
}

const buttonConfigs = {
	[BUTTONS.TEST_1]: {
		color: 'white',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.SHOWER,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_BATHROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_ENTRYWAY,
		},
	},

	[BUTTONS.FAMILY_ROOM]: {
		color: 'black',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_FAMILY_ROOM,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.BRIGHT_FAMILY_ROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_FAMILY_ROOM,
		},
	},

	[BUTTONS.KITCHEN]: {
		color: 'white',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_KITCHEN,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.BRIGHT_KITCHEN,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_KITCHEN,
		},
	},

	[BUTTONS.LIVING_ROOM]: {
		color: 'white',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_LIVING_ROOM,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.BRIGHT_LIVING_ROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_LIVING_ROOM,
		},
	},

	[BUTTONS.MASTER_BATHROOM]: {
		color: 'teal',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_MASTER_BATHROOM,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.BRIGHT_MASTER_BATHROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_MASTER_BATHROOM,
		},
	},

	[BUTTONS.MASTER_BATHROOM_AREAS]: {
		color: 'white',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.SHOWER,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.KEVIN_VANITY,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.ASHLEE_VANITY,
		},
	},

	[BUTTONS.MASTER_BEDROOM]: {
		color: 'black',
		SingleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.NORMAL_MASTER_BEDROOM,
		},
		DoubleClick: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.BRIGHT_MASTER_BEDROOM,
		},
		Hold: {
			action: ACTIONS.TOGGLE_SCENE,
			lights: LIGHTS.LATE_NIGHT_MASTER_BEDROOM,
		},
	},
}

module.exports = buttonConfigs
