import { atom } from "recoil";

export const searchUserAtom = atom({
  key: "searchUserAtom",
  default: "",
});

export const amountAtom = atom({
  key: "amountAtom",
  default: null,
});

export const signedInAtom = atom({
  key: "signedInAtom",
  default: false,
});
