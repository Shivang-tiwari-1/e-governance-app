const Course = require("../Models/Course.Model");
const ApiError = require("../Utils/ApiError.Utils");

exports.find_course = async (id) => {
  const finding_course = await Course.findOne({ _id: id });
  if (finding_course) {
    return finding_course;
  } else {
    throw new ApiError(403, "could not  find the course");
  }
};
