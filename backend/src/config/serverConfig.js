import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = process.env.PORT;
const mongoDbUrl = process.env.mongoDbUrl;
const SALT = bcrypt.genSaltSync(Number(process.env.saltRounds));

export { PORT, mongoDbUrl, SALT };
