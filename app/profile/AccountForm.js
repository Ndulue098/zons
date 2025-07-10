"use client";
import ReactForm from "@/components/ReactForm";

export default function AccountForm() {
  function handleSubmit() {}
  return (
    <div className="max-w-5xl rounded-lg flex flex-col mx-auto mt-9 border-[1px] md:p-7 p-3 border-zinc-400">
      <div className="flex border-b-[1.5px] p-2 pr-0 items-center gap-4 mb-5 justify-center ml-auto">
        <div className="w-[4rem] h-[4rem] bg-red-300 rounded-full"></div>
        <div>
          <h2>Osinachi Patrick</h2>
          <p>Edit profile picture </p>
        </div>
      </div>

      <ReactForm handleSubmit={handleSubmit}/>
    </div>
  );
}
