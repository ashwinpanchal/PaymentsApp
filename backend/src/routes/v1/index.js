import { Router } from "express";
import { userRouter } from "./user/userRouter.js";

const v1Router = Router();

v1Router.use("/user", userRouter);

export { v1Router };
