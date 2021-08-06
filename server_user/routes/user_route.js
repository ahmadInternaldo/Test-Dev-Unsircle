const router = require("express").Router();
const UserController = require("../controllers/UserController");

router.get("/login", UserController.findOne);
router.get("/register", UserController.createOne);


module.exports = router;