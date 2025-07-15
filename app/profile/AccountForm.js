"use client";
import ReactForm from "@/components/ReactForm";

export default function AccountForm() {
  function handleSubmit(data){
      console.log(data);
      
  }
  return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 md:p-10 space-y-8">

    <div className="flex items-center gap-4 border-b border-zinc-300 pb-6">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-red-400 shadow-inner flex items-center justify-center text-white font-bold text-lg">
        OP
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Osinachi Patrick</h3>
        <p className="text-sm text-blue-600 hover:underline cursor-pointer">Edit profile picture</p>
      </div>
    </div>
      <ReactForm handleSubmit={handleSubmit}/>
      </div>
  );
}
