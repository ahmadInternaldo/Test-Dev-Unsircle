const router = require("express").Router();
const PermissionController = require("../controllers/PermissionController");

router.post("/", PermissionController.addPermissions);
router.patch("/:id", PermissionController.update);
router.delete("/:id", PermissionController.delete);

module.exports = router;