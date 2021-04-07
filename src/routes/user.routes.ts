import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/api/users", getAllUsers);
router.get("/api/users/:id", getOneUser);
router.post("/api/users", createUser);
router.put("/api/users/:id", updateUser);
router.delete("/api/users/:id", deleteUser);

export default router;
