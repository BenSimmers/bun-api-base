import { Router, type Request, type Response } from "express";

const router = Router();

export function createHealthRouter() {
  router.get("/", async (req: Request, res: Response) =>
    res.status(200).json({ message: "Server is healthy" })
  );

  return router;
}
