const { options } = require("../app");
const {
  login_student,
  createStudent,
  createAdmin,
  login_admin,
} = require("../Services/User.Service");
const ApiResponse = require("../Utils/ApiResponse.Utild");
const ApiError = require("../Utils/ApiError.Utils");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.create_student = asyncHandler(async (req, res) => {
  const {
    title,
    lastName,
    first_name,
    middle_Name,
    gender,
    mobile,
    email,
    password,
  } = req.body;

  console.log(req.body);

  if (
    !title ||
    !lastName ||
    !first_name ||
    !middle_Name ||
    !gender ||
    !mobile ||
    !email ||
    !password
  ) {
    throw new ApiError(404, "All fields are required");
  }

  const creating_Student = await createStudent(req.body);
  if (creating_Student) {
    return res
      .status(200)
      .json(new ApiResponse(200, `Student created: ${creating_Student?.name}`));
  } else {
    return new ApiError(403, "Could not create the document");
  }
});

exports.create_Admin = asyncHandler(async (req, res) => {
  const createing_admin = await createAdmin(req.body);
  if (createing_admin) {
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          createing_admin,
          `admin created ${createing_admin?.name}`
        )
      );
  } else {
    throw new ApiResponse(403, "could not create the document");
  }
});

exports.login_Student = asyncHandler(async (req, res) => {
  const logging_in = await login_student(req.body);
  if (!logging_in) {
    throw new ApiError(500, "function failed");
  } else {
    const accessToken = logging_in?.accessToken;
    const refreshToken = logging_in?.refreshToken;
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { data: logging_in?.student, accessToken, refreshToken },
          "user logged in"
        )
      );
  }
});

exports.login_Admin = asyncHandler(async (req, res) => {
  const logging_in = await login_admin(req.body);
  if (!logging_in) {
    throw new ApiError(500, "function failed");
  } else {
    const accessToken = logging_in?.accessToken;
    const refreshToken = logging_in?.refreshToken;
    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          { data: logging_in?.student, accessToken, refreshToken },
          "user logged in"
        )
      );
  }
});
