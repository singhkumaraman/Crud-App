const express = require("express");
const router = express.Router();
const protect = require("../middleware/authmiddleware");
const {
  register,
  loginUser,
  getMe,
} = require("../controllers/userControllers");
router.post("/register", register);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
