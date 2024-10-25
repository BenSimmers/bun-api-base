import { Router, type Request, type Response } from "express";
import type { UserService } from "../services/Users/model";

const router = Router();

export function createUserRouter(userService: UserService) {
  router.get("/", async (req: Request, res: Response) => {
    try {
      const userList = await userService.getUsers();
      return res.status(200).json(userList);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  router.post("/", async (req: Request, res: Response) => {
    const { name, age } = req.body;
    try {
      const newUser = await userService.createUser(name, age);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: "Bad Request" });
    }
  });

  router.get("/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(Number(id));
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });

  return router;
}
