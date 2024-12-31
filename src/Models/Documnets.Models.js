const mongoose = require("mongoose");

const document_Schema = new mongoose.Schema(
  {
    studentID: {
      type: String,
      required: true,
      ref: "Student",
    },
    SSC_Marks_sheet: {
      type: String,
      required: true,
    },
    HSC_Marks_Sheeet: {
      type: String,
      required: true,
    },
    SSC_Leaving_Certificate: {
      type: String,
      required: true,
    },
    HSC_Leaving_Certificate: {
      type: String,
      required: true,
    },
    certificate_Por_Physically_challanged: {
      type: String,
    },
    elgibility_form: {
      type: String,
    },
    semester1_MarlsSheet: {
      type: String,
    },
    semester2_MarlsSheet: {
      type: String,
    },
    semester3_MarlsSheet: {
      type: String,
    },
    semester4_MarlsSheet: {
      type: String,
    },
    semester5_MarlsSheet: {
      type: String,
    },
    semester6_MarlsSheet: {
      type: String,
    },
    semester7_MarlsSheet: {
      type: String,
    },
    semester8_MarlsSheet: {
      type: String,
    },
    yuva_raksha_form: {
      type: String,
    },
    adhaar_card: {
      type: String,
    },
    electricity_Bill: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Document = mongoose.models("Document", document_Schema);
module.exports = Document;
