import AccountForm from "./AccountForm";

export default function page() {
  return (
    <div className="text-black ">
      <h2 className="text-2xl font-bold text-gray-900 md:mb-6 mb-3">Account settings</h2>
      <AccountForm />
    </div>
  );
}
