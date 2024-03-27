import { Router } from "express";
import userRouter from "./user/userRouter.js";
import accountRouter from "./account/accountRouter.js";

const v1Router = Router();

v1Router.use("/user", userRouter);
v1Router.use("/account", accountRouter);

export { v1Router };
