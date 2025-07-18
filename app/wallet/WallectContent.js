import { ArrowDownCircle, ArrowRightCircle, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function WallectContent({children}){
  return (
    <div className="max-w-screen-sm rounded-lg border-[1px] border-[#DADADA] p-7 mx-auto p-3 bg-[#FFFFFF]">
      <div className="mb-5">
        <h1 className="text-2xl font-semibold mb-2">My Wallet</h1>
        <p className="text-sm ">
          A wallet to store your betting funds, to make withdrawals of wins and
          to pay for things
        </p>
      </div>
      <div className="border-[1px] border-[#DADADA] rounded-md  p-5 bg-gradient-to-b from-[#FFF5F9] via-[#F8F0FF] to-[#FFFFFF]">
        <div className="flex items-center justify-between mb-4">
          {/* !work */}
          <div className=" p-1 border-[1px] border-[#DADADA] rounded-md">
            <div className="flex items-center border-[1px] border-[#DADADA] rounded-md px-2 py-1">
              <Image
                src="/icons/wallet-3.png"
                width={15}
                height={15}
                alt="wallet"
              />
              <p className="font-medium text-xs">Wallet</p>
            </div>
          </div>

          {/* !country */}
          <div className=" p-1 border-[1px] border-[#DADADA] rounded-md">
            <div className="flex gap-2 justify-center items-center px-1 py-1">
              <Image
                src="/icons/flag.png"
                width={20}
                height={20}
                alt="wallet"
              />
              <p className="font-medium text-xs">USD</p>
              <Image
                src="/icons/down.png"
                width={15}
                height={15}
                alt="wallet"
                className="w-auto h-auto"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* !country */}
            <Image
              src="/icons/setting.png"
              width={20}
              height={20}
              alt="wallet"
            />
            <Image src="/profile.png" width={30} height={30} alt="wallet" />
          </div>
        </div>

        {/* wallet */}
        <div className="flex flex-col bg-[#FF347D] px-3 py-5 mb-4 text-center rounded-xl text-[#FFFFFF]">
          <p className="text-sm font-medium mb-2">Wallet balance</p>
          <h2 className="text-3xl font-semibold mb-4">$30,454.34</h2>
          <div className="flex justify-center gap-4 items-center justify-center ">
            <div className="flex flex-col gap-2 items-center">
              <div className="bg-[#FFFFFF] p-3 px-5 border-2 border-[#DADADA] rounded-xl flex item-center justify-center">
                <PlusCircle color="#FF1A6C" />
              </div>
              <p className="text-sm">Add funds</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="shrink-1 bg-[#FFFFFF] p-3 px-5 border-2 border-[#DADADA] rounded-xl flex item-center justify-center">
                <ArrowDownCircle color="#FF1A6C" />
              </div>
              <p className="text-sm">Receive funds</p>
            </div>

            <div className="flex flex-col gap-2 items-center justify-center">
              <div className="bg-[#FFFFFF] p-3 px-5 border-2 border-[#DADADA] rounded-xl flex item-center justify-center">
                <ArrowRightCircle color="#FF1A6C" />
              </div>
              <p className="text-sm">Withdraw funds</p>
            </div>
          </div>
        </div>

        {children}

      </div>
    </div>
  );
}
