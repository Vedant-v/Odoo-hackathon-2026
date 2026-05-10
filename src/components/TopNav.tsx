"use client";

import Link from "next/link";
import { useAuth } from "@/components/AuthProvider";

export default function TopNav({ title }: { title?: string }) {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center px-4 md:px-16 h-16 w-full sticky top-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30">
      <div className="md:hidden flex items-center">
        <h2 className="typ-headline-sm text-primary font-bold">Traveloop</h2>
      </div>
      <div className="hidden md:block">
        <h2 className="typ-headline-sm text-on-surface font-semibold">{title || "Dashboard"}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <Link
          href="/trips/new"
          className="hidden sm:flex items-center gap-2 px-6 py-2 bg-primary text-on-primary rounded-full typ-label-md hover:opacity-90 active:scale-95 transition-all font-bold"
        >
          Create New Trip
        </Link>
        <Link href="/settings">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
            {user?.avatar && (
              <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}
