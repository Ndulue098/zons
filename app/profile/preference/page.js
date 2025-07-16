import CheckedForm from "./CheckedForm";

export default function page() {
  return (
    <section>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Preferences</h1>
        <div className=" flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 md:p-10 ">
          <p className="mb-2 font-sm">
            Choose where you want to receive all your notifications
          </p>
          <CheckedForm />
        </div>
      </div>
    </section>
  );
}
