// export default function page() {
//     return

import {
  ArrowDownCircle,
  ArrowRightCircle,
  Earth,
  FileClock,
  GraduationCap,
  PlusCircle,
} from "lucide-react";
import Image from "next/image";
import Transaction from "./Transaction";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <div className="bg-[#FFCCDE] mb-5 rounded-full p-2 text-center max-w-[90%] text-sm mx-auto">
        <p className="text-[#800D36] font-medium">
          You just received a $3,000 USDC deposit.{" "}
          <Link href="/wallet/transaction-history">
            <span className="underline text-[#FF1A6C] cursor-pointer">
              Show all transaction
            </span>
          </Link>
        </p>
      </div>
      {/*  */}
      <div className="flex items-center justify-between mb-5">
        <div className=" p-1 border-[1px] border-[#DADADA] rounded-md">
          <p className="flex items-center border-[1px] border-[#DADADA] rounded-md px-2 py-1 text-sm font-semibold">
            Crypto
          </p>
        </div>

        <div className="bg-[#FF347D] p-2 rounded-lg">
          <Image
            src="/icons/fileclock.png"
            width={20}
            height={20}
            alt="wallet"
          />
        </div>
      </div>

      <aside className="flex flex-col gap-3 h-[15rem] overflow-y-scroll min-h-[15rem]">
        {/* transaction */}
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        {/* transaction */}
      </aside>
    </div>
  );
}

// export default function page() {
//   return   <section className="min-h-screen flex flex-col ">
//       <nav className="px-12 py-6 shadow-sm ">
//         <div className="flex items-center justify-between">
//           <h2 className="text-xl font-medium">Tuition</h2>
//           {/* x icon */}
//           x
//         </div>
//       </nav>

//       {/* card component */}
//       <div className="px-4 my-auto max-w-xl mx-auto">
//       <div className="w-full bg-red-300 shadow-lg border-xl p-9 md:px-24 px-9 ">
//         <div className="flex items-center justify-center flex-col bg-red-200 ">
//           {/* <GraduationCap className="w-20 h-20 text-2xl"/> */}
//           <img src="/icons/Vector.png" alt="graduation cap" className="w-auto h-auto mb-4 text-2xl" />
//           <div className="mb-3 flex flex-col items-center justify-center text-center">
//             <h2 className="font-medium text-2xl mb-3">Make Tuition Payments</h2>
//             <p className="font-normal text-base">Pay for your tuition fees, with no extra fees or charges</p>
//           </div>

//           {/* <Button  className="bg-[#7049F7]">Make Payment</Button> */}
//           <button className="bg-[#7049F7] p-2 min-w-[80%] rounded-md text-white">
//             Make Payment
//           </button>
//         </div>
//       </div>
//       </div>

//     </section>
// }
