import { atom } from "recoil";

export const loginAtomUsername = atom({
  key: "loginAtomUsername",
  default: "",
});

export const loginAtomPassword = atom({
  key: "loginAtomPassword",
  default: "",
});
