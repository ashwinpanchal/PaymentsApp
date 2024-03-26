import { Router } from "express";
import { v1Router } from "./v1/index.js";

const apiRouter = Router();

apiRouter.use("/v1", v1Router);

export { apiRouter };