"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TopNav from "@/components/TopNav";

export default function CreateTripPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  return (
    <>
      <TopNav title="Create New Trip" />
      <div className="px-4 md:px-16 py-10 max-w-2xl mx-auto w-full space-y-10">
        <div>
          <h2 className="typ-display text-primary">Plan Your Trip</h2>
          <p className="typ-body-md text-on-surface-variant mt-2">Tell us about your next adventure.</p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2 flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center typ-label-md font-bold ${
                s <= step ? "bg-primary text-on-primary" : "bg-surface-container text-on-surface-variant"
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`flex-1 h-px ${s < step ? "bg-primary" : "bg-outline-variant"}`} />}
            </div>
          ))}
        </div>

        <div className="border border-outline-variant rounded-xl p-6 space-y-6 bg-white shadow-sm">
          {step === 1 && (
            <>
              <h3 className="typ-headline-sm text-primary font-bold">Destination Details</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="typ-label-sm text-on-surface-variant uppercase block">Trip Name</label>
                  <input type="text" placeholder="e.g., Tokyo Spring Adventure" className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary transition-all typ-body-md outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="typ-label-sm text-on-surface-variant uppercase block">Destination</label>
                  <input type="text" placeholder="e.g., Tokyo, Japan" className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary focus:border-primary transition-all typ-body-md outline-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="typ-label-sm text-on-surface-variant uppercase block">Start Date</label>
                    <input type="date" className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 typ-body-md outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="typ-label-sm text-on-surface-variant uppercase block">End Date</label>
                    <input type="date" className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 typ-body-md outline-none" />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="typ-headline-sm text-primary font-bold">Travel Style</h3>
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="typ-label-sm text-on-surface-variant uppercase block">Budget</label>
                  <input type="text" placeholder="e.g., $4,000" className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 typ-body-md outline-none" />
                </div>
                <div className="space-y-1">
                  <label className="typ-label-sm text-on-surface-variant uppercase block">Travel Pace</label>
                  <div className="flex gap-2">
                    {["Relaxed", "Balanced", "Active"].map((p) => (
                      <button key={p} className="flex-1 py-2 border border-outline-variant rounded-lg typ-label-md hover:border-primary hover:text-primary transition-all bg-surface-container-lowest">
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="typ-label-sm text-on-surface-variant uppercase block">Number of Travelers</label>
                  <input type="number" defaultValue={2} min={1} className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-2 typ-body-md outline-none" />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="typ-headline-sm text-primary font-bold">Review & Create</h3>
              <p className="typ-body-md text-on-surface-variant">
                Your trip is ready to be created! You can add detailed itinerary items, activities, and journal entries after creation.
              </p>
              <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant space-y-2">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="typ-body-md">Destination & dates configured</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="typ-body-md">Budget & travel style set</span>
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between pt-6 border-t border-outline-variant">
            <button
              onClick={() => step > 1 ? setStep(step - 1) : router.back()}
              className="px-6 py-2 typ-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              {step > 1 ? "Back" : "Cancel"}
            </button>
            <button
              onClick={() => step < 3 ? setStep(step + 1) : router.push("/dashboard")}
              className="px-8 py-3 bg-primary text-on-primary rounded-lg typ-label-md active:scale-95 transition-all font-bold shadow-sm"
            >
              {step < 3 ? "Continue" : "Create Trip"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
