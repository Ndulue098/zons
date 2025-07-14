import AccountForm from "./AccountForm";

export default function page() {
  return (
    <div className="text-black max-w-5xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Account Settings</h2>
      </div>
      <AccountForm />
    </div>
  );
}
