"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLayout } from "@/context/ProfileContext";
import { cn } from "@/lib/utils";
import {
  ArrowBigLeftDash,
  Menu,
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
import Image from "next/image";

const navItems = [
  { label: "Account", href: "/profile", icon: User },
  {
    label: "Security & Authentication",
    href: "/profile/security-authentication",
    icon: Shield,
  },
  { label: "Wallet & Payment", href: "/profile/wallet-payment", icon: Wallet },
  { label: "Preferences", href: "/profile/preference", icon: Sliders },
  { label: "Logout", href: "#", icon: LogOut },
];

export default function Nav() {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useLayout();
  const [isMobile, setIsMobile] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      const isSmall = window.innerWidth < 768; // Tailwind md
      setIsMobile(isSmall);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-collapse for desktop view
  useEffect(() => {
    if (!isMobile) {
      setCollapsed(false);
      setShowDrawer(false);
    } else {
      setCollapsed(true);
    }
  }, [isMobile, setCollapsed]);

  // Mobile drawer close on nav click
  const handleNavClick = () => {
    if (isMobile) setShowDrawer(false);
  };

  return (
    <>
      {/* Mobile top nav toggle */}
      {isMobile && (
        <div className="p-3 flex items-end justify-between ">
          
          <div onClick={() => setShowDrawer(true)}>
            <Menu size={30} />
          </div>
          <div className="">
            <Image
              src="/zons.png"
              alt="Zons logo"
              width={100}
              height={60}
              className="object-contain mx-auto "
            />
          </div>
        </div>
      )}

      {/* Main nav sidebar */}
      <aside
        className={cn(
          "bg-white min-h-screen z-10 border border-zinc-200 rounded-r-xl  z-50 transition-all duration-300",
          isMobile
            ? cn(
                "fixed top-0 left-0 h-full w-64 p-3 py-12",
                showDrawer ? "translate-x-0" : "-translate-x-full"
              )
            : collapsed
            ? "w-16 p-4 "
            : " p-4"
        )}
      >
        {!isMobile&&<div className="">
            <Image
              src="/zons.png"
              alt="Zons logo"
              width={100}
              height={60}
              className="object-contain mx-auto mb-10"
            />
          </div>}
        <div className="flex items-center justify-between mb-4">
          {!isMobile && (
            <Button
              variant="ghost"
              onClick={() => setCollapsed(!collapsed)}
              className="flex items-center justify-start w-full gap-2 text-sm font-medium text-gray-700 hover:bg-zinc-100"
            >
              <ArrowBigLeftDash
                className={cn(
                  "transition-transform",
                  collapsed ? "rotate-180" : ""
                )}
                size={20}
              />
              {!collapsed && <span className="">Settings</span>}
            </Button>
          )}

          {isMobile && (
            <Button
              variant="ghost"
              onClick={() => setShowDrawer(false)}
              className="flex items-center justify-start w-full text-gray-700 hover:bg-zinc-100"
            >
              <ArrowBigLeftDash size={20} />
              <span>Settings</span>
            </Button>
          )}
        </div>
        <nav>
          <ul className="space-y-2 ">
            {navItems.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <TooltipProvider>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger asChild>
                      <Link
                        href={href}
                        onClick={handleNavClick}
                        className={cn(
                          "flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                          pathname === href
                            ? "bg-[#FF1A6C] text-white"
                            : "text-gray-700 hover:bg-zinc-100",
                          collapsed && !isMobile ? "justify-center" : " gap-3"
                        )}
                      >
                        <Icon size={18} className="shrink-0 " />
                        {!collapsed && <span>{label}</span>}
                        {showDrawer && isMobile && (
                          <span className=" truncate">{label}</span>
                        )}
                      </Link>
                    </TooltipTrigger>
                    {collapsed && !isMobile && (
                      <>
                        <TooltipContent side="right">{label}</TooltipContent>
                      </>
                    )}
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Backdrop for mobile drawer */}
      {isMobile && showDrawer && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShowDrawer(false)}
        />
      )}
    </>
  );
}
