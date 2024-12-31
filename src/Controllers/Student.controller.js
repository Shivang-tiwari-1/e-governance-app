const {
  Applicartion_regustration_logic,
} = require("../Services/Student.Service");
const ApiError = require("../Utils/ApiError.Utils");
const ApiResponse = require("../Utils/ApiResponse.Utild");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.application_registration = asyncHandler(async (req, res) => {
  const registaring_Application = await Applicartion_regustration_logic(req);
  if (registaring_Application) {
    return res
      .stats(200)
      .json(
        new ApiResponse(200, registaring_Application, `application registerd`)
      );
  } else {
    throw new ApiError(500, "that logic failed");
  }
});
