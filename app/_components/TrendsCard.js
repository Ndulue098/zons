"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function TrendsCard() {
  return (
    <div
      // drag="x"
      // dragConstraints={{ left: -200, right: 0 }}
      // dragElastic={0.2}
      // dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="flex gap-4 overflow-x-auto md:mx-4 mx-2 py-2 cursor-grab no-scrollbar active:cursor-grabbing"
    >
      {/* Example card — you can map over real data */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="min-w-[12rem]  p-4  rounded-xl border-[1px] border-[#FF1A6C] flex-shrink-0"
          whileTap={{ scale: 0.98 }} 
        >
          <h3 className="text-sm font-semibold mb-1 text-gray-800">
            New Markets – 12
          </h3>

          <Image
            src="/img.jpg"
            alt="Trending market preview"
            width={100}
            height={60}
            className="w-full h-auto rounded-lg my-2 object-cover"
          />

          <div className="text-xs text-gray-700 mb-2 space-y-0.5">
            <p>$3.5M TVT</p>
            <p>1k Live Markets</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-lg font-bold">Bluesky</p>
            <div className="w-4 h-4 rounded-full bg-[#34A853]" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
