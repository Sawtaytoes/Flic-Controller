const dir = require(`${global.baseDir}global-dirs`)

const {
	ACTION_SET,
	MULTI_ACTION_SET,
} = require(`${dir.configs}action-sets`)

const COLOR = {
	BLACK: 'black',
	GREEN: 'green',
	TEAL: 'teal',
	WHITE: 'white',
}

const buttonConfigs = {
	'80:e4:da:72:4c:20': {
		...MULTI_ACTION_SET.ALL_KITCHEN,
		color: COLOR.BLACK,
		location: "Kitchen Desk",
	},

	'80:e4:da:72:a8:62': {
		...MULTI_ACTION_SET.ALL_KITCHEN,
		color: COLOR.WHITE,
		location: "Storage",
	},

	'80:e4:da:72:60:ce': {
		...MULTI_ACTION_SET.ALL_LIVING_ROOM,
		color: COLOR.BLACK,
		location: "Kevin's Desk",
	},

	'80:e4:da:72:60:e2': {
		...MULTI_ACTION_SET.ALL_LIVING_ROOM,
		color: COLOR.BLACK,
		location: "Living Room Coffee Table",
	},

	'80:e4:da:72:3d:6b': {
		...MULTI_ACTION_SET.ALL_LIVING_ROOM,
		color: COLOR.BLACK,
		location: "Office Entryway",
	},

	'80:e4:da:72:3a:24': {
		...MULTI_ACTION_SET.ALL_STAIRWAY,
		color: COLOR.BLACK,
		location: "Bedrooms Hallway",
	},

	'80:e4:da:72:4d:9e': {
		...MULTI_ACTION_SET.ALL_STAIRWAY,
		color: COLOR.BLACK,
		location: "Dining Room Entryway",
	},

	'80:e4:da:72:a8:bc': {
		...MULTI_ACTION_SET.ALL_UPSTAIRS,
		color: COLOR.WHITE,
		location: "Storage",
	},

	'80:e4:da:72:a8:e3': {
		...MULTI_ACTION_SET.ALL_UPSTAIRS,
		color: COLOR.WHITE,
		location: "Storage",
	},

	'80:e4:da:72:3c:c9': {
		...ACTION_SET.ASHLEE_VANITY,
		color: COLOR.BLACK,
		location: "Ashlee's Vanity",
	},

	'80:e4:da:72:5a:41': {
		...ACTION_SET.BASEMENT,
		color: COLOR.BLACK,
		location: "Basement Door",
	},

	'80:e4:da:72:62:9e': {
		...ACTION_SET.COLISSIO,
		color: COLOR.GREEN,
		location: "Kevin's Desk",
	},

	'80:e4:da:72:aa:5b': {
		...ACTION_SET.DINING_ROOM,
		color: COLOR.WHITE,
		location: "Dining Room Entryway",
	},

	'80:e4:da:72:a8:9e': {
		...ACTION_SET.DINING_ROOM,
		color: COLOR.WHITE,
		location: "Dining Room Kitchen Doorway",
	},

	'80:e4:da:72:a8:bf': {
		...ACTION_SET.EAT_IN_KITCHEN,
		color: COLOR.WHITE,
		location: "Eat-In Kitchen Table",
	},

	'80:e4:da:72:4c:01': {
		...ACTION_SET.FAMILY_ROOM,
		color: COLOR.BLACK,
		location: "Eat-In Kitchen Table",
	},

	'80:e4:da:72:63:3c': {
		...ACTION_SET.GUEST_BATHROOM,
		color: COLOR.GREEN,
		location: "Guest Bathroom Toilet Wall",
	},

	'80:e4:da:72:62:29': {
		...ACTION_SET.GUEST_BATHROOM,
		color: COLOR.GREEN,
		location: "Guest Bedroom Tub Wall",
	},

	'80:e4:da:72:45:77': {
		...ACTION_SET.GUEST_BEDROOM,
		color: COLOR.BLACK,
		location: "Guest Bedroom Wall",
	},

	'80:e4:da:72:35:d3': {
		...ACTION_SET.KEVIN_VANITY,
		color: COLOR.BLACK,
		location: "Kevin's Vanity",
	},

	'80:e4:da:72:a8:a1': {
		...ACTION_SET.KITCHEN,
		color: COLOR.WHITE,
		location: "Kitchen Island",
	},

	'80:e4:da:72:9d:27': {
		...ACTION_SET.KITCHEN,
		color: COLOR.WHITE,
		location: "Kitchen Desk",
	},

	'80:e4:da:72:a8:c1': {
		...ACTION_SET.KITCHEN_SINK,
		color: COLOR.WHITE,
		location: "Kitchen Sink",
	},

	'80:e4:da:72:98:19': {
		...ACTION_SET.LIVING_ROOM,
		color: COLOR.WHITE,
		location: "Living Room Coffee Table",
	},

	'80:e4:da:72:ab:3d': {
		...ACTION_SET.MASTER_BATHROOM,
		color: COLOR.TEAL,
		location: "Storage",
	},

	'80:e4:da:72:a3:49': {
		...ACTION_SET.MASTER_BATHROOM,
		color: COLOR.TEAL,
		location: "Master Bathroom Bathtub",
	},

	'80:e4:da:72:4d:eb': {
		...ACTION_SET.MASTER_BEDROOM,
		color: COLOR.BLACK,
		location: "Ashlee's Bedstand",
	},

	'80:e4:da:72:40:7c': {
		...ACTION_SET.MASTER_BEDROOM,
		color: COLOR.BLACK,
		location: "Kevin's Bedstand",
	},

	'80:e4:da:72:a5:96': {
		...ACTION_SET.MASTER_BEDROOM_CLOSET,
		color: COLOR.TEAL,
		location: "Master Bedroom Closet Doorway",
	},

	'80:e4:da:72:a8:60': {
		...ACTION_SET.MASTER_BATHROOM_SHOWER,
		color: COLOR.WHITE,
		location: "Master Bedroom Shower Entryway",
	},

	'80:e4:da:72:af:40': {
		...ACTION_SET.MASTER_BATHROOM_TOILET,
		color: COLOR.TEAL,
		location: "Master Bathroom Toilet Area",
	},

	'80:e4:da:72:5f:2b': {
		...ACTION_SET.SPARE_BEDROOM,
		color: COLOR.BLACK,
		location: "Spare Bedroom Wall",
	},

	'80:e4:da:72:63:f5': {
		...ACTION_SET.THEATER,
		color: COLOR.GREEN,
		location: "TV Area",
	},
}

module.exports = buttonConfigs
