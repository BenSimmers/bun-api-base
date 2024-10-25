import { Router, type Request, type Response } from "express";
import * as usersService from "../services/Users/users";

const router = Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns a list of users
 *     responses:
 *       200:
 *         description: A list of users
 */
router.get("/", async (req: Request, res: Response) => {
  const users = usersService.getUsers();
  return res.status(200).json(users);
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 */
router.post("/", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  const newUser = usersService.createUser(name, age);
  return res.status(201).json(newUser);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user
 */
router.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = usersService.getUserById(Number(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

export default router;
