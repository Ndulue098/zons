import SetOtp from "./SetOtp";

export default function page() {
  return (
  <div className="">
    <h1 className="text-2xl font-bold text-gray-900 mb-6">Security & Authentication</h1>

    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center rounded-2xl border border-zinc-300 bg-white  p-6 md:p-8 space-y-6">
      <div className="text-center">
        <h2 className="text-lg font-medium text-gray-800">Transaction Passcode</h2>
        <p className="text-sm text-gray-500 mt-1">
          Your passcode helps secure your wallet against third-party usage.
        </p>
      </div>
        
      <SetOtp />

      <button
        type="submit"
        className="w-full md:w-1/2 mx-auto block rounded-full bg-[#FF1A6C] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-600"
      >
        Activate Passcode
      </button>
    </div>
  </div>
  );
}
