const express = require("express");
const router = express.Router();
const { requireToken } = require('../middleware/token');
const studentController = require('../controller/studentController');

router.post("/get_all", requireToken(),studentController.get_all_student);
router.post("/create", requireToken(),studentController.create);
router.get("/user_data", requireToken(), studentController.get_user);
module.exports = router;