"use client";

import { useState } from "react";
import TopNav from "@/components/TopNav";
import { checklistData } from "@/lib/data";

export default function ChecklistPage() {
  const [sections, setSections] = useState(checklistData.sections);

  const toggleItem = (sIdx: number, iIdx: number) => {
    setSections(prev => prev.map((s, si) => si === sIdx ? { ...s, items: s.items.map((it, ii) => ii === iIdx ? { ...it, checked: !it.checked } : it) } : s));
  };

  const totalChecked = sections.reduce((acc, s) => acc + s.items.filter(i => i.checked).length, 0);
  const totalItems = sections.reduce((acc, s) => acc + s.items.length, 0);

  return (
    <>
      <TopNav title="Checklist" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <nav className="flex items-center gap-1 text-on-surface-variant mb-2 uppercase tracking-widest text-[11px] font-bold">
              <span>MY TRIPS</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-primary">ICELAND WINTER EXPEDITION</span>
            </nav>
            <h2 className="typ-display text-primary">Packing Checklist</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20">
          <div className="lg:col-span-8 space-y-10">
            {/* Progress */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <span className="typ-label-md text-primary font-bold uppercase tracking-wider">Preparation Progress</span>
                <span className="typ-label-md text-primary font-bold">{totalChecked} / {totalItems} items</span>
              </div>
              <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all duration-500" style={{ width: `${(totalChecked / totalItems) * 100}%` }} />
              </div>
            </div>

            {/* Sections */}
            {sections.map((section, sIdx) => (
              <section key={section.title} className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <span className="material-symbols-outlined text-primary text-[28px]">{section.icon}</span>
                  <h3 className="typ-headline-sm text-primary font-bold">{section.title}</h3>
                </div>
                <div className="space-y-2">
                  {section.items.map((item, iIdx) => (
                    <label key={iIdx} className="group flex items-center gap-4 p-4 bg-white hover:bg-surface-container-low rounded-lg transition-all cursor-pointer border border-outline-variant/30 hover:border-primary shadow-sm">
                      <input type="checkbox" checked={item.checked} onChange={() => toggleItem(sIdx, iIdx)} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-0 cursor-pointer" />
                      <div className="flex-1">
                        <p className={`typ-body-md text-primary font-medium ${item.checked ? "line-through opacity-40" : ""}`}>{item.name}</p>
                        {item.note && <p className="typ-body-sm text-on-surface-variant mt-1">{item.note}</p>}
                      </div>
                      {"tag" in item && item.tag && (
                        <span className="px-3 py-1 bg-surface-container-high rounded text-typ-label-sm font-bold text-on-surface-variant uppercase tracking-tighter text-[11px]">{item.tag}</span>
                      )}
                    </label>
                  ))}
                  <div className="flex items-center gap-4 p-4 border-t border-outline-variant mt-4 opacity-60 hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-outline-variant">add</span>
                    <input className="flex-1 bg-transparent border-none focus:ring-0 typ-body-md text-primary placeholder:text-outline-variant p-0 outline-none" placeholder={`Add ${section.title.toLowerCase()} item...`} />
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Sidebar: Templates */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-10">
              <div className="space-y-6">
                <h3 className="typ-headline-sm text-primary font-bold">Reusable Templates</h3>
                <p className="typ-body-sm text-on-surface-variant leading-relaxed">Quickly add categories from your saved travel profiles.</p>
                <div className="space-y-4">
                  {[
                    { icon: "snowing", name: "Winter Expedition", count: 14 },
                    { icon: "beach_access", name: "Tropical Escape", count: 18 },
                    { icon: "laptop_mac", name: "Digital Nomad", count: 9 },
                  ].map(t => (
                    <div key={t.name} className="group p-4 border border-outline-variant rounded-xl hover:border-primary transition-all cursor-pointer bg-white shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary">{t.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="typ-label-md text-primary font-bold">{t.name}</h4>
                          <p className="typ-body-sm text-on-surface-variant">{t.count} items</p>
                        </div>
                        <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">add_circle</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden relative h-56 border border-outline-variant shadow-md">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfGRHCHQiHNMLYnvmukxbErvFoHHGJwOlMztC_Cbu0p4PtHt6F9JQ5vRNk6DkBaNQp-btbIYnbk1kMpvFbpBn_ugr6tT3pXCVRQXA0teBWa5FRzsEl96sKyv8EdXIHDVlcg0h9e4E0kH-tuImH-aiPW2mmD7AVNGT6o9dGBnvN6bVhZn1pnJzGVyuhLcyfg-GXwZWoLABllaTYHx9lbjtcDD5JBmfOPRu-FPpKpi7-FodWTRpRSKpXzg8aL77tl4MfR7MjjnbaW4N" alt="Iceland" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-1 text-white mb-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span className="typ-label-sm font-bold uppercase tracking-wide">Reykjavík, Iceland</span>
                  </div>
                  <p className="text-white/80 typ-body-sm">Departure in 14 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
