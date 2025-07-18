import Image from "next/image";

export default function Transaction() {
  return (
    <div className="py-2.5 rounded-xl text-[#FFFFFF] px-5 bg-[#FF347D] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/icons/usdc.png" width={35} height={35} alt="wallet" />
        <div>
          <h2 className="font-semibold">US Dollar Coin</h2>
          <div className="flex items-center text-sm gap-3">
            <p className="">1 USD</p>
            <p className="text-[#00CE5D]">+3.6%</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <p>1,230 cUSD</p>
        <p className="text-sm">1,230 cUSD</p>
      </div>
    </div>
  );
}
