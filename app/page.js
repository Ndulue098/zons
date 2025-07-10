import Image from "next/image";
import TrendsCard from "../components/TrendsCard";
import Chellenge from "../components/Chellenge";
import Footer from "../components/FooterNav";
import FooterNav from "../components/FooterNav";

export default function page() {
  return (
    <section className="relative min-h-screen p-5 sm:px-5 px-0 text-black bg-gradient-to-b from-[#F8F0FF] via-[#FFF5F9] to-white">
      {/* Navigation */}
      <nav className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-y-4 md:gap-y-0 mb-12 sm:px-0 px-2.5">
        {/* Logo */}
        <div>
          <Image
            src="/zons.png"
            alt="Zons logo"
            width={100}
            height={60}
            className="object-contain"
          />
        </div>

        {/* Search Input (takes full width in middle) */}
        <form className="w-full max-w-2xl justify-self-center md:col-auto col-span-2 md:px-4">
          <input
            type="text"
            placeholder="Search for markets"
            className="w-full px-4 py-2.5 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </form>

        {/* Action Buttons */}
        <div className="flex md:row-start-auto md:col-start-auto row-start-1 col-start-2 items-center gap-3 justify-end">
          <button className="px-4 py-2 text-sm font-semibold bg-[#FF1A6C] text-white rounded-full hover:bg-red-600 transition">
            Enter the Zon
          </button> 

          <div className="flex items-center gap-2 border border-gray-300 rounded-md px-2 py-1 ">
            <div className="w-6 h-6 bg-red-300 rounded-full" />
            <span className="text-sm font-medium">sinachpat</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="xl:px-4 md:px-1.5">
        {/* Trending Section */}
        <section className="mb-8">
          <h2 className="text-2xl uppercase font-semibold mb-4 sm:px-2 px-3">
            Trending
          </h2>
          <div className="border border-gray-200 rounded-xl py-3 px-2 bg-white">
            <TrendsCard />
          </div>
        </section>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-8 sm:px-0 px-3">
          {[
            "Streams",
            "Challenges",
            "Soccer",
            "HOT teks",
            "Communities",
            "Accounts/Post/Reactions",
            "Meme/Phrase spread",
          ].map((label, i) => (
            <button
              key={i}
              className={`text-sm px-4 py-2.5 rounded-full ${
                i === 0
                  ? "bg-[#FF1A6C] text-white"
                  : "border border-gray-300 bg-white text-gray-700"
              } transition`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <section
          className="grid mx-auto grid-cols-1 sm:grid-cols-2  xl:gap-6 
          lg:grid-cols-4 lg:gap-3  sm:gap-6  gap-6 sm:p-0 p-3
        "
        >
          <Chellenge />
          <Chellenge />
          <Chellenge />
          <Chellenge />
        </section>
      </main>

      {/* Bottom Navigation */}
      <FooterNav />
    </section>
  );
}
