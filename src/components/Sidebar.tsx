"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "dashboard" },
  { href: "/trips", label: "My Trips", icon: "explore_nearby" },
  { href: "/discovery", label: "Discovery", icon: "explore" },
  { href: "/budget", label: "Budget", icon: "payments" },
  { href: "/checklist", label: "Checklist", icon: "checklist" },
  { href: "/journal", label: "Journal", icon: "menu_book" },
];

const bottomItems = [
  { href: "/dashboard", label: "Profile", icon: "account_circle" },
  { href: "/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  return (
    <aside className="hidden md:flex flex-col py-6 px-4 h-screen w-64 bg-surface border-r border-outline-variant sticky top-0 shrink-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-10 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary text-[18px]">explore_nearby</span>
        </div>
        <div>
          <h1 className="typ-headline-sm text-primary leading-tight font-bold">Traveloop</h1>
          <p className="typ-label-sm text-on-surface-variant uppercase tracking-tighter">Quiet Concierge</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto thin-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold bg-surface-container-low border-r-2 border-primary"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
              }`}
            >
              <span className={`material-symbols-outlined ${isActive ? "filled" : ""}`}>{item.icon}</span>
              <span className="typ-label-md">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 border-t border-outline-variant space-y-1">
        <Link
          href="/trips/new"
          className="w-full mb-6 flex items-center justify-center gap-2 bg-primary text-on-primary py-3 rounded-xl typ-label-md active:scale-95 transition-all font-bold"
        >
          <span className="material-symbols-outlined">add</span>
          New Trip
        </Link>
        {bottomItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors duration-200 ${
                isActive
                  ? "text-primary font-bold bg-surface-container-low"
                  : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="typ-label-md">{item.label}</span>
            </Link>
          );
        })}
        <button
          onClick={logout}
          className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:text-error hover:bg-error-container/30 transition-colors duration-200 w-full text-left"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="typ-label-md">Logout</span>
        </button>
      </div>
    </aside>
  );
}
