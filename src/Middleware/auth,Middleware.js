const {
  find_student_by_id,
  find_admin_By_id,
} = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.authentication = asyncHandler(async (req, res, next) => {
  console.log("|");
  console.log("|authentication starts|");
  const authHeader = req.headers.authorization || req.headers.Authorization;
  let tokenFromHeader = authHeader?.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : null;
  const { accessToken } = req.cookies;
  !tokenFromHeader ? (tokenFromHeader = accessToken) : tokenFromHeader;
  if (tokenFromHeader !== null) {
    console.log("test1-token-passed");
  } else {
    console.log("test2-token-failed");
    return message(req, res, 500, "no token found");
  }

  const decode = jwt.verify(tokenFromHeader, process.env.GENERATE_TOKEN_SECRET);
  if (decode) {
    console.log("test2-token-passed");
  } else {
    console.log("test2-token-failed");
    return message(req, res, 500, "could nto decode");
  }
  let data;
  if (decode?.role === "student") {
    data = await find_student_by_id(decode.id);
    if (data) {
      console.log("test3-token-passed");
    } else {
      console.log("test3-token-failed");
      return message(req, res, 403, { error: "login please" });
    }
  } else {
    data = await find_admin_By_id(decode.id);
    if (data) {
      console.log("test3-token-passed");
    } else {
      console.log("test3-token-passed");
      return message(req, res, 403, "could not find the user");
    }
  }
  req.user = data;
  console.log("|authentication end|");
  console.log("|");
  next();
});

exports.authority = asyncHandler(async (req, res, next) => {
  console.log("|");
  console.log("CHEKING AUTHORITY-STARTS");
  const admin = await find_admin_By_id(req.user.id);
  if (admin) {
    if (admin.role !== "Admission Officer") {
      throw new ApiError(500, "you are not allowed");
    }
  } else {
    throw new ApiError(403, "bad request");
  }

  console.log("|");
  console.log("CHEKING AUTHORITY-STARTS");
});
