const Permission = require("../models/Permission");

class PermissionController {

	static async addPermissions(req, res) {
		let { UserId, BarangId, count } = req.body;
		try {
			const addPermission = await Permission.add({ UserId, BarangId, count });
			res.status(201).json(addPermission.ops[0]);
		} catch (error) {
			res.status(400).json(error);
		}
	}
	static async update(req, res) {
		let id = req.params.id;
		let { count } = req.body;
		try {
			const updatePermission = await Permission.update(id, { count });
			res.status(200).json(updatePermission.value);
		} catch (error) {
			res.status(403).json({ msg: error });
		}
	}
	static async delete(req, res) {
		let id = req.params.id;
		try {
			const deletePermission = await Permission.delete(id);
			res.status(200).json({ msg: "Delete Success" });
		} catch (error) {
			res.status(400).json({ msg: error });
		}
	}
}

module.exports = PermissionController;