import express from "express";
import {
  studentLogin,
  adminLogin,
  superAdminLogin,
  logout,
  studentSignup,
  adminSignup,
  superAdminSignup,
} from "../controllers/authController.js";
import { refreshToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/studentLogin", studentLogin);
router.post("/adminLogin", adminLogin);
router.post("/superAdminLogin", superAdminLogin);
router.get("/refreshToken", refreshToken);
router.get("/logout", logout);
router.post("/studentSignup", studentSignup);
router.post("/adminSignup", adminSignup);
router.post("/superAdminSignup", superAdminSignup);

export default router;