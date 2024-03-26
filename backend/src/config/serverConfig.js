import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const PORT = process.env.PORT;
const mongoDbUrl = process.env.mongoDbUrl;
const SALT = bcrypt.genSaltSync(Number(process.env.saltRounds));
const JSON_SECRET = process.env.JSON_SECRET;

export { PORT, mongoDbUrl, SALT, JSON_SECRET };
