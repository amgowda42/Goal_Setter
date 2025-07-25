const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");

//@desc Register a new user
// @route POST /api/users/register
// @access Public

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Provide all Credentials.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(409);
    throw new Error("User already Exists, Please Login.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      success: true,
      message: "User Registered Successfully.",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials.");
  }
});

//@desc login user
// @route POST /api/users/login
// @access Public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please Provide Both(email & password) Credentials");
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      success: true,
      message: "User Logged in Successfully.",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials.");
  }
});

//desc Get user profile
// @route GET /api/users/me
// @access Private
const getMe = (req, res) => {
  res.status(200).json({
    message: "User profile retrieved successfully",
  });
};

module.exports = {
  register,
  login,
  getMe,
};
