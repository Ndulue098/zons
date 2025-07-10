"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLayout } from "@/context/ProfileContext";
import { cn } from "@/lib/utils";
import {
  ArrowBigLeftDash,
  User,
  Shield,
  Wallet,
  Sliders,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

const navItems = [
  { label: "Account", href: "/profile", icon: User },
  { label: "Security & Authentication", href: "/profile/security-authentication", icon: Shield },
  { label: "Wallet & Payment", href: "/profile/wallet-payment", icon: Wallet },
  { label: "Preferences", href: "/profile/preference", icon: Sliders },
  { label: "Logout", href: "#", icon: LogOut },
];

export default function Nav() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useLayout();
  const [isMobile, setIsMobile] = useState(false);

  // Auto-collapse on mount if screen width <= 768px (md breakpoint)
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 1024; // Tailwind lg = 1024px
      setIsMobile(isSmall);
      setCollapsed(isSmall); // force collapse on medium or below
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapsed]);

  return (
    <aside
      className={cn(
        "bg-white border border-zinc-200 md:m-4 m-2 mr-0 rounded-2xl shadow-sm transition-all duration-300",
        collapsed ? "md:w-16 w-auto px-2 py-4" : "px-4 py-6"
      )}
    >
      <TooltipProvider>
        <Button
          variant="ghost"
          onClick={() => !isMobile && setCollapsed(!collapsed)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-6 hover:bg-zinc-100 w-full justify-start"
          disabled={isMobile}
        >
          <ArrowBigLeftDash
            className={cn("transition-transform", collapsed ? "rotate-180" : "")}
            size={20}
          />
          {!collapsed && <span className="text-sm font-medium">Settings</span>}
        </Button>

        <nav>
          <ul className="space-y-2">
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger asChild>
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center md:justify-start justify-center px-3 py-2 rounded-lg text-sm transition-all font-medium group",
                        pathname === href
                          ? "bg-[#FF1A6C] text-white"
                          : "text-gray-700 hover:bg-zinc-100"
                      )}
                    >
                      <Icon size={18} className="shrink-0 " />
                      {!collapsed && (
                        <span className="ml-3 truncate">{label}</span>
                      )}
                    </Link>
                  </TooltipTrigger>
                  {collapsed && (
                    <TooltipContent side="right" className="text-xs font-medium">
                      {label}
                    </TooltipContent>
                  )}
                </Tooltip>
              </li>
            ))}
          </ul>
        </nav>
      </TooltipProvider>
    </aside>
  );
}
