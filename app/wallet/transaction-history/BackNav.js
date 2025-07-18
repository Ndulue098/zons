"use client"
import { ArrowLeft, Search } from "lucide-react"
import { useRouter } from "next/navigation"

export default function BackNav(){
   const router= useRouter()
    return <div className="flex items-center justify-between gap-6 p-4">
            {/* Back Button */}
            <button onClick={()=>router.back()} className="flex items-center text-sm text-[#FF1A6C] hover:underline">
              <ArrowLeft color="#FF1A6C" className="w-4 h-4 mr-1" />
              Back
            </button>
    
            {/* Search Input */}
            <form className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for transaction"
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </form>
          </div>
}

