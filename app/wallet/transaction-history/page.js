import Image from "next/image";
import BackNav from "./BackNav";

export default function page() {

  return (
    <section>
      <BackNav/>

      <h2 className="text-xl font-semibold mb-3">Transaction History</h2>
      <aside className="flex flex-col gap-4 h-[15rem] overflow-y-scroll min-h-[15rem]">
        <div className=" border-[1px] border-[#DADADA] py-2.5 rounded-xl  px-5  flex items-center justify-between">
            <Image src="/icons/usdc.png" width={35} height={35} alt="wallet" />
            <p>You received $200 </p>
            <Image src="/icons/received.png" width={15} height={15} alt="wallet" />
            <p className="font-medium">4 Feb 02:00 GMT+1</p>
            <p className="bg-[#00B576] text-xs rounded-xl py-1 px-1.5 text-white">Successful</p>
        </div>
        <div className=" border-[1px] border-[#DADADA] py-2.5 rounded-xl  px-5  flex items-center justify-between">
            <Image src="/icons/usdc.png" width={35} height={35} alt="wallet" />
            <p>You sent out $120</p>
            <Image src="/icons/sent.png" width={15} height={15} alt="wallet" />
            <p className="font-medium">4 Feb 02:00 GMT+1</p>
            <p className="bg-[#E40004] text-xs rounded-xl py-1 px-1.5 text-white">Failed</p>
        </div>
        <div className=" border-[1px] border-[#DADADA] py-2.5 rounded-xl  px-5  flex items-center justify-between">
            <Image src="/icons/usdc.png" width={35} height={35} alt="wallet" />
            <p>You used $1 on an event</p>
            <Image src="/icons/event.png" width={15} height={15} alt="wallet" />
            <p className="font-medium">4 Feb 02:00 GMT+1</p>
            <p className="bg-[#E40004] text-xs rounded-xl py-1 px-1.5 text-white">Failed</p>
        </div>
      </aside>
    </section>
  );
}
