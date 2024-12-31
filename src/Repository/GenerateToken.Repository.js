const { asyncHandler } = require("../Utils/AsyncHandler.Utils");
const { find_student_by_id, find_admin_By_id } = require("./User.Repo");

exports.generateTokens = async (user) => {
  console.log("|");
  console.log("|generating tokens....|");
  console.log(user[0]);
  const data =
    user[0].role === "student"
      ? await find_student_by_id(user[0]?.id)
      : await find_admin_By_id(user[0]?.id);

  if (!data) {
    throw new ApiError(500, "retrieving function failed");
  }

  const accessToken = await data?.generateAccessToken();
  if (!accessToken) {
    throw new ApiError(500, "token function failed");
  }

  const refreshToken = await data?.generateRefreshToken();
  if (!refreshToken) {
    throw new ApiError(500, "refreshtoken function failed");
  }

  data.refreshToken = refreshToken;
  await data.save({ validateBeforeSave: false });
  return { accessToken, refreshToken };
};
