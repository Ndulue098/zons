import Transaction from "./Transaction";

export default function page() {
  return (
  <div className="max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-8">Security & Authentication</h1>

    <div className=" flex flex-col items-center justify-center rounded-2xl border border-zinc-300 bg-white  p-6 md:p-8 space-y-6">

      <Transaction/>
    </div>
  </div>
  );
}
