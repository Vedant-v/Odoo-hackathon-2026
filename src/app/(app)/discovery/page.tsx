"use client";

import TopNav from "@/components/TopNav";
import { discoveryDestinations, cityResults } from "@/lib/data";

const regions = ["Global", "Europe", "Asia", "Americas", "Oceania", "Africa"];

export default function DiscoveryPage() {
  return (
    <>
      <TopNav title="Explore Cities" />
      <div className="px-4 md:px-16 py-10 space-y-16 pb-24 md:pb-10">
        {/* Hero Search */}
        <section className="max-w-4xl mx-auto text-center space-y-10">
          <h3 className="typ-display text-on-surface">Where to next?</h3>
          <div className="relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-outline">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input className="w-full pl-16 pr-6 py-6 bg-white border border-outline-variant rounded-full typ-body-lg focus:outline-none focus:border-primary transition-all shadow-sm group-hover:shadow-md outline-none" placeholder="Search by city, country or region..." type="text" />
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button className="bg-primary text-on-primary px-6 py-3 rounded-full typ-label-md font-bold hover:opacity-90 active:scale-95 transition-all">Search</button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((r, i) => (
              <button key={r} className={`px-4 py-2 rounded-full typ-label-md transition-all ${i === 0 ? "border border-primary text-primary bg-primary/5 font-bold" : "border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary bg-white"}`}>{r}</button>
            ))}
          </div>
        </section>

        {/* Trending */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="typ-headline-md text-on-surface font-bold">Trending Destinations</h4>
            <button className="typ-label-md text-on-surface-variant hover:text-primary flex items-center gap-1">View all <span className="material-symbols-outlined text-[16px]">arrow_forward</span></button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-8 relative group rounded-3xl overflow-hidden cursor-pointer h-80 md:h-full border border-outline-variant/30">
              <img src={discoveryDestinations[0].image} alt={discoveryDestinations[0].name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-10 text-white space-y-2 w-full">
                <span className="bg-white/20 backdrop-blur-md px-4 py-1 rounded-full typ-label-sm font-bold border border-white/30">{discoveryDestinations[0].badge}</span>
                <h5 className="typ-display leading-none">{discoveryDestinations[0].name}</h5>
                <p className="typ-body-md opacity-90">{discoveryDestinations[0].country} • Est. {discoveryDestinations[0].costPerDay} / day</p>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-6 h-full">
              {discoveryDestinations.slice(1).map(d => (
                <div key={d.name} className="flex-1 relative group rounded-3xl overflow-hidden cursor-pointer h-60 md:h-auto border border-outline-variant/30">
                  <img src={d.image} alt={d.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h5 className="typ-headline-sm font-bold">{d.name}</h5>
                    <p className="typ-label-sm opacity-80">{d.country} • {d.costPerDay} / day</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Results */}
        <section className="pb-10">
          <h4 className="typ-headline-sm text-on-surface mb-8 font-bold">Popular Cities</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {cityResults.map(c => (
              <div key={c.name} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-outline-variant/30">
                  <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute bottom-4 left-4"><span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full typ-label-sm text-primary font-bold shadow-sm">{c.costPerDay} / day</span></div>
                </div>
                <div className="space-y-2">
                  <h5 className="typ-headline-sm text-on-surface font-bold">{c.name}</h5>
                  <p className="typ-body-sm text-on-surface-variant">{c.country} • {c.rating} Rating</p>
                  <p className="typ-label-sm text-on-secondary-container bg-secondary-container/30 px-3 py-1 rounded inline-block font-bold">{c.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
