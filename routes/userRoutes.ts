import { Router, type Request, type Response } from "express";

const router = Router();

const users = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Doe", age: 24 },
  { id: 3, name: "Jim Doe", age: 23 },
  { id: 4, name: "Jill Doe", age: 22 },
  { id: 5, name: "Jack Doe", age: 21 },
];

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
  const id = users.length + 1;
  const newUser = { id, name, age };
  users.push(newUser);
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
  const user = users.find((user) => user.id === parseInt(id));
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.status(200).json(user);
});

export default router;
