const PRESS = {
	SINGLE: '1press',
	DOUBLE: '2press',
	TRIPLE: '3press',
	SINGLE_HOLD: '1pressHold',
	DOUBLE_HOLD: '2pressHold',
	TRIPLE_HOLD: '3pressHold',
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

const NAME = {
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
	EAT_IN_KITCHEN: 'Eat-In Kitchen',
	NORMAL_EAT_IN_KITCHEN: 'Normal Eat-In Kitchen',
	BRIGHT_EAT_IN_KITCHEN: 'Bright Eat-In Kitchen',
	LATE_NIGHT_EAT_IN_KITCHEN: 'Late Night Eat-In Kitchen',

	// Entryway
	ENTRYWAY: 'Entryway',
	NORMAL_ENTRYWAY: 'Normal Entryway',
	BRIGHT_ENTRYWAY: 'Bright Entryway',
	LATE_NIGHT_ENTRYWAY: 'Late Night Entryway',

	// Family Room
	FAMILY_ROOM: 'Family Room',
	NORMAL_FAMILY_ROOM: 'Normal Family Room',
	BRIGHT_FAMILY_ROOM: 'Bright Family Room',
	LATE_NIGHT_FAMILY_ROOM: 'Late Night Family Room',
	THEATER: 'Theater',

	// Garage
	GARAGE: 'Garage',

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

	// Guest Vanity
	GUEST_VANITY: 'Guest Vanity',
	NORMAL_GUEST_VANITY: 'Normal Guest Vanity',
	BRIGHT_GUEST_VANITY: 'Bright Guest Vanity',
	LATE_NIGHT_GUEST_VANITY: 'Late Night Guest Vanity',

	// Hallway
	HALLWAY: 'Hallway',
	NORMAL_HALLWAY: 'Normal Hallway',
	BRIGHT_HALLWAY: 'Bright Hallway',
	LATE_NIGHT_HALLWAY: 'Late Night Hallway',

	// Kitchen
	KITCHEN: 'Kitchen',
	NORMAL_KITCHEN: 'Normal Kitchen',
	BRIGHT_KITCHEN: 'Bright Kitchen',
	LATE_NIGHT_KITCHEN: 'Late Night Kitchen',
	GARBAGE_DISPOSAL: 'Garbage Disposal',
	WASHING_DISHES: 'Washing Dishes',
	WAX_WARMER: 'Kitchen Wax Warmer',

	// Kitchen Bathroom
	KITCHEN_BATHROOM: 'Kitchen Bathroom',
	NORMAL_KITCHEN_BATHROOM: 'Normal Kitchen Bathroom',
	BRIGHT_KITCHEN_BATHROOM: 'Bright Kitchen Bathroom',
	LATE_NIGHT_KITCHEN_BATHROOM: 'Late Night Kitchen Bathroom',

	// Living Room
	LIVING_ROOM: 'Living Room',
	NORMAL_LIVING_ROOM: 'Normal Living Room',
	BRIGHT_LIVING_ROOM: 'Bright Living Room',
	LATE_NIGHT_LIVING_ROOM: 'Late Night Living Room',

	// Master Bathroom
	ASHLEE_VANITY: 'Ashlee\'s Vanity',
	BRIGHT_MASTER_BATHROOM: 'Bright Master Bathroom',
	KEVIN_VANITY: 'Kevin\'s Vanity',
	LATE_NIGHT_MASTER_BATHROOM: 'Late Night Master Bathroom',
	MASTER_BATHROOM: 'Master Bathroom',
	NORMAL_MASTER_BATHROOM: 'Normal Master Bathroom',
	SHOWER: 'Shower',

	// Master Toilet
	MASTER_TOILET: 'Master Toilet',
	NORMAL_MASTER_TOILET: 'Normal Master Toilet',
	BRIGHT_MASTER_TOILET: 'Bright Master Toilet',
	LATE_NIGHT_MASTER_TOILET: 'Late Night Master Toilet',

	// Master Bedroom
	MASTER_BEDROOM: 'Master Bedroom',
	NORMAL_MASTER_BEDROOM: 'Normal Master Bedroom',
	BRIGHT_MASTER_BEDROOM: 'Bright Master Bedroom',
	LATE_NIGHT_MASTER_BEDROOM: 'Late Night Master Bedroom',

	// Master Closet
	MASTER_CLOSET: 'Master Closet',
	NORMAL_MASTER_CLOSET: 'Normal Master Closet',
	BRIGHT_MASTER_CLOSET: 'Bright Master Closet',
	LATE_NIGHT_MASTER_CLOSET: 'Late Night Master Closet',

	// Office
	OFFICE: 'Office',
	NORMAL_OFFICE: 'Normal Office',
	BRIGHT_OFFICE: 'Bright Office',
	LATE_NIGHT_OFFICE: 'Late Night Office',
	LATE_NIGHT_COMPUTING: 'Late Night Computing',
	COLISSIO_SPEAKERS: 'Colissio Speakers',
	MICROPHONE_PRE_AMP: 'Microphone Pre-amp',

	// Spare Bedroom
	SPARE_BEDROOM: 'Spare Bedroom',
	NORMAL_SPARE_BEDROOM: 'Normal Spare Bedroom',
	BRIGHT_SPARE_BEDROOM: 'Bright Spare Bedroom',
	LATE_NIGHT_SPARE_BEDROOM: 'Late Night Spare Bedroom',

	// Spare Vanity
	SPARE_VANITY: 'Spare Vanity',
	NORMAL_SPARE_VANITY: 'Normal Spare Vanity',
	BRIGHT_SPARE_VANITY: 'Bright Spare Vanity',
	LATE_NIGHT_SPARE_VANITY: 'Late Night Spare Vanity',
}

const getStandardLightingActionSet = roomName => ({
	[PRESS.SINGLE]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[`NORMAL_${roomName}`],
	},
	[PRESS.DOUBLE]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[`BRIGHT_${roomName}`],
	},
	[PRESS.SINGLE_HOLD]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[`LATE_NIGHT_${roomName}`],
	},
	[PRESS.DOUBLE_HOLD]: {
		action: ACTION.TURN_OFF_GROUP,
		device: DEVICE.LIFX,
		name: NAME[roomName],
	},
})

const getRepeatedLightingActionSet = (sceneName, roomName) => ({
	[PRESS.SINGLE]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[sceneName],
	},
	[PRESS.DOUBLE]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[sceneName],
	},
	[PRESS.SINGLE_HOLD]: {
		action: ACTION.TOGGLE_SCENE,
		device: DEVICE.LIFX,
		name: NAME[sceneName],
	},
	[PRESS.DOUBLE_HOLD]: {
		action: ACTION.TURN_OFF_GROUP,
		device: DEVICE.LIFX,
		name: NAME[roomName],
	},
})

const ACTION_SET = {
	ASHLEE_VANITY: (
		getRepeatedLightingActionSet(
			NAME.ASHLEE_VANITY,
			NAME.MASTER_BATHROOM
		)
	),

	BASEMENT: getStandardLightingActionSet('BASEMENT'),

	COLISSIO: {
		[PRESS.SINGLE]: {
			action: ACTION.TOGGLE_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.COLISSIO_SPEAKERS,
		},
		[PRESS.DOUBLE]: {
			action: ACTION.TOGGLE_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.MICROPHONE_PRE_AMP,
		},
		[PRESS.SINGLE_HOLD]: {
			action: ACTION.TOGGLE_SCENE,
			device: DEVICE.LIFX,
			name: NAME.LATE_NIGHT_COMPUTING,
		},
		[PRESS.DOUBLE_HOLD]: [{
			action: ACTION.TURN_OFF_GROUP,
			device: DEVICE.LIFX,
			name: NAME.LIVING_ROOM,
		}, {
			action: ACTION.TURN_OFF_GROUP,
			device: DEVICE.LIFX,
			name: NAME.OFFICE,
		}, {
			action: ACTION.TURN_OFF_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.COLISSIO_SPEAKERS,
		}, {
			action: ACTION.TURN_OFF_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.MICROPHONE_PRE_AMP,
		}],
	},

	DINING_ROOM: getStandardLightingActionSet('DINING_ROOM'),
	EAT_IN_KITCHEN: getStandardLightingActionSet('EAT_IN_KITCHEN'),
	ENTRYWAY: getStandardLightingActionSet('ENTRYWAY'),
	FAMILY_ROOM: getStandardLightingActionSet('FAMILY_ROOM'),

	GARAGE: {
		[PRESS.TRIPLE]: {
			action: ACTION.TOGGLE_GROUP,
			device: DEVICE.LIFX,
			name: NAME.GARAGE,
		},
	},

	GUEST_BATHROOM: getStandardLightingActionSet('GUEST_BATHROOM'),
	GUEST_BEDROOM: getStandardLightingActionSet('GUEST_BEDROOM'),
	GUEST_VANITY: getStandardLightingActionSet('GUEST_VANITY'),

	KITCHEN_SINK: {
		[PRESS.SINGLE]: {
			action: ACTION.TOGGLE_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.GARBAGE_DISPOSAL,
		},
		[PRESS.DOUBLE]: {
			action: ACTION.TOGGLE_SCENE,
			device: DEVICE.LIFX,
			name: NAME.WASHING_DISHES,
		},
		[PRESS.SINGLE_HOLD]: {
			action: ACTION.TOGGLE_DEVICE,
			device: DEVICE.WEMO,
			name: NAME.GARBAGE_DISPOSAL,
		},
	},

	HALLWAY: getStandardLightingActionSet('HALLWAY'),

	KEVIN_VANITY: (
		getRepeatedLightingActionSet(
			NAME.KEVIN_VANITY,
			NAME.MASTER_BATHROOM
		)
	),

	KITCHEN: getStandardLightingActionSet('KITCHEN'),
	LIVING_ROOM: getStandardLightingActionSet('LIVING_ROOM'),
	MASTER_BATHROOM: getStandardLightingActionSet('MASTER_BATHROOM'),
	MASTER_BEDROOM: getStandardLightingActionSet('MASTER_BEDROOM'),
	MASTER_CLOSET: getStandardLightingActionSet('MASTER_CLOSET'),

	MASTER_SHOWER: (
		getRepeatedLightingActionSet(
			NAME.SHOWER,
			NAME.MASTER_BATHROOM
		)
	),

	MASTER_TOILET: getStandardLightingActionSet('MASTER_TOILET'),
	OFFICE: getStandardLightingActionSet('OFFICE'),
	SPARE_BEDROOM: getStandardLightingActionSet('SPARE_BEDROOM'),
	SPARE_VANITY: getStandardLightingActionSet('SPARE_VANITY'),

	THEATER: (
		getRepeatedLightingActionSet(
			NAME.THEATER,
			NAME.FAMILY_ROOM
		)
	),
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
	ALL_DOWNSTAIRS: (
		combineSets([
			ACTION_SET.DINING_ROOM,
			ACTION_SET.EAT_IN_KITCHEN,
			ACTION_SET.ENTRYWAY,
			ACTION_SET.FAMILY_ROOM,
			ACTION_SET.KITCHEN,
			ACTION_SET.KITCHEN_BATHROOM,
			ACTION_SET.LIVING_ROOM,
			ACTION_SET.OFFICE,
		])
	),

	ALL_KITCHEN: (
		combineSets([
			ACTION_SET.EAT_IN_KITCHEN,
			ACTION_SET.FAMILY_ROOM,
			ACTION_SET.KITCHEN,
		])
	),

	ALL_LIVING_ROOM: (
		combineSets([
			ACTION_SET.LIVING_ROOM,
			ACTION_SET.OFFICE,
		])
	),

	ALL_STAIRWAY: (
		combineSets([
			ACTION_SET.ENTRYWAY,
			ACTION_SET.HALLWAY,
		])
	),

	ALL_UPSTAIRS: (
		combineSets([
			ACTION_SET.GUEST_BATHROOM,
			ACTION_SET.GUEST_BEDROOM,
			ACTION_SET.GUEST_VANITY,
			ACTION_SET.HALLWAY,
			ACTION_SET.MASTER_BATHROOM,
			ACTION_SET.MASTER_BEDROOM,
			ACTION_SET.MASTER_CLOSET,
			ACTION_SET.SPARE_BEDROOM,
			ACTION_SET.SPARE_VANITY,
		])
	),
}

module.exports = {
	ACTION_SET,
	MULTI_ACTION_SET,
}
