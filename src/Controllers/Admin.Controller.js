const { getting_All_doc } = require("../Repository/Course.Repository");
const { get_course_logic } = require("../Services/Admin.Service");
const ApiResponse = require("../Utils/ApiResponse.Utild");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.get_courses = asyncHandler(async (req, res) => {
  const getting_All_corses = await get_course_logic(req);
  if (getting_All_corses && getting_All_corses.length > 0) {
    return res
      .status(200)
      .json(new ApiResponse(200, getting_All_corses, "courses fetched"));
  }
});
