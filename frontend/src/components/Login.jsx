import { useNavigate } from "react-router-dom";

import { InputField } from "./InputField";

import {
  loginAtomUsername,
  loginAtomPassword,
} from "../store/atoms/LoginAtoms";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-20 rounded-lg shadow-lg max-w-xl lg:w-1/2 sm:w-2/3 w-4/5 m-auto">
      <div className="text-center text-3xl font-bold mt-10 mb-5">Login</div>
      <InputField placeholder={"Username"} atom={loginAtomUsername} />
      <InputField placeholder={"Password"} atom={loginAtomPassword} />
      <LoginButton text={"Login"} />
      <div className="text-sm text-center mt-3 text-gray-500 mb-10">
        Don't have an accout?{" "}
        <button
          className="text-blue-400 underline"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

function LoginButton({ text }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-500 text-gray-50 p-2 rounded-lg ml-10 mr-10 mt-5">
      {text}
    </button>
  );
}
