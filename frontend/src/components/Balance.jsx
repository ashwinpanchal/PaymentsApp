import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { balanceAtom } from "../store/atoms/Atoms";

export function Balance() {
  const bal = useRecoilValueLoadable(balanceAtom);
  let balance = "Loading...";
  if (bal.state === "hasValue") {
    balance = bal.contents;
  }
  return (
    <div className="w-full flex justify-left">
      <div className="text-md font-bold text-gray-600">
        Your balance: <span className="text-gray-900">₹{balance}</span>
      </div>
    </div>
  );
}
