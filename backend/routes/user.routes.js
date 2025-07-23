const express = require("express");
const router = express.Router();
const { register, login, getMe } = require("../controllers/user.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/me", getMe);

module.exports = router;
