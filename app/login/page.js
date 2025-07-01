import Image from "next/image";
import SignInBtn from "../_components/SignInBtn";
import SignOutBtn from "../_components/SignOutBtn";
import SocialMedia from "../_components/SocialMedia";
import WelcomeComponent from "../_components/Welcome";
import Flow from "../_components/Welcome";

export default function Page() {
  return (
    <section className="bg-[#F8F0FF] relative text-black flex flex-col h-dvh p-5">
      {/* hover lay */}

      {/* <div className="fixed inset-0 z-30 overflow-auto bg-[#8D8D8D1A]/30 backdrop-blur-2xl rounded-xl p-5 m-5">
        <div className="min-h-full flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 px-10 w-full max-h-[34rem] max-w-xl mx-auto shadow-lg">
            <Flow />
          </div>
        </div>
      </div> */}

      <div className="flex justify-between px-8  mb-6 ">
        <Image src="/zons.png" alt="" width={100} height={100} />
        <button className="text-base px-5 py-2.5 bg-red-500 rounded-full">
          Enter the Zon
        </button>
      </div>

      <div className="flex flex-col mb-4 items-center justify-center max-w-3xl mx-auto  gap-2.5">
        <h2 className="text-5xl">Bet on the Future, then Let it Fly</h2>
        <p className="text-base">
          Get into the zon and get started betting on trends and plays
        </p>
      </div>
      <div className="bg-[#FFFFFF] border-[#8D8D8D] flex-1 rounded-lg border-[1px] max-w-[482px] mx-auto mb-6 p-12 py-6 pb-12">
        <h2 className="text-2xl text-center mb-4 ">Login or sign up to Zons</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 mb-3 rounded border border-gray-300 focus:outline-none"
          />
          <SignInBtn type="signin">Continue</SignInBtn>
          <div className="flex items-center text-sm justify-between mb-4">
            <p>Prefer phone number sign up?</p>
            <p>use phone </p>
          </div>
          <div className="flex items-center justify-center mb-3">
            <span className="bg-[#8D8D8D] w-full h-[1px]"></span>
            <p className="mx-2">OR</p>
            <span className="bg-[#8D8D8D] w-full h-[1px]"></span>
          </div>
          <div className="flex flex-col gap-4">
            <SignOutBtn type="signup">Sign up with Google</SignOutBtn>
            <SignOutBtn type="signup">Connect with a wallet</SignOutBtn>
          </div>
        </form>
      </div>
      <div className="mt-auto">
        <SocialMedia />
      </div>
    </section>
  );
}
