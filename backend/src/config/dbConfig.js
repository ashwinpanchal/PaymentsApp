import mongoose from "mongoose";

import { mongoDbUrl } from "./serverConfig.js";

export const dbConnect = async () => {
  await mongoose.connect(mongoDbUrl, { dbName: "paytmClone" });
  console.log("Mongo DB connected");
};
