const asyncHandler = require("express-async-handler");
const Goal = require("../models/goal.model.js");

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
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
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
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
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
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
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(404);
    throw new Error("Goal not found");
  }

  const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body, {
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
