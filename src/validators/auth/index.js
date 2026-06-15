const { body } = require("express-validator");

const registerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 50, min: 3 })
    .withMessage(
      "Name must not be lesser than 3 characters or longer than 50 Characters",
    ),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a Valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .custom((value) => {
      if (!/[A-Z]/.test(value)) {
        throw new Error("Password must contain at least one uppercase letter");
      }
      if (!/[a-z]/.test(value)) {
        throw new Error("Password must contain at least one lowercase letter");
      }
      if (!/[0-9]/.test(value)) {
        throw new Error("Password must contain at least one number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        throw new Error("Password must contain at least one special character");
      }
      if (value.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }
      return true; // Return true if it passes all checks
    }),

  body("gender")
    .optional()
    .isIn(["male", "female"])
    .withMessage("Gender must be either male or female"),

  body("role").optional().isIn(["user"]),
];

const loginValidator = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a Valid email"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .custom((value) => {
      if (!/[A-Z]/.test(value)) {
        throw new Error("Password must contain at least one uppercase letter");
      }
      if (!/[a-z]/.test(value)) {
        throw new Error("Password must contain at least one lowercase letter");
      }
      if (!/[0-9]/.test(value)) {
        throw new Error("Password must contain at least one number");
      }
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        throw new Error("Password must contain at least one special character");
      }
      if (value.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }
      return true; // Return true if it passes all checks
    }),
];

module.exports = { registerValidator, loginValidator };
