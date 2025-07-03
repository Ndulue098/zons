"use client"
import { FaHome, FaMoneyBillWave, FaWallet } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function FooterNav() {
const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.footer
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : 100 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-300 p-2 rounded-full shadow-md z-50"
    >
      <div className="flex items-center justify-center gap-3">
        <button className="flex items-center justify-center text-xl gap-1.5 p-2.5 bg-[#FF1A6C] text-white rounded-full hover:bg-red-600 transition">
          <FaHome className="text-white" />
          <span className="text-sm hidden sm:inline">Home</span>
        </button>
        <button className="flex items-center justify-center text-xl gap-1.5 p-2.5 bg-[#FF669D] text-white rounded-full hover:bg-red-600 transition">
          <FaWallet className=" text-white"/>
        </button>
        <button className="flex items-center justify-center text-xl gap-1.5 p-2.5 bg-[#FF669D] text-white rounded-full hover:bg-red-600 transition">
          <FaMoneyBillWave className=" text-white" />
        </button>
        <button className="flex items-center justify-center text-xl gap-1.5 p-2.5 bg-[#FF669D] text-white rounded-full hover:bg-red-600 transition">
          <CgProfile className="text-white" />
        </button>
      </div>
    </motion.footer>
  );
}
