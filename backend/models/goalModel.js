const mongoose = require("mongoose");
// const User = require("../models/userModel");
const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
);
module.exports = mongoose.model("Goal", goalSchema);
