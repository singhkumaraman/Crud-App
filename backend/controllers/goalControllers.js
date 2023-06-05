const asyncHandler = require("express-async-handler");
const Goals = require("../models/goalModel");
const User = require("../models/userModel");
//READ
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find({ user: req.user.id });
  res.status(200).json(goals);
});
//CREATE
const createGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please send a valid request");
  }
  const goals = await Goals.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goals);
});
//UPDATE
const updateGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find({ user: req.user.id });
  if (!goals) {
    res.status(400);
    throw new Error("Invalid");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }
  if (goals[0].user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  await Goals.findOneAndUpdate({ user: req.user }, req.body);
  res.status(200).json({ msg: "Successfully Updated" });
});
//DELETE
const deleteGoals = asyncHandler(async (req, res) => {
  const goals = await Goals.find({ user: req.user.id });
  if (!goals) {
    res.status(400);
    throw new Error("Invalid");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("User not Found");
  }
  if (goals[0].user.toString() !== user._id.toString()) {
    res.status(401);
    throw new Error("User not Authorized");
  }
  await Goals.findOneAndDelete({ user: req.user });
  res.status(200).json({ msg: "Deletion Successfull" });
});
//EXPORTING MODULES
module.exports = {
  getGoals,
  createGoals,
  updateGoals,
  deleteGoals,
};
