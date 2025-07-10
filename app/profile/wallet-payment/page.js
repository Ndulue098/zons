export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Wallet & Payment
      </h1>
      <div className="max-w-5xl mx-auto flex flex-col gap-8 rounded-2xl border border-zinc-200 bg-white p-6 md:p-10 shadow-sm">
        {/* Balance Card */}
        <div className="w-full bg-[#F2F2F2] rounded-xl p-6">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">
              Total Balance
            </h2>
            <p className="text-3xl font-bold text-gray-900">$30.05</p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600 mt-2">
              <p>
                No. of Tokens:{" "}
                <span className="font-medium text-gray-800">2</span>
              </p>
              <p>
                Connected Wallets:{" "}
                <span className="font-medium text-gray-800">2</span>
              </p>
            </div>
          </div>
        </div>

        {/* Connected Wallets */}
        <div className="space-y-3 w-full">
          <h2 className="text-lg font-semibold text-gray-800">
            Connected Wallets
          </h2>
          <p className="text-sm text-gray-500">
            Showing all the wallets connected to your account.
          </p>
          <div className="flex justify-between items-center px-4 py-3 border border-zinc-300 rounded-lg">
            <p className="text-sm font-medium text-gray-800">MetaMask</p>
            <button className="text-sm text-[#FF1A6C] hover:underline hover:text-red-600 transition">
              Disconnect
            </button>
          </div>
        </div>

        {/* Export Private Key */}
        <div className="space-y-4 w-full">
          <h2 className="text-lg font-semibold text-gray-800">
            Export Private Key
          </h2>
          <p className="text-sm text-gray-500">
            Reveal your private key to manage this wallet in a different app.
          </p>
          <button
            type="submit"
            className="w-full md:w-1/2 mx-auto block rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            Export private key
          </button>
        </div>
      </div>
    </div>
  );
}
