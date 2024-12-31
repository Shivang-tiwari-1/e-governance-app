const {
  Applicartion_regustration_logic,
  document_Registration,
} = require("../Services/Student.Service");
const ApiError = require("../Utils/ApiError.Utils");
const ApiResponse = require("../Utils/ApiResponse.Utild");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");


exports.documents = asyncHandler(async (req, res) => {
  const filling_Documents = await document_Registration(req);
  if (filling_Documents) {
    return res
      .status(200)
      .json(new ApiError(200, filling_Documents, "document created"));
  } else {
    throw new ApiError(500, "document logic failed");
  }
});

exports.application_registration = asyncHandler(async (req, res) => {
  const registaring_Application = await Applicartion_regustration_logic(req);
  if (registaring_Application) {
    return res
      .stats(200)
      .json(
        new ApiResponse(200, registaring_Application, `application registerd`)
      );
  } else {
    throw new ApiError(500, "the logic failed");
  }
});


