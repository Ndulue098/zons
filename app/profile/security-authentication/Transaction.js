"use client";

import TransactionForm from "@/components/TransactionForm";
import { useState } from "react";

export default function Transaction() {
  const [showPassCode, setShowPassCode] = useState(false);

  function handleSubmit(data) {
    console.log(data);
    
  }

  return (
    <div className="flex flex-col w-full items-center justify-center ">
      {!showPassCode && (
        <div className="text-center mb-3">
          <h2 className="text-lg font-medium text-gray-800">
            Transaction Passcode
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Your passcode helps secure your wallet against third-party usage.
          </p>
        </div>
      )}

      {showPassCode && <TransactionForm setShowPassCode={setShowPassCode} handleSubmit={handleSubmit} />}

      {!showPassCode && (
        <button
          onClick={() => setShowPassCode(true)}
          type="submit"
          className="w-[80%] md:w-1/2 mx-auto block rounded-full bg-[#FF1A6C] px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Activate Passcode
        </button>
      )}
    </div>
  );
}

/* 
// <form className="w-full flex flex-col items-center max-w-md space-y-6">
        //   <h3 className="text-lg font-semibold text-gray-800 text-center">
        //     Create Transaction Passcode
        //   </h3>

        //   <div>
        //     <label className="block text-sm font-medium text-gray-700 mb-2">
        //       New Passcode
        //     </label>
        //     <SetOtp />
        //   </div>

        //   <div>
        //     <label className="block text-sm font-medium text-gray-700 mb-2">
        //       Confirm Passcode
        //     </label>
        //     <SetOtp />
        //   </div>

        //   <button
        //     type="submit"
        //     className="w-[80%] rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        //   >
        //     Create Passcode
        //   </button>
        // </form>

*/

/* 
"use client";

import { useState } from "react";
import SetOtp from "./SetOtp";

export default function Transaction() {
  const [showPassCode, setShowPassCode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add validation & API call logic here
    setShowPassCode(false);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center space-y-6">
      {!showPassCode && (
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-gray-800">
            Transaction Passcode
          </h2>
          <p className="text-sm text-gray-500">
            Your passcode helps secure your wallet against unauthorized access.
          </p>
        </div>
      )}

      {showPassCode ? (
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center space-y-4"
        >
          <div className="w-full text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New passcode
            </label>
            <SetOtp />
          </div>

          <div className="w-full text-left">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm passcode
            </label>
            <SetOtp />
          </div>

          <button
            type="submit"
            className="w-full md:w-1/2 mx-auto rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            Create Passcode
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowPassCode(true)}
          type="button"
          className="w-full md:w-1/2 mx-auto rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Activate Passcode
        </button>
      )}
    </div>
  );
}











*/
