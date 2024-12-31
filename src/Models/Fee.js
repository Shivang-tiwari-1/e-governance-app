//Associated with students and payments.
const mongoose = require("mongoose");

const fee_Schema = new mongoose.Schema(
  {
    studenId: {
      type: String,
      required: true,
      ref: "Student",
    },
    fee_Type: {
      enum: ["Admission Fee", "ATKT Fee"],
      required: true,
    },
    Amount: {
      type: Number,
      required: true,
    },
    payment_Status: {
      enum: ["fulfilled", "rejected", "pending"],
      default: "payment not initiated",
      required: true,
    },
    recipet_Number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Fee = mongoose.model("Fee", fee_Schema);
module.exports = Fee;
