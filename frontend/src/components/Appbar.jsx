import { useNavigate } from "react-router-dom";

export function Appbar() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-12 bg-blue-500 flex justify-between">
      <div className="flex flex-col justify-center">
        <div className="ml-5 text-gray-50 text-xl font-bond">Payment</div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex justify-between">
          <button
            className="bg-gray-50 hover:bg-gray-100 rounded mr-3 p-1"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
          <button
            className="bg-gray-50 hover:bg-gray-100 rounded mr-5 p-1"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
