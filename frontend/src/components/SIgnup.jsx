import { useNavigate } from "react-router-dom";

import { InputField } from "./InputField";

import {
  signupAtomUsername,
  signupAtomFirstname,
  signupAtomLastname,
  signupAtomPassword,
} from "../store/atoms/SignupAtoms";

export function Signup() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-20 rounded-lg shadow-lg max-w-xl lg:w-1/2 sm:w-2/3 w-4/5 m-auto">
      <div className="text-center text-3xl font-bold mt-10 mb-5">Signup</div>
      <InputField placeholder={"Username"} atom={signupAtomUsername} />
      <InputField placeholder={"First name"} atom={signupAtomFirstname} />
      <InputField placeholder={"Last name"} atom={signupAtomLastname} />
      <InputField placeholder={"Password"} atom={signupAtomPassword} />
      <SingupButton text={"Signup"} />
      <div className="text-sm text-center mt-3 text-gray-500 mb-10">
        Already have an accout?{" "}
        <button
          className="text-blue-400 underline"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

function SingupButton({ text }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-500 text-gray-50 p-2 rounded-lg ml-10 mr-10 mt-5">
      {text}
    </button>
  );
}
