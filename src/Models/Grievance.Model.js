// Raised by students.
// Managed by administrators.
const mongoose = require("mongoose");

const grievance_Schema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    issue_Description: {
      type: String,
      required: true,
    },
    submission_Date: {
      type: String,
      required: true,
    },
    resolution_Date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Grievance = mongoose.models("Grievance", grievance_Schema);
exports.models = Grievance;
