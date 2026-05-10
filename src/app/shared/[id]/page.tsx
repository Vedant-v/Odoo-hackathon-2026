"use client";

import { trips, itineraryDays } from "@/lib/data";

export default function SharedTripPage() {
  const trip = trips[0]; // Demo data for shared view

  return (
    <div className="min-h-screen bg-surface">
      {/* Public Header */}
      <header className="h-16 px-4 md:px-16 border-b border-outline-variant bg-white flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">explore_nearby</span>
          </div>
          <h1 className="typ-headline-sm text-primary font-bold">Traveloop</h1>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full typ-label-md font-bold hover:opacity-90 active:scale-95 transition-all">
          Plan Your Own
        </button>
      </header>

      <main className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-16">
        {/* Shared Hero */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl border border-outline-variant/30">
          <img src={trip.image} alt={trip.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 text-white space-y-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-white/70">share</span>
              <span className="typ-label-md font-bold uppercase tracking-widest text-white/70">Publicly Shared Itinerary</span>
            </div>
            <h1 className="typ-display leading-tight">{trip.title}</h1>
            <p className="typ-body-lg opacity-90">{trip.destination} • {trip.dates}</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h3 className="typ-headline-md text-primary mb-10 font-bold border-l-4 border-primary pl-4">Full Itinerary</h3>
              <div className="space-y-12">
                {itineraryDays.map(day => (
                  <div key={day.day} className="relative pl-8">
                    <div className="absolute left-0 top-0 bottom-0 timeline-line" />
                    <div className="absolute left-[-4px] top-1 w-2 h-2 rounded-full bg-primary" />
                    <div className="mb-6">
                      <h4 className="typ-headline-sm text-primary font-bold">Day {day.day}: {day.title}</h4>
                      <p className="typ-label-sm text-on-surface-variant uppercase tracking-widest mt-1">{day.date}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {day.activities.map((a, i) => (
                        <div key={i} className="p-6 bg-white rounded-2xl border border-outline-variant/30 shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <h5 className="typ-label-md text-primary font-bold">{a.title}</h5>
                            <span className="typ-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded">{a.time}</span>
                          </div>
                          <p className="typ-body-sm text-on-surface-variant leading-relaxed">{a.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="p-8 border border-outline-variant rounded-2xl bg-white shadow-lg space-y-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 rounded-full border-4 border-surface-container overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/a/ACg8ocL8Rj-mR_X7fD9_4Bf8Bf9Vf9Vf9Vf9Vf9Vf9Vf9Vf9=s96-c" alt="Elena" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="typ-headline-sm text-primary font-bold">Elena Rodriguez</h4>
                    <p className="typ-body-sm text-on-surface-variant">Traveler & Curator</p>
                  </div>
                </div>
                <div className="space-y-4 pt-4 border-t border-outline-variant">
                  <div className="flex justify-between items-center">
                    <span className="typ-label-md text-on-surface-variant uppercase font-bold tracking-tighter">Status</span>
                    <span className="px-3 py-1 bg-primary text-on-primary rounded-full typ-label-sm font-bold">Completed</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="typ-label-md text-on-surface-variant uppercase font-bold tracking-tighter">Total Spent</span>
                    <span className="typ-headline-sm text-primary font-bold">{trip.budget}</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary rounded-xl typ-label-md font-bold shadow-md hover:opacity-90 transition-all">
                  Copy this Itinerary
                </button>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="py-20 border-t border-outline-variant bg-surface-container-low text-center">
        <p className="typ-body-sm text-on-surface-variant">Built with Traveloop • Essentialism in Motion</p>
      </footer>
    </div>
  );
}
