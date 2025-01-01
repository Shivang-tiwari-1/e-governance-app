const Administrator = require("../Models/Administaration");
const Course = require("../Models/Course.Model");
const ApiError = require("../Utils/ApiError.Utils");

exports.find_course = async (id) => {
  const finding_course = await Course.findById(id);
  if (finding_course) {
    return finding_course;
  } else {
    throw new ApiError(403, "could not  find the course");
  }
};

exports.find_course_by_name = async (name) => {
  const finding_course = await Course.findOne({ name: name });
  if (finding_course) {
    return finding_course;
  } else {
    throw new ApiError(403, "could not  find the course");
  }
};

exports.create_course = async (name, duration, currency, amount, cutoff) => {
  const create_corse = await Course.create({
    name: name,
    duration: duration,
    cutoff: cutoff,
    feeStructure: {
      currency: currency,
      amount: amount,
    },
  });
  if (create_corse) {
    return create_corse;
  } else {
    throw new ApiError(403, "could not create the course");
  }
};

exports.getting_All_doc = async () => {
  const get_doc = await Administrator.find();
  if (get_doc) {
    return get_doc;
  } else {
    throw new ApiError(500, "could not find the documents");
  }
};
