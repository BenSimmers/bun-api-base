import { Router, type Request, type Response } from "express";
import * as userService from "../services/Users/users";
import type { User } from "../services/Users/model";

const router = Router();


router.get("/", async (req: Request, res: Response) => {
  const userList = userService.getUsers();
  return res.status(200).json(userList);
});

router.post("/", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const newUser = userService.createUser(name, age);
  return res.status(201).json(newUser);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = userService.getUserById(Number(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

export default router;
