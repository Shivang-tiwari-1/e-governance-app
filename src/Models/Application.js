// Linked to a student.
// Managed by administrators for verification.

const mongoose = require("mongoose");

const application_Schema = new mongoose.Schema(
  {
    student_Id: { type: String, ref: "Student", required: true },
    program_Applied_For: { type: String, required: true },
    submission_Date: { type: String, required: true },
    Verification_status: {
      enum: ["fulfilled", "pending", "rejected"],
      deafult: "verification not intiated",
    },
  },
  { timestamps: true }
);
const Application = mongoose.model("Application", application_Schema);
module.exports = Application;
