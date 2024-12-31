const Administrator = require("../Models/Administaration");
const Course = require("../Models/Course.Model");
const { find_course } = require("../Repository/Course.Repository");
const { find_admin_By_id } = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");

exports.creating_course_logic = async (req) => {
  const { name, duration, currency, amount } = req.body;
  if ((name, duration, currency, amount)) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(404, "all fields are required");
  }
  const cheking_if_admin = await find_admin_By_id(req.user.id);
  if (cheking_if_admin) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");
    throw new ApiError(500, "the function failed ");
  }
  const check_if_course = await find_course_by_name(name);
  if (check_if_course && check_if_course.length === 0) {
    console.log("test3->passed");
  } else {
    console.log("test3->failed");
    throw new ApiError(500, "the function failed ");
  }
  const create = await create_course(name, duration, currency, amount);
  if (create) {
    console.log("test4->passed");
    return create;
  } else {
    console.log("test4->failed");
    throw new ApiError(500, "create_course function failed");
  }
};
