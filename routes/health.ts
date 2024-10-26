import { Router, type Request, type Response } from "express";
import { neon } from "@neondatabase/serverless";
import { isCallExpression } from "typescript";

const router = Router();

const caller = "gpes here";

const sql = neon(caller);

export function createHealthRouter() {
  router.get("/", async (req: Request, res: Response) =>
    res.status(200).json({ message: "Server is healthy" })
  );

  router.get("/db", async (_, res) => {


    const response = await sql`SELECT version()`;
    const { version } = response[0];
    res.json({ version });
  });

  return router;
}
