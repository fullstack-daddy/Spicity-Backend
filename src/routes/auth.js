import express from "express";
import { check } from "express-validator";
import { Register, Login } from "../controllers/auth.js";
import Validate from "../middleware/validate.js";

const router = express.Router();

// Register route -- POST request
router.post(
  "/register",
  check("email")
    .isEmail()
    .withMessage("Enter a valid email address")
    .normalizeEmail(),
  check("firstName")
    .not()
    .isEmpty()
    .withMessage("Your first name is required")
    .trim()
    .escape(),
  check("lastName")
    .not()
    .isEmpty()
    .withMessage("Your last name is required")
    .trim()
    .escape(),
  check("password")
    .notEmpty()
    .isLength({ min: 8 })
    .withMessage("Must be at least 8 chars long"),
  Validate,
  Register
);

// Login route == POST request
router.post(
  "/login",
  check("email")
      .isEmail()
      .withMessage("Enter a valid email address")
      .normalizeEmail(),
  check("password").not().isEmpty(),
  Validate,
  Login
);

export default router;