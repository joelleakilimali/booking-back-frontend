import express from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//get all user
router.get("/", verifyAdmin, getUsers);
//get a specific user
router.get("/:id", verifyToken, getUser);
//update a user
router.put("/:id", verifyUser, updateUser);
//delete a user
router.delete("/:id", verifyUser, deleteUser);
export default router;
