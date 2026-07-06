const express = require("express");
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/auth");
const { registerValidator, loginValidator } = require("../validators/auth");
const tokenVerification = require("../middlewares/verify");

const router = express.Router();

router.post("/register", registerValidator, registerUser);
router.post("/login", loginValidator, loginUser);
router.get("/me", tokenVerification, getCurrentUser);

module.exports = router;
