// Verifies applications.
// Manages fees, payments, scholarships, and grievances.

const mongoose = require("mongoose");
const { hashPassword, comparePassword, generateAccessToken, generateRefreshToken } = require("../Services/Auth.Services");

const administrator_Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["Admission Officer", "Finance Officer"],
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

administrator_Schema.methods.hashPassword = function (password) {
  return hashPassword.call(this, password);
};

administrator_Schema.methods.comparePassword = function (password) {
  return comparePassword.call(this, password);
};

administrator_Schema.methods.generateAccessToken = function () {
  return generateAccessToken.call(this);
};

administrator_Schema.methods.generateRefreshToken = function () {
  return generateRefreshToken.call(this);
};

const Administrator = mongoose.model("Administrator", administrator_Schema);
module.exports = Administrator;
