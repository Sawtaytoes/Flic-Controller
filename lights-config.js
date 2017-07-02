const COLOR = {
	BLACK: 'black',
	GREEN: 'green',
	TEAL: 'teal',
	WHITE: 'white',
}

const ACTION = {
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_SCENE: 'toggle-scene',
}

const CONFIG = {
	// Entryway
	NORMAL_ENTRYWAY: 'Normal Entryway',

	// Eat-In Kitchen
	BRIGHT_EAT_IN_KITCHEN: 'Bright Eat-In Kitchen',
	LATE_NIGHT_EAT_IN_KITCHEN: 'Late Night Eat-In Kitchen',
	EAT_IN_KITCHEN: 'Master Eat-In Kitchen',
	NORMAL_EAT_IN_KITCHEN: 'Normal Eat-In Kitchen',

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

const ACTION_SETS = {
	EAT_IN_KITCHEN: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_EAT_IN_KITCHEN,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_EAT_IN_KITCHEN,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_EAT_IN_KITCHEN,
		},
	},

	FAMILY_ROOM: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_FAMILY_ROOM,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_FAMILY_ROOM,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_FAMILY_ROOM,
		},
	},

	KEVIN_VANITY: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.SHOWER,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
	},

	KITCHEN: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_KITCHEN,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_KITCHEN,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_KITCHEN,
		},
	},

	LIVING_ROOM: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_LIVING_ROOM,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_LIVING_ROOM,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_LIVING_ROOM,
		},
	},

	MASTER_BATHROOM: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_MASTER_BATHROOM,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_MASTER_BATHROOM,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_MASTER_BATHROOM,
		},
	},

	MASTER_BEDROOM: {
		SingleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_MASTER_BEDROOM,
		},
		DoubleClick: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_MASTER_BEDROOM,
		},
		Hold: {
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_MASTER_BEDROOM,
		},
	},
}

const buttonConfigs = {
	'80:e4:da:72:35:d3': Object.assign({}, ACTION_SETS.ASHLEE_VANITY, {
		location: "Ashlee's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:60:ce': Object.assign({}, ACTION_SETS.EAT_IN_KITCHEN, {
		location: "Eat-In Kitchen Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:4d:eb': Object.assign({}, ACTION_SETS.FAMILY_ROOM, {
		location: "Eat-In Kitchen Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:3c:c9': Object.assign({}, ACTION_SETS.KEVIN_VANITY, {
		location: "Kevin's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:a1': Object.assign({}, ACTION_SETS.KITCHEN, {
		location: "Kitchen Island",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:9d:27': Object.assign({}, ACTION_SETS.KITCHEN, {
		location: "Kitchen Desk",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:98:19': Object.assign({}, ACTION_SETS.LIVING_ROOM, {
		location: "Living Room Coffee Table",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:ab:3d': Object.assign({}, ACTION_SETS.MASTER_BATHROOM, {
		location: "Kevin's Bedstand",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:a3:49': Object.assign({}, ACTION_SETS.MASTER_BATHROOM, {
		location: "Master Bathroom Bathtub",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:40:7c': Object.assign({}, ACTION_SETS.MASTER_BEDROOM, {
		location: "Kevin's Bedstand",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:60': Object.assign({}, ACTION_SETS.SHOWER, {
		location: "Kevin's Vanity",
		color: COLOR.WHITE,
	}),
}

module.exports = buttonConfigs
