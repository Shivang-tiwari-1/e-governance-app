const multer = require("multer");
const path = require("path");
const ApiError = require("../Utils/ApiError.Utils");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload_to_cloudinary = multer({ storage: storage });

const storage_2 = multer.memoryStorage();

const uploda_to_db = multer({
  storage_2,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") {
      cb(null, true);
    } else {
      cb(new ApiError(500, "Only PDF files are allowed"), false);
    }
  },
});

module.exports = { upload_to_cloudinary, uploda_to_db };
