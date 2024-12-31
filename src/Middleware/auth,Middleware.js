const {
  find_student_by_id,
  find_admin_By_id,
} = require("../Repository/User.Repo");

exports.authentication = asyncHandler(async (req, res, next) => {
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
  next();
});
