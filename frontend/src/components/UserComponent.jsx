import { searchUserAtom } from "../store/atoms/Atoms";
import { useRecoilState } from "recoil";

export function UserComponent() {
  return (
    <div className="w-full flex-col justify-left mt-6">
      <div className="text-lg font-bold text-gray-900">Users</div>
      <InputFieldUsers placeholder={"Search users..."} atom={searchUserAtom} />
      <User name={"Kohli"} />
      <User name={"Dhoni"} />
    </div>
  );
}

export function InputFieldUsers({ placeholder, atom }) {
  const [signup, setSignup] = useRecoilState(atom);
  return (
    <input
      type="text"
      className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-3 mb-6"
      placeholder={placeholder}
      onChange={(e) => {
        setSignup(e.target.value);
      }}
      value={signup}
    />
  );
}

function User({ name }) {
  return (
    <div className="flex justify-between m-2.5">
      <div className="flex justify-between">
        <div className="flex justify-center rounded-full bg-blue-200 ml-3 mr-4 text-gray-600 w-10 h-10">
          <div className="flex flex-col justify-center">{name[0]}</div>
        </div>
        <div className="flex flex-col justify-center">{name}</div>
      </div>
      <div>
        <button className="bg-blue-500 text-gray-50 hover:bg-blue-400 rounded mr-3 p-2.5">
          Send money
        </button>
      </div>
    </div>
  );
}
