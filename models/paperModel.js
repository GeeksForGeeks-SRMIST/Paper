const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: "{PATH} is required!",
    },
    email: {
      type: String,
      required: "{PATH} is required!",
    },
    pdf_url: {
      type: String,
      required: "{PATH} is required!",
    },
    title: {
      type: String,
      required: "{PATH} is required!",
    },
    description: {
      type: String,
      required: "{PATH} is required!",
    },
    subject: {
      type: String,
      required: "{PATH} is required!",
    },
  },
  { timestamps: true }
);

const Paper = mongoose.model("Paper", paperSchema);

module.exports = Paper;
