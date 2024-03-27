import { Router } from "express";

import { AccountController } from "../../../controllers/index.js";
import { authenticate } from "../../../middlewares/auth-middleware.js";

const accountRouter = Router();

accountRouter.get("/balance", authenticate, AccountController.getBalance);
accountRouter.post("/transfer", authenticate, AccountController.transaction);

export default accountRouter;
