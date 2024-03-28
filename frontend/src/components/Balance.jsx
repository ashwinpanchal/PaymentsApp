export function Balance({ balance }) {
  return (
    <div className="w-full flex justify-left">
      <div className="text-md font-bold text-gray-600">
        Your balance: <span className="text-gray-900">₹{balance}</span>
      </div>
    </div>
  );
}
