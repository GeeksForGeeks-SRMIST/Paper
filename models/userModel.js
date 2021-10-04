const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: "{PATH} is required!",
    },
    login_type: {
      type: String,
      required: "{PATH} is required!",
    },
    identifier: {
      type: String,
      required: "{PATH} is required!",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
