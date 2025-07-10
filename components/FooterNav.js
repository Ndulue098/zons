"use client";
import { FaHome, FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/", icon: <FaHome className="text-white" /> },
  { label: "Wallet & Payment", href: "/wallet", icon: <FaWallet className=" text-white" /> },
  { label: "Bet", href: "/bet", icon: <FaMoneyBillWave className=" text-white" /> },
  { label: "profile", href: "/profile", icon: <CgProfile className="text-white" /> },
];

export default function FooterNav() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const pathname=usePathname()
  console.log(pathname);
    

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNav(false); // scrolling down
      } else {
        setShowNav(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.footer
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : 100 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md z-50"
    >
      <div className="flex items-center justify-center gap-3">
        {navItems.map(({href,label,icon},id)=>{  
           const isActive =
            href === "/"? pathname === "/": pathname.startsWith(href);
         
          return <Link href={href} key={id}>
            <button className="flex items-center justify-center text-xl gap-1.5 p-2.5 bg-[#FF1A6C] text-white rounded-full hover:bg-red-600 transition">
              {icon}
              {isActive&&<span className="text-sm hidden sm:inline">{label}</span>}
            </button>
           </Link>
        })}
      </div>
    </motion.footer>
  );
}


