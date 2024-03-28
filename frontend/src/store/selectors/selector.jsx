import { selector } from "recoil";
import {
  signupAtomFirstname,
  signupAtomLastname,
  signupAtomPassword,
  signupAtomUsername,
} from "../atoms/SignupAtoms";

export const signUpSelector = selector({
  key: "signUpSelector",
  get: ({ get }) => {
    const username = get(signupAtomUsername);
    const firstName = get(signupAtomFirstname);
    const lastName = get(signupAtomLastname);
    const password = get(signupAtomPassword);

    return { username, firstName, lastName, password };
  },
});
