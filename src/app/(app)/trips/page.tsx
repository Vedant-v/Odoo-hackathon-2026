"use client";

import { useState } from "react";
import Link from "next/link";
import TopNav from "@/components/TopNav";
import { trips } from "@/lib/data";

const filters = ["All Trips", "Upcoming", "Planning", "Completed"];

export default function TripsPage() {
  const [activeFilter, setActiveFilter] = useState("All Trips");

  const filtered = trips.filter((t) => {
    if (activeFilter === "All Trips") return true;
    return t.status === activeFilter.toLowerCase();
  });

  return (
    <>
      <TopNav title="My Trips" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="typ-display text-primary">My Trips</h2>
            <p className="typ-body-md text-on-surface-variant mt-2">
              {trips.length} trips planned — {trips.filter((t) => t.status === "upcoming").length} upcoming
            </p>
          </div>
          <Link href="/trips/new" className="flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg typ-label-md active:scale-95 transition-all font-bold">
            <span className="material-symbols-outlined text-[18px]">add</span>
            Create New Trip
          </Link>
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full typ-label-md transition-all ${
                activeFilter === f
                  ? "bg-primary text-on-primary font-bold shadow-sm"
                  : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Trip Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {filtered.map((trip) => (
            <Link key={trip.id} href={`/trips/${trip.id}`} className="group border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-all bg-white">
              <div className="h-52 overflow-hidden relative">
                <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full typ-label-sm font-bold ${
                  trip.status === "upcoming" ? "bg-primary text-on-primary" :
                  trip.status === "planning" ? "bg-secondary-container text-on-secondary-container" :
                  "bg-surface-container text-on-surface-variant"
                }`}>
                  {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="typ-headline-sm text-primary font-bold">{trip.title}</h3>
                <p className="typ-body-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">location_on</span>
                  {trip.destination}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant">
                  <div className="flex items-center gap-1 typ-label-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                    {trip.duration}
                  </div>
                  <span className="typ-label-md text-primary font-bold">{trip.budget}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {Array.from({ length: trip.collaborators }).map((_, i) => (
                      <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-surface-container-high" />
                    ))}
                  </div>
                  <span className="typ-label-sm text-on-surface-variant">{trip.collaborators} travelers</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
