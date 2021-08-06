const { getBarangsDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");
const collectionName = "Barangs";

class Barang {
	static findAll() {
		return getBarangsDatabase().collection(collectionName).find().toArray();
	}
	static findOne(id) {
		return getBarangsDatabase()
			.collection(collectionName)
			.findOne({ _id: ObjectId(id) });
	}
}

module.exports = Barang;
