const { find_course } = require("../Repository/Course.Repository");
const {
  looking_for_documents,
  create_the_document,
} = require("../Repository/Documet.Repo");
const { find_student_by_id } = require("../Repository/User.Repo");
const ApiError = require("../Utils/ApiError.Utils");
const { cerateCurrentDate } = require("./other.Services");

exports.document_Registration = async (req) => {
  const {
    appllying_for,
    SSC_Marks_sheet,
    HSC_Marks_Sheeet,
    SSC_Leaving_Certificate,
    HSC_Leaving_Certificate,
    certificate_Por_Physically_challanged,
    elgibility_form,
    semester1_MarlsSheet,
    semester2_MarlsSheet,
    semester3_MarlsSheet,
    semester4_MarlsSheet,
    semester5_MarlsSheet,
    semester6_MarlsSheet,
    semester7_MarlsSheet,
    semester8_MarlsSheet,
    yuva_raksha_form,
    adhaar_card,
    electricity_Bill,
  } = req.file;
  const looking_for_the_user = await find_student_by_id(req.user.id);
  if (looking_for_the_user) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(500, "could not retrieve information");
  }

  const check_if_document_already_exists = await looking_for_documents(
    req.user.id
  );
  if (
    check_if_document_already_exists &&
    check_if_document_already_exists.length === 0
  ) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");

    throw new ApiError(500, "there is already a document with this id");
  }

  const cerating_the_documebnt = await create_the_document(
    appllying_for,
    SSC_Marks_sheet,
    HSC_Marks_Sheeet,
    SSC_Leaving_Certificate,
    HSC_Leaving_Certificate,
    certificate_Por_Physically_challanged,
    elgibility_form,
    semester1_MarlsSheet,
    semester2_MarlsSheet,
    semester3_MarlsSheet,
    semester4_MarlsSheet,
    semester5_MarlsSheet,
    semester6_MarlsSheet,
    semester7_MarlsSheet,
    semester8_MarlsSheet,
    yuva_raksha_form,
    adhaar_card,
    electricity_Bill
  );
  if (cerating_the_documebnt) {
    console.log("test3->passed");
    return cerating_the_documebnt;
  } else {
    console.log("test4->failed");
    throw new ApiError(500, "function failed to create the document");
  }
};

exports.Applicartion_regustration_logic = async (req) => {
  
  const check_for_Student_doc = await looking_for_documents(req.user.id);
  if (check_for_Student_doc) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(500, "could not retrieve information");
  }

  const looking_for_the_user = await find_student_by_id(
    check_for_Student_doc?.studentID
  );
  if (looking_for_the_user) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");
    throw new ApiError(500, "could not retrieve information");
  }

  const looking_for_the_course = await find_course(req.params.id);
  if (looking_for_the_course) {
    console.log("test3->passed");
  } else {
    console.log("test3->failed");
    throw new ApiError(500, "could not retrieve course information");
  }

  const create_current_date = cerateCurrentDate();
  if (create_current_date) {
    console.log("test4->passed");
  } else {
    console.log("test4->failed");
    throw new ApiError(500, "could not create the date");
  }

  const creating_the_Application = await create_Application(
    looking_for_the_user?.id,
    looking_for_the_course?.name,
    create_current_date
  );
  if (creating_the_Application) {
    console.log("test5->passed");
    return creating_the_Application;
  } else {
    console.log("test5->failed");
    throw new ApiError(500, "function could not create thr application");
  }
};
