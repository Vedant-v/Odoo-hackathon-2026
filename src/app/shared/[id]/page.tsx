"use client";

import Link from "next/link";

export default function SharedTripPage() {
  return (
    <div className="bg-surface min-h-screen">
      <header className="flex justify-between items-center px-[16px] md:px-[64px] h-16 sticky top-0 z-40 bg-surface/80 backdrop-blur-md">
        <div className="flex items-center gap-sm">
          <span className="text-headline-sm text-primary">Traveloop</span>
          <span className="hidden md:inline-block h-4 w-px bg-outline-variant mx-xs" />
          <span className="hidden md:inline-block text-label-md text-on-surface-variant">Quiet Concierge</span>
        </div>
        <div className="flex items-center gap-md">
          <button className="bg-primary text-on-primary px-lg py-sm rounded-full text-label-md">Copy Trip</button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-[16px] md:px-[64px] py-xl">
        {/* Hero */}
        <section className="mb-xl">
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-lg">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsIhy4W1edJyWY0NP-MLR6WpiFu-hxOMlYkuHAWKx125NevayB5WU_DQcp4rlIze5FgVw_7_D1wDo49TvaNMGQUAE6YAG12p7JWNDtSpiaf_hc0rdPVpeXRjT6xn6lD_ouUXwtHdwqB8033fcEIPoSHolqMOXxXWozTU-xS_2nqNq2rCkDplKlsUNy9JfifAxD8vCSGymVG81zCev7RFYltAD9EMnvEjbtvHrNq3-4Jz57P5cyjP9zuep7HveGWr8HcVX3MQqcVJyI" alt="Paris" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-lg">
              <span className="text-label-sm text-white/80 tracking-widest uppercase mb-xs">7 Days in Paris &amp; Lyon</span>
              <h1 className="text-display text-white mb-sm">Autumn in the Heart of France</h1>
              <div className="flex items-center gap-md text-white/90 text-label-md">
                <div className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">calendar_today</span>Oct 12 — Oct 18</div>
                <div className="flex items-center gap-xs"><span className="material-symbols-outlined text-[18px]">group</span>2 Travelers</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-xl items-start">
            <div className="md:col-span-2">
              <p className="text-body-lg text-on-surface-variant leading-relaxed">A curated journey through the sensory delights of France. From the tucked-away cafes of Le Marais to the silk-weaving workshops of Lyon.</p>
            </div>
            <div className="bg-surface-container-low p-lg rounded-xl border border-outline-variant/30">
              <h3 className="text-headline-sm mb-md">Trip Overview</h3>
              <ul className="space-y-md">
                <li className="flex justify-between text-label-md"><span className="text-on-surface-variant">Estimated Budget</span><span className="text-primary">€4,200</span></li>
                <li className="flex justify-between text-label-md"><span className="text-on-surface-variant">Pace</span><span className="text-primary">Relaxed</span></li>
                <li className="flex justify-between text-label-md"><span className="text-on-surface-variant">Main Mode</span><span className="text-primary">TGV First Class</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Itinerary */}
        <section className="max-w-3xl">
          <h2 className="text-headline-lg mb-xl">Itinerary</h2>
          <div className="space-y-xl">
            {[
              { day: 1, date: "Oct 12", title: "Arrival & Le Marais", items: [
                { time: "14:00", type: "Check-in", name: "Hotel Pavillon de la Reine", desc: "A hidden gem on Place des Vosges." },
                { time: "16:30", type: "Activity", name: "Coffee at Boot Café", desc: "The smallest cafe in Paris." },
              ]},
              { day: 2, date: "Oct 13", title: "Artistic Immersion", items: [
                { time: "10:00", type: "Museum", name: "Musée de l'Orangerie", desc: "Private viewing of Monet's Water Lilies." },
              ]},
            ].map(day => (
              <div key={day.day} className="relative itinerary-line pb-xl">
                <div className="flex items-start gap-lg">
                  <div className="z-10 bg-primary w-2 h-2 rounded-full mt-2 ring-4 ring-surface" />
                  <div className="flex-1">
                    <div className="mb-lg">
                      <span className="text-label-sm text-on-surface-variant tracking-wider uppercase">Day {day.day} — {day.date}</span>
                      <h3 className="text-headline-md mt-xs">{day.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-md">
                      {day.items.map((item, i) => (
                        <div key={i} className="group bg-white border border-outline-variant rounded-xl p-md hover:bg-surface-container-low transition-colors">
                          <span className="text-label-sm text-secondary uppercase mb-xs block">{item.type} • {item.time}</span>
                          <h4 className="text-headline-sm text-primary mb-1">{item.name}</h4>
                          <p className="text-on-surface-variant text-body-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mt-xl py-xl bg-surface border-t border-outline-variant">
        <div className="max-w-[1200px] mx-auto px-[16px] md:px-[64px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-lg">
            <div className="text-center md:text-left">
              <h4 className="text-headline-sm mb-xs">Loved this trip?</h4>
              <p className="text-on-surface-variant text-body-sm">Copy this entire itinerary to your own Traveloop account.</p>
            </div>
            <Link href="/login" className="bg-primary text-on-primary px-xl py-md rounded-full text-label-md flex items-center gap-sm">
              <span className="material-symbols-outlined">content_copy</span>Copy to My Trips
            </Link>
          </div>
          <div className="mt-xl pt-lg border-t border-outline-variant/30 flex justify-between items-center text-on-surface-variant text-label-sm">
            <span>Created with Traveloop</span>
            <div className="flex gap-md"><a className="hover:text-primary" href="#">Privacy</a><a className="hover:text-primary" href="#">Terms</a></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
