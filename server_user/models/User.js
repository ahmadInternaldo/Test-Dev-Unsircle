const { getUsersDatabase } = require("../config/mongodb");
const collectionName = "Users";

class User {
	static add(obj) {
		return getUsersDatabase().collection(collectionName).insertOne(obj);
	}
	static findOne(email) {
		return getUsersDatabase()
			.collection(collectionName)
			.findOne({ email });
	}
}

module.exports = User;