const Barang = require("../models/Barang");

class BarangController {
	static async getAll(req, res) {
		try {
			const BarangData = await Barang.findAll();
			if (BarangData) {
				res.status(200).json(BarangData);
			} else {
				res.status(400).json({ msg: "Data Kosong" });
			}
		} catch (error) {
			res.status(400).json({ msg: error });
		}
	}
	static async findOne(req, res) {
		let id = req.params.id;
		try {
			const selectedBarang = await Barang.findOne(id);
			if (selectedBarang) {
				res.status(200).json(selectedBarang);
			} else {
				res.status(400).json({ msg: "Data Kosong" });
			}
		} catch (error) {
			res.status(400).json({ msg: error });
		}
	}
	
}

module.exports = BarangController;