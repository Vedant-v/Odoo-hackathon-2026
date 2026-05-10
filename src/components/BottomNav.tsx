"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mobileNavItems = [
  { href: "/dashboard", label: "Home", icon: "home" },
  { href: "/trips", label: "Trips", icon: "map" },
  { href: "/discovery", label: "Discover", icon: "search" },
  { href: "/budget", label: "Budget", icon: "account_balance_wallet" },
  { href: "/settings", label: "Menu", icon: "more_horiz" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 md:hidden bg-surface border-t border-outline-variant shadow-lg rounded-t-2xl">
      {mobileNavItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center gap-1 ${
              isActive ? "text-primary font-bold" : "text-on-surface-variant"
            }`}
          >
            <span className={`material-symbols-outlined text-[24px] ${isActive ? "filled" : ""}`}>{item.icon}</span>
            <span className="typ-label-sm">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
