import express from "express";
import bodyParser from "body-parser";

import { PORT } from "./config/serverConfig.js";
import { dbConnect } from "./config/dbConfig.js";
import { apiRouter } from "./routes/index.js";

const startAndSetup = async () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRouter);

  app.listen(PORT, async () => {
    console.log("Server running on port", PORT);
    await dbConnect();
  });
};

startAndSetup();
