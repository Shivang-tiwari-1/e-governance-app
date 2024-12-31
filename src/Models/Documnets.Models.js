const mongoose = require("mongoose");

const document_Schema = new mongoose.Schema(
  {
    studentID: {
      type: String,
      required: true,
      ref: "Student",
    },
    appllying_for: {
      type: String,
      enum: [
        "SSC",
        "HSC",
        "First-year",
        "Second-year",
        "Third-year",
        "Fourth-year",
        "Fifth-year",
        "Sixth-year",
        "Seventh+year",
        "Eighth-year",
      ],
      required: true,
    },
    SSC_Marks_sheet: {
      type: Buffer,
      required: true,
    },
    HSC_Marks_Sheeet: {
      type: Buffer,
      required: true,
    },
    SSC_Leaving_Certificate: {
      type: Buffer,
      required: true,
    },
    HSC_Leaving_Certificate: {
      type: Buffer,
      required: true,
    },
    certificate_Por_Physically_challanged: {
      type: Buffer,
    },
    elgibility_form: {
      type: Buffer,
    },
    semester1_MarlsSheet: {
      type: Buffer,
    },
    semester2_MarlsSheet: {
      type: Buffer,
    },
    semester3_MarlsSheet: {
      type: Buffer,
    },
    semester4_MarlsSheet: {
      type: Buffer,
    },
    semester5_MarlsSheet: {
      type: Buffer,
    },
    semester6_MarlsSheet: {
      type: Buffer,
    },
    semester7_MarlsSheet: {
      type: Buffer,
    },
    semester8_MarlsSheet: {
      type: Buffer,
    },
    yuva_raksha_form: {
      type: Buffer,
    },
    adhaar_card: {
      type: Buffer,
    },
    electricity_Bill: {
      type: Buffer,
      required: true,
    },
  },
  { timestamps: true }
);

const Document = mongoose.models("Document", document_Schema);
module.exports = Document;
