"use client";

import Link from "next/link";
import TopNav from "@/components/TopNav";
import { dashboardStats, trips } from "@/lib/data";

export default function DashboardPage() {
  return (
    <>
      <TopNav title="Dashboard" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-10">
        {/* Greeting */}
        <div>
          <h2 className="typ-display text-primary">Good morning, Elena</h2>
          <p className="typ-body-lg text-on-surface-variant mt-2">
            Your next adventure awaits. Here&apos;s your travel overview.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Trips", value: dashboardStats.totalTrips, icon: "luggage" },
            { label: "Upcoming", value: dashboardStats.upcomingTrips, icon: "flight_takeoff" },
            { label: "Countries", value: dashboardStats.countriesVisited, icon: "public" },
            { label: "Total Budget", value: dashboardStats.totalBudget, icon: "payments" },
          ].map((stat) => (
            <div key={stat.label} className="p-6 border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-[20px]">{stat.icon}</span>
                </div>
              </div>
              <p className="typ-headline-md text-primary">{stat.value}</p>
              <p className="typ-label-sm text-on-surface-variant mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Your Trips Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="typ-headline-md text-primary">Your Trips</h3>
            <Link href="/trips" className="typ-label-md text-on-surface-variant hover:text-primary flex items-center gap-1">
              View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                href={`/trips/${trip.id}`}
                className="group border border-outline-variant rounded-xl overflow-hidden hover:shadow-md transition-all bg-white"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-4 right-4 px-3 py-1 rounded-full typ-label-sm ${
                    trip.status === "upcoming" ? "bg-primary text-on-primary" :
                    trip.status === "planning" ? "bg-secondary-container text-on-secondary-container" :
                    "bg-surface-container text-on-surface-variant"
                  }`}>
                    {trip.status.charAt(0).toUpperCase() + trip.status.slice(1)}
                  </span>
                </div>
                <div className="p-6">
                  <h4 className="typ-headline-sm text-primary mb-1">{trip.title}</h4>
                  <p className="typ-body-sm text-on-surface-variant">{trip.destination}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-outline-variant">
                    <span className="typ-label-sm text-on-surface-variant">{trip.dates}</span>
                    <span className="typ-label-md text-primary font-bold">{trip.budget}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
          <Link href="/trips/new" className="p-6 border border-dashed border-outline-variant rounded-xl flex items-center gap-4 hover:bg-surface-container-low hover:border-primary transition-all group">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">add</span>
            </div>
            <div>
              <h4 className="typ-label-md text-primary font-bold">Create New Trip</h4>
              <p className="typ-body-sm text-on-surface-variant">Start planning your next adventure</p>
            </div>
          </Link>
          <Link href="/discovery" className="p-6 border border-outline-variant rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-all group">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined">explore</span>
            </div>
            <div>
              <h4 className="typ-label-md text-primary font-bold">Discover</h4>
              <p className="typ-body-sm text-on-surface-variant">Find inspiration</p>
            </div>
          </Link>
          <Link href="/journal" className="p-6 border border-outline-variant rounded-xl flex items-center gap-4 hover:bg-surface-container-low transition-all group">
            <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center">
              <span className="material-symbols-outlined">menu_book</span>
            </div>
            <div>
              <h4 className="typ-label-md text-primary font-bold">Journal</h4>
              <p className="typ-body-sm text-on-surface-variant">Document memories</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
