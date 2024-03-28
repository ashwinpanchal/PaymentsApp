import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-20 rounded-lg shadow-lg max-w-xl lg:w-1/2 sm:w-2/3 w-4/5 m-auto">
      <div className="text-center text-3xl font-bold mt-10">Login</div>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-10 mr-10 mt-10"
        placeholder="Username"
      />
      <input
        type="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-10 mr-10 mt-5"
        placeholder="Password"
      />
      <button className="bg-blue-600 hover:bg-blue-500 text-gray-50 p-2 rounded-lg ml-10 mr-10 mt-5">
        Login
      </button>
      <div className="text-sm text-center mt-3 text-gray-500 mb-10">
        Don't have an accout?{" "}
        {/* <a href="/signup">
          <span className="text-blue-400 underline">Signup</span>
        </a> */}
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