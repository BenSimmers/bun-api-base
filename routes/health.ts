import { Router, type Request, type Response } from "express";

const router = Router();

// GET /health
/**
 * @swagger
 * /health:
 *   get:
 *     summary: Returns the health of the server
 *     responses:
 *       200:
 *         description: The server is healthy
 */
router.get("/", async (req: Request, res: Response) =>
  res.status(200).json({ message: "Server is healthy" })
);

export default router;
