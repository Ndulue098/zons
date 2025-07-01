"use client";
import React from "react";

const social = [
  { name: "Farcaster", color: "#7D5FFF" },      // More vibrant purple
  { name: "TikTok", color: "#000000" },         // Jet black (still punchy)
  { name: "GitHub", color: "#24292E" },         // Deeper GitHub dark
  { name: "Facebook", color: "#1877F2" },       // Already vibrant
  { name: "GitLab", color: "#FC6D26" },         // Slightly more vivid
  { name: "Twitter", color: "#1DA1F2" },        // Already vibrant
  { name: "Gitbucket", color: "#47A3FF" },      // Lighter blue for vibrancy
  { name: "Reddit", color: "#FF5700" },         // Richer orange
  { name: "LinkedIn", color: "#0A66C2" },       // Stronger LinkedIn blue
  { name: "YouTube", color: "#FF0000" },        // Already vibrant
  { name: "Instagram", color: "#E1306C" },      // Vivid magenta tone
  { name: "Dailymotion", color: "#0061FE" },    // More electric blue
  { name: "Tumblr", color: "#35465C" },         // Slightly brighter dark blue
  { name: "Pinterest", color: "#E60023" },      // Already strong
  { name: "Figma", color: "#F24E1E" },          // Already vibrant
  { name: "Threads", color: "#1C1C1C" },        // Slightly lighter black
  { name: "Twitch", color: "#A970FF" },         // Brighter purple
  { name: "Bluesky", color: "#00BFFF" },        // Bright sky blue
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
            className="px-4 py-2 rounded-full text-white font-medium text-sm"
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