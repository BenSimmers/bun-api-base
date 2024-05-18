import express, { type Request, type Response } from "express";

// middlewares
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

// swagger docs
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import options from "./options";
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("combined"));

const users = [
  {
    id: 1,
    name: "John Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
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
app.get("/users", async (req: Request, res: Response) => {
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
app.post("/users", async (req: Request, res: Response) => {
  const { name } = req.body;
  const id = users.length + 1;
  const newUser = {
    id,
    name,
  };
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
app.get("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === parseInt(id));
  return res.status(200).json(user);
});

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
