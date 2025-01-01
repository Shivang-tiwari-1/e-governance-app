const { getting_All_doc } = require("../Repository/Course.Repository");
const { looking_for_documents } = require("../Repository/Documet.Repo");
const { find_student_by_id } = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");

exports.get_course_logic = async () => {
  const get_all_doc = await getting_All_doc();
  if (get_all_doc && get_all_doc.length > 0) {
    return get_all_doc;
  } else {
    throw new ApiError(500, "function failed ");
  }
};

exports.validate_course_course = async (req) => {
  const { courseId } = req.query;
  if (courseId) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(404, "all fields are required");
  }

  const check_if_student_exist = await find_student_by_id(req.params.id);
  if (check_if_student_exist) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");
    throw new ApiError(404, "function failed to fetch the user");
  }

  

  const get_student_doc = await looking_for_documents(id);


};
