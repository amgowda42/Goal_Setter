//@desc Register a new user
// @route POST /api/users/register
// @access Public

const register = (req, res) => {
  res.status(200).json({
    message: "User registered successfully",
  });
};

//@desc login user
// @route POST /api/users/login
// @access Public
const login = (req, res) => {
  res.status(200).json({
    message: "User logged in successfully",
  });
};

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
