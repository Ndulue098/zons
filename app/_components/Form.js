import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";

export default function Form() {
  return (
    <div className="bg-white border border-gray-300 rounded-xl px-6 py-8 max-w-md mx-auto mb-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Login or Sign Up to Zons
      </h2>

      <form className="space-y-5">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />

        <SignInBtn type="signin">Continue</SignInBtn>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>Prefer phone number sign up?</p>
          <button type="button" className="underline hover:text-purple-500">
            Use phone
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex-1 h-px bg-gray-300" />
          <span className="text-sm text-gray-500">OR</span>
          <span className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="flex flex-col gap-3">
          <SignOutBtn type="signup">Sign up with Google</SignOutBtn>
          <SignOutBtn type="signup">Connect with a Wallet</SignOutBtn>
        </div>
      </form>
    </div>
  );
}
