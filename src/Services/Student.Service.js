const { find_course } = require("../Repository/Course.Repository");
const { find_student_by_id } = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");
const { cerateCurrentDate } = require("./other.Services");

exports.Applicartion_regustration_logic = async (req) => {
  const looking_for_the_user = await find_student_by_id(req.user.id);
  if (looking_for_the_user) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(500, "could not retrieve information");
  }

  const looking_for_the_course = await find_course(req.params.id);
  if (looking_for_the_course) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");
    throw new ApiError(500, "could not retrieve course information");
  }

  const create_current_date = cerateCurrentDate();
  if (create_current_date) {
    console.log("test3->passed");
  } else {
    console.log("test3->failed");
    throw new ApiError(500, "could not create the date");
  }

  const creating_the_Application = await create_Application(
    looking_for_the_user?.id,
    looking_for_the_course?.name,
    create_current_date
  );
  if (creating_the_Application) {
    console.log("test4->passed");
    return creating_the_Application;
  } else {
    console.log("test4->failed");
    throw new ApiError(500, "function could not create thr application");
  }
};
