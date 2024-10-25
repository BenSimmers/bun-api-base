import { Router, type Request, type Response } from "express";
import * as userService from "../services/Users/users";
import type { User } from "../services/Users/model";

const router = Router();

// when doing a real project, this should be replaced with a database
const users: User[] = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 24 },
  { id: 3, name: "Jim Doe", age: 23 },
  { id: 4, name: "Jill Doe", age: 22 },
  { id: 5, name: "Jack Doe", age: 21 },
];

router.get("/", async (req: Request, res: Response) => {
  const userList = userService.getUsers(users);
  return res.status(200).json(userList);
});

router.post("/", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const newUser = userService.createUser(users, name, age);
  return res.status(201).json(newUser);
});

router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = userService.getUserById(users, Number(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

export default router;
