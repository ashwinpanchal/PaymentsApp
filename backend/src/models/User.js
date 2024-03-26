import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { SALT } from "../config/serverConfig.js";

const userSchema = new Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, reqired: true },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const user = this;
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

const User = model("User", userSchema);

export default User;
