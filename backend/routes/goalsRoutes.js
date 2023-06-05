const express = require("express");
const router = express.Router();
const protect = require("../middleware/authmiddleware");
const {
  getGoals,
  updateGoals,
  createGoals,
  deleteGoals,
} = require("../controllers/goalControllers");
router.get("/", protect, getGoals);
router.post("/", protect, createGoals);
router.put("/:id", protect, updateGoals);
router.delete("/:id", protect, deleteGoals);
module.exports = router;
