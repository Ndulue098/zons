import CheckedForm from "./CheckedForm";

export default function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Preferences</h1>
      <div className="max-w-5xl mx-auto flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 md:p-10 shadow-sm">
        <p className="mb-2 font-sm">Choose where you want to receive all your notifications</p>
        <CheckedForm />
      </div>
    </div>
  );
}
