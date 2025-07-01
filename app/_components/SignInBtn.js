export default function SignInBtn({children,onOpen}) {
    return <button onClick={(e)=>{e.preventDefault(), onOpen(true)}} className=" bg-[#FF1A6C] rounded-full w-full mb-3 py-2.5 text-white">
            {children}
        </button>
}

