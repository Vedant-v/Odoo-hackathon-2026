"use client";

import TopNav from "@/components/TopNav";

export default function JournalPage() {
  return (
    <>
      <TopNav title="Travel Journal" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Editor */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <input className="w-full typ-display text-primary bg-transparent border-none p-0 focus:ring-0 placeholder:text-outline-variant outline-none" placeholder="Title your memory..." type="text" />
              <div className="flex items-center gap-6 py-4 border-y border-outline-variant/30">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                  <span className="typ-label-sm font-bold">APRIL 14, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="typ-label-sm font-bold">BLUE LAGOON, ICELAND</span>
                </div>
              </div>
            </div>
            
            <div className="prose-editor min-h-[500px] typ-body-lg text-primary leading-relaxed">
              <p className="mb-6">The steam rising from the milky blue water against the stark black lava fields was more surreal than any photo could capture. We arrived just as the sun began to dip, casting a long, ethereal golden light over the entire lagoon.</p>
              <div className="grid grid-cols-2 gap-4 my-10">
                <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant shadow-sm"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfGRHCHQiHNMLYnvmukxbErvFoHHGJwOlMztC_Cbu0p4PtHt6F9JQ5vRNk6DkBaNQp-btbIYnbk1kMpvFbpBn_ugr6tT3pXCVRQXA0teBWa5FRzsEl96sKyv8EdXIHDVlcg0h9e4E0kH-tuImH-aiPW2mmD7AVNGT6o9dGBnvN6bVhZn1pnJzGVyuhLcyfg-GXwZWoLABllaTYHx9lbjtcDD5JBmfOPRu-FPpKpi7-FodWTRpRSKpXzg8aL77tl4MfR7MjjnbaW4N" alt="Lagoon" className="w-full h-full object-cover" /></div>
                <div className="aspect-video rounded-xl overflow-hidden border border-outline-variant shadow-sm"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsfGRHCHQiHNMLYnvmukxbErvFoHHGJwOlMztC_Cbu0p4PtHt6F9JQ5vRNk6DkBaNQp-btbIYnbk1kMpvFbpBn_ugr6tT3pXCVRQXA0teBWa5FRzsEl96sKyv8EdXIHDVlcg0h9e4E0kH-tuImH-aiPW2mmD7AVNGT6o9dGBnvN6bVhZn1pnJzGVyuhLcyfg-GXwZWoLABllaTYHx9lbjtcDD5JBmfOPRu-FPpKpi7-FodWTRpRSKpXzg8aL77tl4MfR7MjjnbaW4N" alt="Steamy waters" className="w-full h-full object-cover" /></div>
              </div>
              <p>It felt like being on another planet. The silica mud was smooth, and the warmth of the water was the perfect contrast to the biting Icelandic air...</p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <div className="p-8 border border-outline-variant rounded-xl space-y-8 bg-white shadow-sm">
              <h3 className="typ-headline-sm text-primary font-bold">Journal Tools</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all bg-surface-container-lowest">
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-on-surface-variant">image</span><span className="typ-label-md font-bold">Add Media</span></div>
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all bg-surface-container-lowest">
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-on-surface-variant">mood</span><span className="typ-label-md font-bold">Add Sentiment</span></div>
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-all bg-surface-container-lowest">
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-on-surface-variant">share</span><span className="typ-label-md font-bold">Public View</span></div>
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </button>
              </div>
              <div className="pt-8 border-t border-outline-variant">
                <button className="w-full py-4 bg-primary text-on-primary rounded-xl typ-label-md font-bold active:scale-95 transition-all shadow-sm">Save Entry</button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="typ-headline-sm text-primary font-bold">Recent Entries</h3>
              <div className="space-y-4">
                {[
                  { title: "Northern Lights over Vik", date: "Apr 12" },
                  { title: "The Golden Circle Route", date: "Apr 11" },
                  { title: "Arrival in Reykjavík", date: "Apr 10" },
                ].map(e => (
                  <div key={e.title} className="p-4 border border-outline-variant rounded-xl hover:bg-white hover:shadow-md transition-all cursor-pointer bg-white">
                    <h4 className="typ-label-md text-primary font-bold">{e.title}</h4>
                    <p className="typ-label-sm text-on-surface-variant uppercase tracking-tighter mt-1">{e.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
