"use client";

import TopNav from "@/components/TopNav";
import { itineraryDays } from "@/lib/data";

export default function ItineraryPage() {
  return (
    <>
      <TopNav title="Itinerary Builder" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="typ-headline-lg text-primary font-bold">Tokyo Spring Adventure</h1>
            <p className="typ-body-md text-on-surface-variant mt-2">April 12 — April 24, 2024</p>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low bg-white"><span className="material-symbols-outlined">filter_list</span></button>
            <button className="p-2 rounded-lg border border-outline-variant hover:bg-surface-container-low bg-white"><span className="material-symbols-outlined">more_vert</span></button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20">
          <div className="lg:col-span-8 space-y-10">
            {itineraryDays.map(day => (
              <section key={day.day} className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 timeline-line" />
                <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary" />
                <div className="mb-6">
                  <h2 className="typ-headline-sm text-primary font-bold mb-1">Day {day.day}: {day.title}</h2>
                  <p className="typ-label-sm text-on-surface-variant uppercase tracking-widest">{day.date}</p>
                </div>
                <div className="space-y-4">
                  {day.activities.map((a, i) => (
                    <div key={i} className="group flex items-start gap-4 p-4 bg-white rounded-xl border border-outline-variant/30 hover:border-primary transition-all cursor-grab shadow-sm">
                      <span className="material-symbols-outlined text-outline-variant opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                      <div className="flex-1">
                        <div className="flex justify-between"><h3 className="typ-label-md text-primary font-bold">{a.title}</h3><span className="typ-label-sm text-on-surface-variant">{a.time}</span></div>
                        <p className="typ-body-sm text-on-surface-variant mt-2">{a.description}</p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-4 border border-dashed border-outline-variant rounded-xl flex items-center justify-center gap-2 text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all bg-surface-container-lowest">
                    <span className="material-symbols-outlined">add</span><span className="typ-label-md font-bold">Add Activity</span>
                  </button>
                </div>
              </section>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="p-6 border border-outline-variant rounded-xl space-y-6 bg-white shadow-sm">
                <h3 className="typ-headline-sm text-primary font-bold">Trip Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4"><span className="material-symbols-outlined text-outline">calendar_today</span><div><p className="typ-label-sm text-on-surface-variant uppercase tracking-tighter">DATES</p><p className="typ-body-md font-medium">Apr 12 - Apr 24 (12 Days)</p></div></div>
                  <div className="flex items-center gap-4"><span className="material-symbols-outlined text-outline">payments</span><div><p className="typ-label-sm text-on-surface-variant uppercase tracking-tighter">ESTIMATED BUDGET</p><p className="typ-body-md font-medium">$4,250.00</p></div></div>
                  <div className="flex items-center gap-4"><span className="material-symbols-outlined text-outline">thermostat</span><div><p className="typ-label-sm text-on-surface-variant uppercase tracking-tighter">WEATHER (TOKYO)</p><p className="typ-body-md font-medium">18°C — Partly Cloudy</p></div></div>
                </div>
              </div>
              <div className="p-6 border border-outline-variant rounded-xl bg-surface-container-low/30">
                <h3 className="typ-label-md text-primary font-bold mb-4 uppercase tracking-widest">Quick Notes</h3>
                <textarea className="w-full h-24 bg-transparent border-none p-0 typ-body-sm focus:ring-0 text-on-surface-variant resize-none outline-none" placeholder="Don't forget to exchange Yen at the airport..." />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
