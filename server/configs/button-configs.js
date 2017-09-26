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
	'80:e4:da:72:4c:20': Object.assign({}, MULTI_ACTION_SET.ALL_KITCHEN, {
		location: "Kitchen Desk",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:a8:62': Object.assign({}, MULTI_ACTION_SET.ALL_KITCHEN, {
		location: "Storage",
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

	'80:e4:da:72:5f:2b': Object.assign({}, ACTION_SET.SPARE_BEDROOM, {
		location: "Spare Bedroom Wall",
		color: COLOR.BLACK,
	}),

	'80:e4:da:72:63:f5': Object.assign({}, ACTION_SET.THEATER, {
		location: "TV Area",
		color: COLOR.GREEN,
	}),
}

module.exports = buttonConfigs
