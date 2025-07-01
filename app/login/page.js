import Image from "next/image";
import SignInBtn from "../_components/SignInBtn";
import SignOutBtn from "../_components/SignOutBtn";
import SocialMedia from "../_components/SocialMedia";
import WelcomeComponent from "../_components/Welcome";
import Flow from "../_components/Welcome";
import Form from "../_components/Form";
import FlowContainer from "../_components/FlowContainer";

export default function Page() {
  return (
    <section className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#F8F0FF] from-70% to-[#FFF5F9] to-100% text-black">
        {/* <Flow /> */}
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
          <Form />
        </div>
      </main>

      {/* Footer / Socials */}
      <footer className="mt-auto py-6">
        <SocialMedia />
      </footer>
    </section>
  );
}

{
  /* <div className="fixed inset-0 z-30 overflow-auto bg-[#8D8D8D1A]/30 backdrop-blur-2xl rounded-xl p-5 m-5">
        <div className="min-h-full flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 px-10 w-full max-h-[34rem] max-w-xl mx-auto shadow-lg">
            <Flow />
          </div>
        </div>
      </div> */
}
