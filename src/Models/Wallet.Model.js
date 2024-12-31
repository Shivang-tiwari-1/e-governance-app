//Linked to a student for managing transactions.
const mongoose = require("mongoose");

const wallet_Schema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      ref: "Student",
      required: true,
    },
    Balance: {
      type: Number,
      required: true,
    },
    transaction_history: [
      {
        date: {
          type: String,
        },
        time: {
          type: String,
        },
        day: {
          type: String,
        },
        tansaction_type: {
          type: String,
        },
        transaction_method: {
          type: String,
        },
      },
      {
        _id: false,
      },
    ],
  },
  { timestamps: true }
);

const Wallet = mongoose.model("Wallet", wallet_Schema);
module.exports = Wallet;
