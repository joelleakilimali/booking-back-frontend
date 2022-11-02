import express from "express";
import { login, register } from "../controllers/auth.controller.js";
const router = express.Router();
/**
 * @url:api/auth/register
 */
router.post("/register", register);
router.post("/login", login);

export default router;
