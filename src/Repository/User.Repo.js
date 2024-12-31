const Administrator = require("../Models/Administaration");
const Student = require("../Models/Student");
const ApiError = require("../Utils/ApiError.Utils");
const { asyncHandler } = require("../Utils/AsyncHandler.Utils");

exports.create_Student = async (studentData) => {
  const {
    title,
    lastName,
    first_name,
    middle_Name,
    gender,
    mobile,
    email,
    password,
  } = studentData;
  const student = await Student.create({
    title: title,
    lastName: lastName,
    first_name: first_name,
    middle_Name: middle_Name,
    gender: gender,
    mobile: Number(mobile),
    email: email,
    password: password,
  });
  if (student) {
    return student;
  } else {
    throw new ApiError(403, "could not create the document");
  }
};

exports.create_Admin = async (administratorData) => {
  const { name, role, email, phone, password } = administratorData;
  try {
    const administrator = await Administrator.create({
      name: name,
      role: role,
      email: email,
      phone: phone,
      password: password,
    });

    if (administrator) {
      return administrator;
    } else {
      throw new ApiError(403, "Could not create the document");
    }
  } catch (error) {
    console.log(error);
  }
};

exports.find_student_by_email =async (email) => {
  const find_Student = await Student.find({ email: email });
  if (find_Student) {
    return find_Student;
  } else {
    throw new ApiError(403, "could not find the user");
  }
};

exports.find_admin_By_email = async (email, role) => {
  const find_admin = await Administrator.find({ email: email, role: role });
  if (find_admin) {
    return find_admin;
  } else {
    throw new ApiError(403, "could not find the admin document");
  }
};

exports.find_student_by_id = async (id) => {
  const find_Student = await Student.findById(id);
  if (find_Student) {
    return find_Student;
  } else {
    throw new ApiError(403, "could not find the user");
  }
};

exports.find_admin_By_id = async (id, role) => {
  const find_admin = await Administrator.findById(id);
  if (find_admin) {
    return find_admin;
  } else {
    throw new ApiError(403, "could not find the admin document");
  }
};
