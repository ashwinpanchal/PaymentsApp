import { atom } from "recoil";

export const signupAtomUsername = atom({
  key: "signupAtomUsername",
  default: "",
});

export const signupAtomFirstname = atom({
  key: "signupAtomFirstname",
  default: "",
});

export const signupAtomLastname = atom({
  key: "signupAtomLastname",
  default: "",
});

export const signupAtomPassword = atom({
  key: "signupAtomPassword",
  default: "",
});
