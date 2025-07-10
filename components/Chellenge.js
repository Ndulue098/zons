import Image from "next/image";
import { BiTimer } from "react-icons/bi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsChatSquareTextFill } from "react-icons/bs";

export default function Chellenge() {
  return (
    <div>
      <div
        className="max-w-md w-full flex flex-col bg-white border border-gray-200 xl:p-6 rounded-2xl shadow-sm
      lg:p-4 md:p-6 sm:p-2 mx-auto p-6
      "
      >
        {/* Heading */}
        <h2 className="text-lg font-semibold leading-snug mb-3">
          Which TikToker will earn the most coins in this open match?
        </h2>

        {/* Image */}
        <div className="w-full h-[10rem] relative rounded-xl overflow-hidden mb-4">
          <Image
            src="/img2.png"
            alt="Match Preview"
            fill
            className="object-cover"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-4">
          <button className="w-full text-sm font-medium px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Streams
          </button>
          <button className="w-full text-sm font-medium px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
            Challenges
          </button>
        </div>

        {/* Match Info */}
        <div className="flex justify-between flex-wrap text-sm text-gray-600 font-medium mb-5">
          <time className="flex items-center gap-1">
            <BiTimer />
            <span>12h 40m</span>
          </time>
          <p className="flex items-center gap-1">
            <FaMoneyBillTrendUp />
            <span>$1,200 Vol.</span>
          </p>
          <p className="flex items-center gap-1">
            <BsChatSquareTextFill />
            <span>125 Bets</span>
          </p>
        </div>

        {/* View Market CTA */}
        <button className="w-fit self-center text-sm font-medium px-4 py-2 rounded-lg bg-[#DBFFFB] hover:bg-[#c2f0ea] transition">
          View Market
        </button>
      </div>
    </div>
  );
}
