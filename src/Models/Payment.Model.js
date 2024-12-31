//Records payments made by students
const mongoose = require("mongoose");

const payment_Schema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      ref: "Student",
    },
    amount_Paid: {
      type: Number,
      required: true,
    },
    date_Of_Payment: {
      type: String,
      required: true,
    },
    payment_Method: {
      enum: ["UPI", "Card", "Net Banking"],
      required: true,
    },
    tansaction_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Payment = mongoose.models("Payment", payment_Schema);
module.exports = Payment;
