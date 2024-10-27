import { Router, type Request, type Response } from "express";
import { db } from "../database/database";

const router = Router();

export function createHealthRouter() {
  router.get("/", async (req: Request, res: Response) => {
    const serverAndDbHealth = {
      server: false,
      db: false,
    };

    try {
      await db.raw("SELECT 1");
      serverAndDbHealth.db = true;
    } catch (error) {
      console.error("Database health check failed:", error);
      return res.status(503).json({ ...serverAndDbHealth, error: "Database unavailable" });
    }

    serverAndDbHealth.server = true;
    return res.status(200).json(serverAndDbHealth);
  });

  return router;
}
