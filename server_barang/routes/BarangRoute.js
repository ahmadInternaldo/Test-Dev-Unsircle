const router = require("express").Router();
const BarangController = require("../controllers/BarangController");

router.get("/", BarangController.getAll);
router.get("/:id", BarangController.findOne);


module.exports = router;