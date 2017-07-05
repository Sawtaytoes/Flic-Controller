const COLOR = {
	BLACK: 'black',
	GREEN: 'green',
	TEAL: 'teal',
	WHITE: 'white',
}

const CLICK = {
	SINGLE: 'ButtonSingleClick',
	DOUBLE: 'ButtonDoubleClick',
	HOLD: 'ButtonHold',
}

const DEVICE = {
	LIFX: 'lifx',
	WEMO: 'wemo',
}

const ACTION = {
	TOGGLE_DEVICE: 'toggle-device',
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_SCENE: 'toggle-scene',
}

const CONFIG = {
	// Colissio
	COLISSIO_SPEAKERS: 'Colissio Speakers',
	MICROPHONE_PRE_AMP: 'Microphone Pre-amp',

	// Dining Room
	DINING_ROOM: 'Dining Room',
	NORMAL_DINING_ROOM: 'Normal Dining Room',
	BRIGHT_DINING_ROOM: 'Bright Dining Room',
	LATE_NIGHT_DINING_ROOM: 'Late Night Dining Room',

	// Eat-In Kitchen
	EAT_IN_KITCHEN: 'Master Eat-In Kitchen',
	NORMAL_EAT_IN_KITCHEN: 'Normal Eat-In Kitchen',
	BRIGHT_EAT_IN_KITCHEN: 'Bright Eat-In Kitchen',
	LATE_NIGHT_EAT_IN_KITCHEN: 'Late Night Eat-In Kitchen',

	// Entryway
	ENTRYWAY: 'Entryway',
	NORMAL_ENTRYWAY: 'Normal Entryway',
	BRIGHT_ENTRYWAY: 'Bright Entryway',
	LATE_NIGHT_ENTRYWAY: 'Late Night Entryway',

	// Family Room
	FAMILY_ROOM: 'Master Family Room',
	NORMAL_FAMILY_ROOM: 'Normal Family Room',
	BRIGHT_FAMILY_ROOM: 'Bright Family Room',
	LATE_NIGHT_FAMILY_ROOM: 'Late Night Family Room',

	// Hallway
	HALLWAY: 'Hallway',
	NORMAL_HALLWAY: 'Normal Hallway',
	BRIGHT_HALLWAY: 'Bright Hallway',
	LATE_NIGHT_HALLWAY: 'Late Night Hallway',

	// Kitchen
	KITCHEN: 'Master Kitchen',
	NORMAL_KITCHEN: 'Normal Kitchen',
	BRIGHT_KITCHEN: 'Bright Kitchen',
	LATE_NIGHT_KITCHEN: 'Late Night Kitchen',
	GARBAGE_DISPOSAL: 'Garbage Disposal',
	WAX_WARMER: 'Kitchen Wax Warmer',

	// Living Room
	LIVING_ROOM: 'Living Room',
	NORMAL_LIVING_ROOM: 'Normal Living Room',
	BRIGHT_LIVING_ROOM: 'Bright Living Room',
	LATE_NIGHT_LIVING_ROOM: 'Late Night Living Room',

	// Master Bathroom
	MASTER_BATHROOM: 'Master Bathroom',
	NORMAL_MASTER_BATHROOM: 'Normal Bathroom',
	BRIGHT_MASTER_BATHROOM: 'Bright Bathroom',
	LATE_NIGHT_MASTER_BATHROOM: 'Late Night Bathroom',
	ASHLEE_VANITY: 'Ashlee\'s Vanity',
	KEVIN_VANITY: 'Kevin\'s Vanity',
	SHOWER: 'Shower',

	// Master Bedroom
	MASTER_BEDROOM: 'Master Bedroom',
	NORMAL_MASTER_BEDROOM: 'Normal Bedroom',
	BRIGHT_MASTER_BEDROOM: 'Bright Bedroom',
	LATE_NIGHT_MASTER_BEDROOM: 'Late Night Bedroom',

	// Office
	OFFICE: 'Office',
	NORMAL_OFFICE: 'Normal Office',
	BRIGHT_OFFICE: 'Bright Office',
	LATE_NIGHT_OFFICE: 'Late Night Office',
}

const ACTION_SET = {
	ASHLEE_VANITY: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
	},

	COLISSIO_MICROPHONE: {
		[CLICK.DOUBLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.MICROPHONE_PRE_AMP,
		},
		[CLICK.HOLD]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.MICROPHONE_PRE_AMP,
		},
	},

	COLISSIO_SPEAKERS: {
		[CLICK.SINGLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.COLISSIO_SPEAKERS,
		},
		[CLICK.HOLD]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.COLISSIO_SPEAKERS,
		},
	},

	DINING_ROOM: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_DINING_ROOM,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_DINING_ROOM,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_DINING_ROOM,
		},
	},

	EAT_IN_KITCHEN: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_EAT_IN_KITCHEN,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_EAT_IN_KITCHEN,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_EAT_IN_KITCHEN,
		},
	},

	ENTRYWAY: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_ENTRYWAY,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_ENTRYWAY,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_ENTRYWAY,
		},
	},

	FAMILY_ROOM: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_FAMILY_ROOM,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_FAMILY_ROOM,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_FAMILY_ROOM,
		},
	},

	KITCHEN_SINK: {
		[CLICK.SINGLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.GARBAGE_DISPOSAL,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.GARBAGE_DISPOSAL,
		},
		[CLICK.HOLD]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.GARBAGE_DISPOSAL,
		},
	},

	HALLWAY: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_HALLWAY,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_HALLWAY,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_HALLWAY,
		},
	},

	KEVIN_VANITY: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
	},

	KITCHEN: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_KITCHEN,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_KITCHEN,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_KITCHEN,
		},
	},

	LIVING_ROOM: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_LIVING_ROOM,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_LIVING_ROOM,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_LIVING_ROOM,
		},
	},

	MASTER_BATHROOM: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_MASTER_BATHROOM,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_MASTER_BATHROOM,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_MASTER_BATHROOM,
		},
	},

	MASTER_BEDROOM: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_MASTER_BEDROOM,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_MASTER_BEDROOM,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_MASTER_BEDROOM,
		},
	},

	OFFICE: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.NORMAL_OFFICE,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.BRIGHT_OFFICE,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_OFFICE,
		},
	},

	SHOWER: {
		[CLICK.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.SHOWER,
		},
		[CLICK.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.SHOWER,
		},
		[CLICK.HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.SHOWER,
		},
	},
}

const combineSets = actionSets => (
	Object.values(CLICK)
	.map(clickType => ({
		clickType,
		actionSetClickValues: (
			actionSets
			.map(actionSet => actionSet[clickType])
			.filter(actionSetClickValue => actionSetClickValue)
		)
	}))
	.reduce((object, { clickType, actionSetClickValues }) => (
		Object.assign({}, object, {
			[clickType]: actionSetClickValues
		})
	), {})
)

const MULTI_ACTION_SET = {
	ALL_DOWNSTAIRS: combineSets([
		ACTION_SET.DINING_ROOM,
		ACTION_SET.EAT_IN_KITCHEN,
		ACTION_SET.ENTRYWAY,
		ACTION_SET.FAMILY_ROOM,
		ACTION_SET.KITCHEN,
		ACTION_SET.LIVING_ROOM,
		ACTION_SET.OFFICE,
	]),

	ALL_KITCHEN: combineSets([
		ACTION_SET.EAT_IN_KITCHEN,
		ACTION_SET.FAMILY_ROOM,
		ACTION_SET.KITCHEN,
	]),

	ALL_LIVING_ROOM: combineSets([
		ACTION_SET.LIVING_ROOM,
		ACTION_SET.OFFICE,
	]),

	ALL_UPSTAIRS: combineSets([
		ACTION_SET.HALLWAY,
		ACTION_SET.MASTER_BATHROOM,
		ACTION_SET.MASTER_BEDROOM,
	]),

	COLISSIO: combineSets([
		ACTION_SET.COLISSIO_MICROPHONE,
		ACTION_SET.COLISSIO_SPEAKERS,
	]),
}

const buttonConfigs = {
	'80:e4:da:72:9d:27': Object.assign({}, MULTI_ACTION_SET.ALL_KITCHEN, {
		location: "Kitchen Desk",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:60:ce': Object.assign({}, MULTI_ACTION_SET.ALL_LIVING_ROOM, {
		location: "Colissio",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:60:ce': Object.assign({}, MULTI_ACTION_SET.ALL_LIVING_ROOM, {
		location: "Living Room Coffee Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:bc': Object.assign({}, MULTI_ACTION_SET.ALL_UPSTAIRS, {
		location: "Ashlee's Bedstand",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:a8:e3': Object.assign({}, MULTI_ACTION_SET.ALL_UPSTAIRS, {
		location: "Kevin's Bedstand",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:62:9e': Object.assign({}, MULTI_ACTION_SET.COLISSIO, {
		location: "Colissio",
		color: COLOR.GREEN,
	}),

	'80:e4:da:72:3c:c9': Object.assign({}, ACTION_SET.ASHLEE_VANITY, {
		location: "Ashlee's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:bf': Object.assign({}, ACTION_SET.EAT_IN_KITCHEN, {
		location: "Eat-In Kitchen Table",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:4d:eb': Object.assign({}, ACTION_SET.FAMILY_ROOM, {
		location: "Eat-In Kitchen Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:4c:01': Object.assign({}, ACTION_SET.FAMILY_ROOM, {
		location: "Eat-In Kitchen Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:c1': Object.assign({}, ACTION_SET.KITCHEN_SINK, {
		location: "Kitchen Sink",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:35:d3': Object.assign({}, ACTION_SET.KEVIN_VANITY, {
		location: "Kevin's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:a1': Object.assign({}, ACTION_SET.KITCHEN, {
		location: "Kitchen Island",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:98:19': Object.assign({}, ACTION_SET.LIVING_ROOM, {
		location: "Living Room Coffee Table",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:ab:3d': Object.assign({}, ACTION_SET.MASTER_BATHROOM, {
		location: "Kevin's Bedstand",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:a3:49': Object.assign({}, ACTION_SET.MASTER_BATHROOM, {
		location: "Master Bathroom Bathtub",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:40:7c': Object.assign({}, ACTION_SET.MASTER_BEDROOM, {
		location: "Kevin's Bedstand",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:60': Object.assign({}, ACTION_SET.SHOWER, {
		location: "Kevin's Vanity",
		color: COLOR.WHITE,
	}),
}

module.exports = buttonConfigs
