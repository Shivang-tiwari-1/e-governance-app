const { creating_course_logic } = require("../Services/Course.Service");
const ApiError = require("../Utils/ApiError.Utils");
const ApiResponse = require("../Utils/ApiResponse.Utild");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.create_course = asyncHandler(async (req, res) => {
  const creating_course = await creating_course_logic(req);
  if (creating_course) {
    return res
      .status(200)
      .json(new ApiResponse(200, creating_course, "course created"));
  } else {
    throw new ApiError(500, "logic failed");
  }
});
