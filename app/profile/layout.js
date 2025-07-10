import Link from "next/link";
import Nav from "./Nav";
import { ProfileContext } from "@/context/ProfileContext";
import LayoutWrapper from "./LayoutWrapper";

export default function layout({ children }) {
  return (
    <div>
        <ProfileContext>
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </ProfileContext>
    </div>
  )
    {/* <div>
      <section className="min-h-screen grid grid-cols-[16rem_1fr] ">
     
        <Nav/>
        <main className="min-h-screen  px-4 py-10">{children}</main>
      </section>
    </div>  */}
    
}
   {/* <nav className="bg-red-400 py-5 px-4 m-4 mr-0 rounded-xl">
          <h2 className="font-bold text-center mb-3">Setting</h2>
          <ul className="flex flex-col gap-3 ">
            <Link href="/profile">
              <li>Account</li>
            </Link>
            <Link href="/profile/security-authentication">
              <li>Security & Authentication</li>
            </Link>
            <Link href="/profile/wallet-payment">
              <li>Wallet & Payment</li>
            </Link>
            <Link href="/profile/preference">
              <li>Preferences</li>
            </Link>
            <Link href="">
              <li>Logout</li>
            </Link>
          </ul>
        </nav> */}