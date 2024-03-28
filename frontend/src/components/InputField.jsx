import { useRecoilState } from "recoil";

export function InputField({ placeholder, atom }) {
  const [signup, setSignup] = useRecoilState(atom);
  return (
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ml-10 mr-10 mt-5"
      placeholder={placeholder}
      onChange={(e) => {
        setSignup(e.target.value);
      }}
      value={signup}
    />
  );
}
