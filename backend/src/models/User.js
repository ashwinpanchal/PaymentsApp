import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { SALT, JWT_SECRET } from "../config/serverConfig.js";
import Account from "./Account.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    firstName: { type: String, required: true, maxLength: 30, trim: true },
    lastName: { type: String, required: true, maxLength: 30, trim: true },
    password: { type: String, reqired: true, minLength: 5 },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userSchema.post("save", async function (doc) {
  // this is just for simplicity
  await Account.create({
    user: doc._id,
    balance: Math.round(Math.random() * 1000000),
  });
});

userSchema.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

userSchema.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model("User", userSchema);

export default User;
