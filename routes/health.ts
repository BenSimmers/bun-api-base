import { Router, type Request, type Response } from "express";
import { db } from "../database/database";

const router = Router();

export function createHealthRouter() {
  router.get("/", async (req: Request, res: Response) =>
    res.status(200).json({ message: "Server is healthy" })
  );

  router.get("/db", async (_, res) => {
    const items = await db("users").select("*");

    res.status(200).json({ items });
  });

  return router;
}
