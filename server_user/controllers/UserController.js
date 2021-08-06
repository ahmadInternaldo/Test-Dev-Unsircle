const User = require("../models/User");

class UserController {

	static async findOne(req, res) {
    //sementara pakai email dahulu
		let {email} = req.body;
		try {
			const selectedUser = await User.findOne(email);
			if (selectedUser) {
				res.status(200).json(selectedUser);
			} else {
				res.status(400).json({ msg: "Data Kosong" });
			}
		} catch (error) {
			res.status(400).json({ msg: error });
		}
	}
	static async createOne(req, res) {
		let { email, password } = req.body;
		try {
			const addUser = await User.add({ email, password });
			res.status(201).json(addUser.ops[0]);
		} catch (error) {
			res.status(400).json(error);
		}
	}
	
}

module.exports = UserController;