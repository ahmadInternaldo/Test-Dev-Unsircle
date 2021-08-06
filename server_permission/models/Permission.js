const { getPermissionsDatabase } = require("../config/mongodb");
const { ObjectId } = require("mongodb");
const collectionName = "Permissions";

class Permission {

	static add(obj) {
		return getPermissionsDatabase().collection(collectionName).insertOne(obj);
	}
	static update(id, obj) {
		return getPermissionsDatabase()
			.collection(collectionName)
			.findOneAndUpdate({ _id: ObjectId(id) }, { $set: obj }, { returnNewDocument: true });
	}
	static delete(id) {
		getPermissionsDatabase()
			.collection(collectionName)
			.deleteOne({ _id: ObjectId(id) });
	}
}

module.exports = Permission;