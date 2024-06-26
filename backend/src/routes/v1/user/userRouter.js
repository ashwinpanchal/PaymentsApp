import { Router } from "express";

import { UserController } from "../../../controllers/index.js";
import { authenticate } from "../../../middlewares/auth-middleware.js";

const userRouter = Router();

userRouter.post("/signup", UserController.signup);
userRouter.post("/login", UserController.login);
userRouter.put("/", authenticate, UserController.updateRequest);
userRouter.get("/bulk", authenticate, UserController.getBulk);

userRouter.get("/me", authenticate, UserController.me);

export default userRouter;
