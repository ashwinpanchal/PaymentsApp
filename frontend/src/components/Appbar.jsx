import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { signedInAtom } from "../store/atoms/Atoms";

export function Appbar() {
  const signedIn = useRecoilValue(signedInAtom);
  return (
    <div className="w-full h-14 bg-blue-500 flex justify-between shadow-md">
      <div className="flex flex-col justify-center">
        <div className="ml-5 text-gray-50 text-xl font-extrabold">Payment</div>
      </div>
      {signedIn ? <SignedIn /> : <SignedOut />}
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
  const name = "Oppo";
  const navigate1 = useNavigate();
  const setSignedIn = useSetRecoilState(signedInAtom);
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-between">
        <div className="flex flex-col justify-center">
          <div className="text-gray-50 text-md font-semibold">
            {"Hello " + name}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center rounded-full bg-blue-200 ml-3 mr-5 text-gray-600 w-9 h-9">
            <div className="flex flex-col justify-center">{name[0]}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="bg-gray-50 hover:bg-gray-100 rounded mr-5 p-1 pl-2 pr-2"
            onClick={() => {
              localStorage.setItem("token", null);
              setSignedIn(false);
              navigate1("/login");
            }}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
