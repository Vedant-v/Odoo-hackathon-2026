"use client";

import Link from "next/link";
import TopNav from "@/components/TopNav";
import { trips, itineraryDays } from "@/lib/data";

export default function TripDetailPage() {
  const trip = trips[0];

  return (
    <>
      <TopNav title={trip.title} />
      <div className="px-lg md:px-xl py-xl max-w-screen-xl mx-auto w-full space-y-xl">
        <div className="relative h-[300px] rounded-xl overflow-hidden">
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-lg text-white">
            <h1 className="typ-display leading-tight">{trip.title}</h1>
            <p className="typ-body-md opacity-90 mt-xs">{trip.destination} • {trip.dates}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
          <div className="lg:col-span-8 space-y-xl">
            <div className="flex gap-sm flex-wrap">
              {[
                { href: `/trips/${trip.id}/itinerary`, icon: "view_timeline", label: "Itinerary" },
                { href: "/budget", icon: "payments", label: "Budget" },
                { href: "/checklist", icon: "checklist", label: "Checklist" },
                { href: "/journal", icon: "menu_book", label: "Journal" },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-xs px-md py-sm border border-outline-variant rounded-lg typ-label-md hover:bg-surface-container-low transition-all">
                  <span className="material-symbols-outlined text-[18px]">{l.icon}</span>{l.label}
                </Link>
              ))}
            </div>

            <div>
              <h3 className="typ-headline-md text-primary mb-lg">Itinerary Preview</h3>
              {itineraryDays.map(day => (
                <section key={day.day} className="relative pl-lg mb-xl">
                  <div className="absolute left-0 top-0 bottom-0 timeline-line" />
                  <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary" />
                  <div className="mb-lg">
                    <h4 className="typ-headline-sm text-primary mb-1">Day {day.day}: {day.title}</h4>
                    <p className="typ-label-sm text-on-surface-variant uppercase tracking-widest">{day.date}</p>
                  </div>
                  <div className="space-y-md">
                    {day.activities.map((a, i) => (
                      <div key={i} className="p-md bg-surface-container-low/50 rounded-xl border border-transparent hover:border-outline-variant transition-all">
                        <div className="flex justify-between"><h5 className="typ-label-md text-primary">{a.title}</h5><span className="typ-label-sm text-on-surface-variant">{a.time}</span></div>
                        <p className="typ-body-sm text-on-surface-variant mt-xs">{a.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-lg">
              <div className="p-lg border border-outline-variant rounded-xl space-y-lg bg-surface">
                <h3 className="typ-headline-sm text-primary">Trip Details</h3>
                <div className="space-y-md">
                  {[
                    { icon: "calendar_today", label: "DATES", value: `${trip.dates} (${trip.duration})` },
                    { icon: "payments", label: "BUDGET", value: trip.budget },
                    { icon: "thermostat", label: "WEATHER", value: "18°C — Partly Cloudy" },
                  ].map(d => (
                    <div key={d.label} className="flex items-center gap-md">
                      <span className="material-symbols-outlined text-outline">{d.icon}</span>
                      <div><p className="typ-label-sm text-on-surface-variant">{d.label}</p><p className="typ-body-md font-medium">{d.value}</p></div>
                    </div>
                  ))}
                </div>
                <div className="pt-lg border-t border-outline-variant space-y-sm">
                  <button className="w-full py-md bg-primary text-on-primary rounded-lg typ-label-md">Book Flight &amp; Stay</button>
                  <button className="w-full py-md border border-outline-variant rounded-lg typ-label-md hover:bg-surface-container-low transition-all">Export Itinerary</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
