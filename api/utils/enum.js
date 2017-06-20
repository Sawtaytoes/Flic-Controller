const enumStorage = new Map()
const Enum = (name, ObjectType) => {
	const id = new String(name)
	id.default = () => new ObjectType()

	if (enumStorage.has(id)) {
		return enumStorage.get(id)
	}

	enumStorage.set(name, id)
	return id
}

module.exports = Enum
