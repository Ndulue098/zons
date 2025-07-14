export default function page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Header with Connect Wallet */}
      <div className="flex justify-between items-center bg-white border border-zinc-200 rounded-2xl shadow-sm px-6 py-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Wallet & Payment</h1>
        <button className="rounded-full bg-[#FF1A6C] px-5 py-2 text-sm font-medium text-white hover:bg-bg-[#FF1A6C]/20 transition">
          Connect Wallet
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Balance Card */}
        <div className="bg-[#F9FAFB] rounded-2xl p-6 shadow-sm border border-zinc-200">
          <div className="space-y-2 text-center">
            <h2 className="text-lg font-semibold text-gray-800">
              Total Balance
            </h2>
            <p className="text-4xl font-bold text-gray-900">$30.05</p>
            <div className="flex justify-center items-center gap-6 text-sm text-gray-600 mt-2">
              <p>
                Tokens: <span className="font-medium text-gray-800">2</span>
              </p>
              <p>
                Wallets: <span className="font-medium text-gray-800">2</span>
              </p>
            </div>
          </div>
        </div>

      {/* Connected Wallets Section */}
      <div className="
      bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between
      ">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Connected Wallets
          </h2>
          <p className="text-sm text-gray-500">
            These wallets are currently connected to your account.
          </p>
        </div>

        <div className="flex justify-between items-center px-4 py-3 border border-zinc-300 rounded-lg bg-gray-50">
          <p className="text-sm font-medium text-gray-800">MetaMask</p>
          <button className="text-sm text-[#FF1A6C] hover:underline hover:text-red-600 transition">
            Disconnect
          </button>
        </div>
      </div>
        
      </div>

      {/* Export Private Key */}
        <div className="mt-10 bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">
              Export Wallet Private Key
            </h2>
            <p className="text-sm text-gray-500">
              Reveal your private key to manage this wallet in another
              application.
            </p>
          </div>
          <button
            type="button"
            className="mt-6  rounded-full bg-[#FF1A6C] px-6 py-3 text-sm font-semibold text-white hover:bg-red-600 transition"
          >
            Export Wallet Private Key
          </button>
        </div>
    </div>
  );
}
