"use client";
import Image from "next/image";
import Form from "../../components/Form";
import SocialMedia from "../../components/SocialMedia";
import Flow from "../../components/Welcome";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#F8F0FF] from-70% to-[#FFF5F9] to-100% text-black">
      {open && <Flow onOpen={setOpen} />}
      {/* Header */}
      <header className="flex justify-between items-center sm:px-5 px-3 md:px-8 py-4 mb-3">
        <Image src="/zons.png" alt="Zons logo" width={100} height={70} />
        <button className="text-base px-5 py-2.5 bg-[#FF1A6C] text-white font-medium rounded-full shadow-md hover:bg-red-600 transition">
          Enter the Zon
        </button>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-1 px-4">
        <div className="max-w-3xl text-center space-y-4 mb-5 sm:mb-8">
          <h1 className="text-4xl md:text-5xl font-medium sm:mb-4 mb-2 md:font-semibold">
            Bet on the Future, then Let it Fly
          </h1>
          <p className="text-lg md:text-xl">
            Get into the Zon and start betting on trends and plays.
          </p>
        </div>

        {/* Form Component */}
        <div className="w-full">
          <Form onOpen={setOpen} />
        </div>
      </main>

      {/* Footer / Socials */}
      <footer className="mt-auto py-6">
        <SocialMedia />
      </footer>
    </section>
  );
}
