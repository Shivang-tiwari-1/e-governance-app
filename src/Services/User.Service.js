const { default: mongoose } = require("mongoose");
const Administrator = require("../Models/Administaration");
const Student = require("../Models/Student");
const {
  create_Admin,
  create_Student,
  find_admin_By_email,
  find_student_by_email,
} = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");
const {generateTokens} = require("../Repository/GenerateToken.Repository");

exports.createStudent = async (studentData) => {
  const student = await create_Student(studentData);
  if (student) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(403, "could not create the student document ");
  }

  const hashData = await student?.hashPassword(student.password);
  if (hashData && student) {
    console.log("test2->passed");
    return student;
  } else {
    console.log("test2->passed");
    throw new ApiError(500, "could not hash the data");
  }
};

exports.createAdmin = async (administratorData) => {
  const administrator = await create_Admin(administratorData);
  if (administrator) {
    console.log("test1->passwd");
  } else {
    console.log("test1->failed");
    throw new ApiError(403, "could not create the student document ");
  }
  const hashData = await administrator?.hashPassword(administrator.password);
  if (hashData && administrator) {
    console.log("test2->passed");
    return administrator;
  } else {
    console.log("test2->failed");

    throw new ApiError(500, "could not hash the data");
  }
};

exports.login_student = async (loginData) => {
  const { email, password } = loginData;
  if (email && password) {
    console.log("test1-passed");
  } else {
    console.log("test1-failed");
    throw new ApiError(500, "some fields are not filled");
  }

  const student = await find_student_by_email(email);
  if (student) {
    console.log("test2-passed");
  } else {
    console.log("test2-failed");
    throw new ApiError(500, "could not retrive the student document");
  }

  const passwordCompare = await student[0]?.comparePassword(password);
  if (passwordCompare) {
    console.log("test3-passed");
  } else {
    console.log("test3-failed");
    throw new ApiError(403, "password is not correct");
  }

  const { accessToken, refreshToken } = await generateTokens(student);
  if (accessToken && refreshToken) {
    console.log("test4-passed");
    return {
      student,
      accessToken,
      refreshToken,
    };
  } else {
    console.log("test4-failed");
    throw new ApiError(403, "could not generate tokens");
  }
};

exports.login_admin = async (loginData) => {
  const { email, password, role } = loginData;
  if (email && password && role) {
    console.log("test1-passed");
  } else {
    console.log("test1-failed");
    throw new ApiError(500, "some fields are not filled");
  }

  const admin = await find_admin_By_email(email, role);
  if (admin) {
    console.log("test2-passed");
  } else {
    console.log("test2-failed");
    throw new ApiError(500, "could not retrieve the student document");
  }
  const passwordCompare = await admin[0]?.comparePassword(password);
  if (passwordCompare) {
    console.log("test3-passed");
  } else {
    console.log("test3-failed");
    throw new ApiError(403, "password is not correct");
  }

  const { accessToken, refreshToken } = await generateTokens(admin);
  if (accessToken && refreshToken) {
    console.log("test4-passed");
    return {
      admin,
      accessToken,
      refreshToken,
    };
  } else {
    console.log("test4-failed");
    throw new ApiError(403, "could not generate tokens");
  }
};
