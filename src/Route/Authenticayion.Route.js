const {
  login_Admin,
  create_Admin,
  login_Student,
  create_student,
} = require("../Controllers/Authentication.Controller");

const router = require("express").Router();

router.post("/createStudent", create_student);
router.post("/createAdmin", create_Admin);
router.get("/logInStudent", login_Student);
router.get("/logInAdmin", login_Admin);

module.exports = router;
