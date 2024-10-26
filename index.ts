import express, { type Request, type Response } from "express";

// middlewares
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import * as userServices from "./services/Users/users";

import { createUserRouter } from "./routes/userRoutes";
import { createHealthRouter } from "./routes/health";
import docsRoutes from "./routes/docs";

const app = express();
const port = Number.parseInt(process.env.PORT ?? "8080") || 8080;

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan("combined"));


// services
const userService = new userServices.UserServiceImpl();

// routes
const userRoutes = createUserRouter(userService);
const healthRoutes = createHealthRouter();

app.use("/users", userRoutes);
app.use("/", healthRoutes);
app.use("/docs", docsRoutes);

app.listen(port, (): void => {
  console.log(`Server started on http://localhost:${port}`);
});
