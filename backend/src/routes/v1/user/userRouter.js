import { Router } from "express";

import { UserController } from "../../../controllers/index.js";

const userRouter = Router();

userRouter.use("/signup", UserController.signup);

export { userRouter };
