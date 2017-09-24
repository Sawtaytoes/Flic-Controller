const COLOR = {
	BLACK: 'black',
	GREEN: 'green',
	TEAL: 'teal',
	WHITE: 'white',
}

const PRESS = {
	SINGLE: '1press',
	DOUBLE: '2press',
	SINGLE_HOLD: '1pressHold',
	DOUBLE_HOLD: '2pressHold',
}

const DEVICE = {
	LIFX: 'lifx',
	WEMO: 'wemo',
}

const ACTION = {
	SET_LIGHT_BRIGHTNESS: 'set-light-brightness',
	TOGGLE_DEVICE: 'toggle-device',
	TOGGLE_GROUP: 'toggle-group',
	TOGGLE_LIGHT: 'toggle-light',
	TOGGLE_SCENE: 'toggle-scene',
	TURN_OFF_DEVICE: 'turn-off-device',
	TURN_OFF_GROUP: 'turn-off-group',
}

const CONFIG = {
	// Basement
	BASEMENT: 'Basement',
	NORMAL_BASEMENT: 'Normal Basement',
	BRIGHT_BASEMENT: 'Bright Basement',
	LATE_NIGHT_BASEMENT: 'Late Night Basement',

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

	// Spare Bedroom
	SPARE_BEDROOM: 'Spare Bedroom',
	NORMAL_SPARE_BEDROOM: 'Normal Spare Bedroom',
	BRIGHT_SPARE_BEDROOM: 'Bright Spare Bedroom',
	LATE_NIGHT_SPARE_BEDROOM: 'Late Night Spare Bedroom',

	// Family Room
	FAMILY_ROOM: 'Master Family Room',
	NORMAL_FAMILY_ROOM: 'Normal Family Room',
	BRIGHT_FAMILY_ROOM: 'Bright Family Room',
	LATE_NIGHT_FAMILY_ROOM: 'Late Night Family Room',
	THEATER: 'Theater',

	// Guest Bathroom
	GUEST_BATHROOM: 'Guest Bathroom',
	NORMAL_GUEST_BATHROOM: 'Normal Guest Bathroom',
	BRIGHT_GUEST_BATHROOM: 'Bright Guest Bathroom',
	LATE_NIGHT_GUEST_BATHROOM: 'Late Night Guest Bathroom',

	// Guest Bedroom
	GUEST_BEDROOM: 'Guest Bedroom',
	NORMAL_GUEST_BEDROOM: 'Normal Guest Bedroom',
	BRIGHT_GUEST_BEDROOM: 'Bright Guest Bedroom',
	LATE_NIGHT_GUEST_BEDROOM: 'Late Night Guest Bedroom',

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
	WASHING_DISHES: 'Washing Dishes',
	WAX_WARMER: 'Kitchen Wax Warmer',

	// Living Room
	LIVING_ROOM: 'Living Room',
	NORMAL_LIVING_ROOM: 'Normal Living Room',
	BRIGHT_LIVING_ROOM: 'Bright Living Room',
	LATE_NIGHT_LIVING_ROOM: 'Late Night Living Room',

	// Master Bathroom
	MASTER_BATHROOM: 'Master Bathroom',
	NORMAL_MASTER_BATHROOM: 'Normal Master Bathroom',
	BRIGHT_MASTER_BATHROOM: 'Bright Master Bathroom',
	LATE_NIGHT_MASTER_BATHROOM: 'Late Night Master Bathroom',
	ASHLEE_VANITY: 'Ashlee\'s Vanity',
	KEVIN_VANITY: 'Kevin\'s Vanity',
	MASTER_BATHROOM_SHOWER: 'Shower',

	// Master Bathroom Toilet
	MASTER_BATHROOM_TOILET: 'Master Bathroom Toilet',
	NORMAL_MASTER_BATHROOM_TOILET: 'Normal Master Bathroom Toilet',
	BRIGHT_MASTER_BATHROOM_TOILET: 'Bright Master Bathroom Toilet',
	LATE_NIGHT_MASTER_BATHROOM_TOILET: 'Late Night Master Bathroom Toilet',

	// Master Bedroom
	MASTER_BEDROOM: 'Master Bedroom',
	NORMAL_MASTER_BEDROOM: 'Normal Master Bedroom',
	BRIGHT_MASTER_BEDROOM: 'Bright Master Bedroom',
	LATE_NIGHT_MASTER_BEDROOM: 'Late Night Master Bedroom',

	// Master Bedroom Closet
	MASTER_BEDROOM_CLOSET: 'Master Bedroom Closet',
	NORMAL_MASTER_BEDROOM_CLOSET: 'Normal Master Bedroom Closet',
	BRIGHT_MASTER_BEDROOM_CLOSET: 'Bright Master Bedroom Closet',
	LATE_NIGHT_MASTER_BEDROOM_CLOSET: 'Late Night Master Bedroom Closet',

	// Office
	OFFICE: 'Office',
	NORMAL_OFFICE: 'Normal Office',
	BRIGHT_OFFICE: 'Bright Office',
	LATE_NIGHT_OFFICE: 'Late Night Office',
	LATE_NIGHT_COMPUTING: 'Late Night Computing',
	COLISSIO_SPEAKERS: 'Colissio Speakers',
	MICROPHONE_PRE_AMP: 'Microphone Pre-amp',
}

const getStandardLightingActionSet = roomName => ({
	[PRESS.SINGLE]: {
		device: DEVICE.LIFX,
		action: ACTION.TOGGLE_SCENE,
		config: CONFIG[`NORMAL_${roomName}`],
	},
	[PRESS.DOUBLE]: {
		device: DEVICE.LIFX,
		action: ACTION.TOGGLE_SCENE,
		config: CONFIG[`BRIGHT_${roomName}`],
	},
	[PRESS.SINGLE_HOLD]: {
		device: DEVICE.LIFX,
		action: ACTION.TOGGLE_SCENE,
		config: CONFIG[`LATE_NIGHT_${roomName}`],
	},
	[PRESS.DOUBLE_HOLD]: {
		device: DEVICE.LIFX,
		action: ACTION.TURN_OFF_GROUP,
		config: CONFIG[roomName],
	},
})

const ACTION_SET = {
	ASHLEE_VANITY: {
		[PRESS.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.ASHLEE_VANITY,
		},
	},

	BASEMENT: getStandardLightingActionSet('BASEMENT'),

	COLISSIO: {
		[PRESS.SINGLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.COLISSIO_SPEAKERS,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.MICROPHONE_PRE_AMP,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.LATE_NIGHT_COMPUTING,
		},
		[PRESS.DOUBLE_HOLD]: [{
			device: DEVICE.LIFX,
			action: ACTION.TURN_OFF_GROUP,
			config: CONFIG.LIVING_ROOM,
		}, {
			device: DEVICE.LIFX,
			action: ACTION.TURN_OFF_GROUP,
			config: CONFIG.OFFICE,
		}],
	},

	DINING_ROOM: getStandardLightingActionSet('DINING_ROOM'),
	EAT_IN_KITCHEN: getStandardLightingActionSet('EAT_IN_KITCHEN'),
	ENTRYWAY: getStandardLightingActionSet('ENTRYWAY'),
	SPARE_BEDROOM: getStandardLightingActionSet('SPARE_BEDROOM'),
	FAMILY_ROOM: getStandardLightingActionSet('FAMILY_ROOM'),
	GUEST_BATHROOM: getStandardLightingActionSet('GUEST_BATHROOM'),
	GUEST_BEDROOM: getStandardLightingActionSet('GUEST_BEDROOM'),

	KITCHEN_SINK: {
		[PRESS.SINGLE]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.GARBAGE_DISPOSAL,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.WASHING_DISHES,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.WEMO,
			action: ACTION.TOGGLE_DEVICE,
			config: CONFIG.GARBAGE_DISPOSAL,
		},
	},

	HALLWAY: getStandardLightingActionSet('HALLWAY'),

	KEVIN_VANITY: {
		[PRESS.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.KEVIN_VANITY,
		},
	},

	KITCHEN: getStandardLightingActionSet('KITCHEN'),
	LIVING_ROOM: getStandardLightingActionSet('LIVING_ROOM'),
	MASTER_BATHROOM: getStandardLightingActionSet('MASTER_BATHROOM'),

	MASTER_BATHROOM_SHOWER: {
		[PRESS.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.MASTER_BATHROOM_SHOWER,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.MASTER_BATHROOM_SHOWER,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.MASTER_BATHROOM_SHOWER,
		},
	},

	MASTER_BATHROOM_TOILET: getStandardLightingActionSet('MASTER_BATHROOM_TOILET'),
	MASTER_BEDROOM: getStandardLightingActionSet('MASTER_BEDROOM'),
	MASTER_BEDROOM_CLOSET: getStandardLightingActionSet('MASTER_BEDROOM_CLOSET'),
	OFFICE: getStandardLightingActionSet('OFFICE'),

	THEATER: {
		[PRESS.SINGLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.THEATER,
		},
		[PRESS.DOUBLE]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.THEATER,
		},
		[PRESS.SINGLE_HOLD]: {
			device: DEVICE.LIFX,
			action: ACTION.TOGGLE_SCENE,
			config: CONFIG.THEATER,
		},
	},
}

const combineSets = actionSets => (
	Object.values(PRESS)
	.map(pressType => ({
		pressType,
		actionSetPressValues: (
			actionSets
			.map(actionSet => actionSet[pressType])
			.filter(actionSetPressValue => actionSetPressValue)
		)
	}))
	.reduce(
		(object, { pressType, actionSetPressValues }) => (
			Object.assign({}, object, {
				[pressType]: actionSetPressValues
			})
		),
		{}
	)
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

	ALL_STAIRWAY: combineSets([
		ACTION_SET.ENTRYWAY,
		ACTION_SET.HALLWAY,
	]),

	ALL_UPSTAIRS: combineSets([
		ACTION_SET.SPARE_BEDROOM,
		ACTION_SET.GUEST_BATHROOM,
		ACTION_SET.GUEST_BEDROOM,
		ACTION_SET.HALLWAY,
		ACTION_SET.MASTER_BATHROOM,
		ACTION_SET.MASTER_BEDROOM,
		ACTION_SET.MASTER_BEDROOM_CLOSET,
	]),
}

const buttonConfigs = {
	'80:e4:da:72:4c:20': Object.assign({}, MULTI_ACTION_SET.ALL_KITCHEN, {
		location: "Kitchen Desk",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:62': Object.assign({}, MULTI_ACTION_SET.ALL_KITCHEN, {
		location: "Kevin's Desk",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:60:ce': Object.assign({}, MULTI_ACTION_SET.ALL_LIVING_ROOM, {
		location: "Kevin's Desk",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:60:e2': Object.assign({}, MULTI_ACTION_SET.ALL_LIVING_ROOM, {
		location: "Living Room Coffee Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:3d:6b': Object.assign({}, MULTI_ACTION_SET.ALL_LIVING_ROOM, {
		location: "Office Entryway",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:3a:24': Object.assign({}, MULTI_ACTION_SET.ALL_STAIRWAY, {
		location: "Bedrooms Hallway",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:4d:9e': Object.assign({}, MULTI_ACTION_SET.ALL_STAIRWAY, {
		location: "Dining Room Entryway",
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

	'80:e4:da:72:3c:c9': Object.assign({}, ACTION_SET.ASHLEE_VANITY, {
		location: "Ashlee's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:5a:41': Object.assign({}, ACTION_SET.BASEMENT, {
		location: "Basement Door",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:62:9e': Object.assign({}, ACTION_SET.COLISSIO, {
		location: "Kevin's Desk",
		color: COLOR.GREEN,
	}),

	'80:e4:da:72:aa:5b': Object.assign({}, ACTION_SET.DINING_ROOM, {
		location: "Dining Room Entryway",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:a8:9e': Object.assign({}, ACTION_SET.DINING_ROOM, {
		location: "Dining Room Kitchen Doorway",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:a8:bf': Object.assign({}, ACTION_SET.EAT_IN_KITCHEN, {
		location: "Eat-In Kitchen Table",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:5f:2b': Object.assign({}, ACTION_SET.SPARE_BEDROOM, {
		location: "Spare Bedroom Wall",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:4c:01': Object.assign({}, ACTION_SET.FAMILY_ROOM, {
		location: "Eat-In Kitchen Table",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:63:3c': Object.assign({}, ACTION_SET.GUEST_BATHROOM, {
		location: "Guest Bathroom Toilet Wall",
		color: COLOR.GREEN,
	}),

	'80:e4:da:72:62:29': Object.assign({}, ACTION_SET.GUEST_BATHROOM, {
		location: "Guest Bedroom Tub Wall",
		color: COLOR.GREEN,
	}),

	'80:e4:da:72:45:77': Object.assign({}, ACTION_SET.GUEST_BEDROOM, {
		location: "Guest Bedroom Wall",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:35:d3': Object.assign({}, ACTION_SET.KEVIN_VANITY, {
		location: "Kevin's Vanity",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:a1': Object.assign({}, ACTION_SET.KITCHEN, {
		location: "Kitchen Island",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:9d:27': Object.assign({}, ACTION_SET.KITCHEN, {
		location: "Kitchen Desk",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:a8:c1': Object.assign({}, ACTION_SET.KITCHEN_SINK, {
		location: "Kitchen Sink",
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

	'80:e4:da:72:4d:eb': Object.assign({}, ACTION_SET.MASTER_BEDROOM, {
		location: "Ashlee's Bedstand",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:40:7c': Object.assign({}, ACTION_SET.MASTER_BEDROOM, {
		location: "Kevin's Bedstand",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a5:96': Object.assign({}, ACTION_SET.MASTER_BEDROOM_CLOSET, {
		location: "Master Bedroom Closet Doorway",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:a8:60': Object.assign({}, ACTION_SET.MASTER_BATHROOM_SHOWER, {
		location: "Master Bedroom Shower Entryway",
		color: COLOR.WHITE,
	}),

	'80:e4:da:72:af:40': Object.assign({}, ACTION_SET.MASTER_BATHROOM_TOILET, {
		location: "Master Bathroom Toilet Area",
		color: COLOR.TEAL,
	}),

	'80:e4:da:72:63:f5': Object.assign({}, ACTION_SET.THEATER, {
		location: "TV Area",
		color: COLOR.GREEN,
	}),
}

module.exports = buttonConfigs
