"use client";
import React from "react";

const social = [
  { name: "Farcaster", color: "#5D3FD3" },
  { name: "TikTok", color: "#010101" },
  { name: "GitHub", color: "#181717" },
  { name: "Facebook", color: "#1877F2" },
  { name: "GitLab", color: "#FC6D26" },
  { name: "Twitter", color: "#1DA1F2" },
  { name: "Gitbucket", color: "#4183C4" },
  { name: "Reddit", color: "#FF4500" },
  { name: "LinkedIn", color: "#0077B5" },
  { name: "YouTube", color: "#FF0000" },
  { name: "Instagram", color: "#C13584" },
  { name: "Dailymotion", color: "#0066DC" },
  { name: "Tumblr", color: "#36465D" },
  { name: "Pinterest", color: "#E60023" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Threads", color: "#000000" },
  { name: "Twitch", color: "#9146FF" },
  { name: "Bluesky", color: "#0288D1" },
];

function MarqueeRow({ reverse = false, duration = "20s" }) {
  const items = [...social, ...social]; // Duplicate for seamless scroll
  return (
    <div className="relative overflow-hidden w-full  whitespace-nowrap">
      <div className="fade-mask-left" />
      <div className="fade-mask-right" />

      
      <div
        className={`inline-flex gap-6 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: duration }}
      >
        {items.map((item, index) => (
          <span
            key={index}
            className="px-4 py-2 rounded text-white text-sm"
            style={{ backgroundColor: item.color }}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SocialMediaMarquee() {
  return (
    <div className="flex flex-col gap-4 ">
      <MarqueeRow reverse={false} duration="25s" />
      <MarqueeRow reverse={true} duration="30s" />
      <MarqueeRow reverse={false} duration="35s" />
    </div>
  );
}


/* 

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const baseStyles = "px-5 py-2.5 text-base font-medium rounded-full transition";
  
  const variants = {
    primary: "bg-red-500 text-white hover:bg-red-600",
    secondary: "bg-yellow-600 text-black hover:bg-yellow-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    ghost: "text-gray-600 hover:bg-gray-200",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}






*/