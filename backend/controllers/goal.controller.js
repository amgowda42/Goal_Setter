const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal.model.js");

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({
    user: req.user.id,
  });
  if (!goals || goals.length === 0) {
    res.status(404);
    throw new Error("No goals found");
  }
  res.status(200).json({
    success: true,
    message: "Get Goals Request Successful",
    goals: goals,
  });
});

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
  const { text, title } = req.body;
  if (!title) {
    res.status(400);
    throw new Error("Please add a title");
  }
  if (!text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    title: req.body.title,
    text: req.body.text,
    user: req.user.id,
  });
  res.status(201).json({
    message: "Set goal is Created.",
    goal: goal,
  });
});

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    throw new Error("Please provide a valid goal ID");
  }
  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  // Check if the user exists

  // const user = await User.findById(req.user.id);
  // if (!user) {
  //   res.status(404);
  //   throw new Error("User not found.");
  // }
  // if (goal.user.toString() !== user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized.");
  // }

  //this is more simplyfied way of doing the same check

  if (!req.user) {
    res.status(401);
    throw new Error("User not found.");
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Goal updated successfully",
    success: true,
    goal: updatedGoal,
  });
});

// @desc  Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.status(400);
    throw new Error("Please provide a valid goal ID");
  }
  const goal = await Goal.findById(id);
  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found.");
  }
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }
  const deletedGoal = await Goal.findByIdAndDelete(id, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "Goal Deleted successfully",
    success: true,
    goal: deletedGoal,
  });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
