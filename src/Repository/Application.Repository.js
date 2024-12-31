const Application = require("../Models/Application");
const ApiError = require("../Utils/ApiError.Utils");

exports.create_Application = async (
  student_Id,
  program_Applied_For,
  submission_Date,
) => {
  const creatin_application = await Application.create({
    student_Id: student_Id,
    program_Applied_For: program_Applied_For,
    submission_Date: submission_Date,
  });
  if (creatin_application) {
    return creatin_application;
  } else {
    throw new ApiError(403, "could not create the application");
  }
};
