const { getting_All_doc } = require("../Repository/Course.Repository");
const ApiError = require("../Utils/ApiError.Utils");

exports.get_course_logic = async () => {
  const get_all_doc = await getting_All_doc();
  if (get_all_doc && get_all_doc.length > 0) {
    return get_all_doc;
  } else {
    throw new ApiError(500, "function failed ");
  }
};
