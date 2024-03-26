import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

import { SALT } from "../config/serverConfig.js";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 3,
      maxLength: 30,
    },
    firstName: { type: String, required: true, maxLength: 30, trim: true },
    lastName: { type: String, required: true, maxLength: 30, trim: true },
    password: { type: String, reqired: true, minLength: 6 },
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
