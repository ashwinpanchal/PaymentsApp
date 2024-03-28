import { amountAtom } from "../store/atoms/Atoms";
import { InputFieldUsers } from "./UserComponent";

export function Sendmoney() {
  return (
    <div className="flex flex-col mt-20 rounded-lg shadow-lg max-w-xl lg:w-1/2 sm:w-2/3 w-4/5 m-auto p-10">
      <div className="text-center text-2xl font-bold mb-10">Send Money</div>
      <div className="flex justify-left">
        <div className="flex justify-center rounded-full bg-blue-200 ml-3 mr-4 text-gray-600 w-14 h-14">
          <div className="text-xl flex flex-col justify-center">{"S"}</div>
        </div>
        <div className="text-xl font-semibold flex flex-col justify-center">
          {"Surya"}
        </div>
      </div>
      <div className="text-md mt-3 text-gray-500">Amount in (Rs)</div>
      <InputFieldUsers placeholder={"Enter amount"} atom={amountAtom} />
      <button className="bg-blue-600 hover:bg-blue-500 text-gray-50 p-2 rounded-lg w-full">
        Initiate transfer
      </button>
    </div>
  );
}
