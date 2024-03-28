import { useNavigate } from "react-router-dom";

export function Appbar() {
  // const navigate = useNavigate();
  return (
    <div className="w-full h-14 bg-blue-500 flex justify-between shadow-md">
      <div className="flex flex-col justify-center">
        <div className="ml-5 text-gray-50 text-xl font-extrabold">Payment</div>
      </div>
      <SignedOut />
    </div>
  );
}

function SignedOut() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between">
        <button
          className="bg-gray-50 hover:bg-gray-100 rounded mr-3 p-1 pl-2 pr-2"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
        <button
          className="bg-gray-50 hover:bg-gray-100 rounded mr-5 p-1 pl-2 pr-2"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

function SignedIn() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between">
        <div className="text-gray-50 text-md font-semibold">Hello</div>
        <div className="flex justify-center rounded-full bg-blue-200 ml-3 mr-5 text-gray-600 w-7 h-7">
          <div className="flex flex-col justify-center">U</div>
        </div>
      </div>
    </div>
  );
}
