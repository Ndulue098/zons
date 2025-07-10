"use client"
import { useLayout } from "@/context/ProfileContext";
import Nav from "./Nav";
import FooterNav from "@/components/FooterNav";

export default function LayoutWrapper({ children }) {
  const { collapsed } = useLayout();
  return (
    <section
      className={`min-h-screen grid transition-all duration-300 ${
        collapsed ? "md:grid-cols-[5rem_1fr] grid-cols-[4rem_1fr]" : "grid-cols-[16rem_1fr]"
      }`}
    >
      <Nav />
      <main className="min-h-screen w-full md:px-4 px-2 py-10">{children}</main>
      <FooterNav/> 
    </section>
  );
}

{/* <div>
      <section className="min-h-screen grid grid-cols-[16rem_1fr] ">
     
        <Nav/>
        <main className="min-h-screen  px-4 py-10">{children}</main>
      </section>
    </div>  */}