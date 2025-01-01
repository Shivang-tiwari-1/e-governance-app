const { looking_for_documents } = require("../Repository/Documet.Repo");
const path = require("path");
const fs = require("fs");
const ApiError = require("../Utils/ApiError.Utils");

exports.saveImageFromBuffer_logic = (id) => {
  const get_Image = looking_for_documents(id);
  if (get_Image) {
    console.log("test1->passed");
  } else {
    console.log("test1->failed");
    throw new ApiError(500, "function failed to fetch the documents");
  }

  const outputPath = path.join(__dirname, "output", `${id}.png`);
  if (outputPath) {
    console.log("test2->passed");
  } else {
    console.log("test2->failed");
    throw new ApiError(500, "failed to set the path");
  }

  fs.writeFileSync(outputPath, get_Image);
  return true;
};
