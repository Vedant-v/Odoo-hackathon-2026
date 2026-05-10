"use client";

import TopNav from "@/components/TopNav";
import { budgetData } from "@/lib/data";

export default function BudgetPage() {
  const pct = Math.round((budgetData.totalSpent / budgetData.totalBudget) * 100);

  return (
    <>
      <TopNav title="Budget Analysis" />
      <div className="px-4 md:px-16 py-10 max-w-screen-xl mx-auto w-full space-y-16">
        {/* Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 p-8 rounded-xl border border-outline-variant bg-white shadow-sm">
            <div className="flex justify-between items-end mb-10">
              <div>
                <p className="typ-label-md text-on-surface-variant uppercase tracking-wider mb-2 font-bold">{budgetData.tripName}</p>
                <h3 className="typ-display text-primary">${budgetData.totalSpent.toLocaleString()}</h3>
                <p className="typ-body-sm text-on-surface-variant mt-1">Total Spent of ${budgetData.totalBudget.toLocaleString()} budget</p>
              </div>
              <div className="text-right">
                <span className="typ-headline-sm text-primary font-bold">{pct}%</span>
                <p className="typ-label-sm text-on-surface-variant">Utilized</p>
              </div>
            </div>
            <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: `${pct}%` }} />
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-outline-variant">
              <div><p className="typ-label-sm text-on-surface-variant mb-2 uppercase tracking-tighter">Remaining</p><p className="typ-headline-sm text-primary font-bold">${budgetData.remaining.toLocaleString()}</p></div>
              <div><p className="typ-label-sm text-on-surface-variant mb-2 uppercase tracking-tighter">Daily Avg</p><p className="typ-headline-sm text-primary font-bold">${budgetData.dailyAvg}</p></div>
              <div><p className="typ-label-sm text-on-surface-variant mb-2 uppercase tracking-tighter">Days Left</p><p className="typ-headline-sm text-primary font-bold">{budgetData.daysLeft} <span className="typ-label-sm font-normal text-on-surface-variant">/ {budgetData.totalDays}</span></p></div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-xl border border-[#F59E0B]/20 bg-[#FFFBEB] flex gap-4 items-start shadow-sm">
              <span className="material-symbols-outlined text-[#D97706] text-[24px]">warning</span>
              <div>
                <p className="typ-label-md text-[#B45309] font-bold uppercase tracking-wide">Spending Alert</p>
                <p className="typ-body-sm text-[#D97706]/80 mt-2">Food expenses are 12% above daily projection.</p>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-outline-variant bg-surface-container-low shadow-sm">
              <div className="flex items-center gap-2 text-primary mb-2">
                <span className="material-symbols-outlined text-[20px]">trending_up</span>
                <span className="typ-label-md font-bold uppercase tracking-wide">Projection</span>
              </div>
              <p className="typ-body-sm text-on-surface-variant">On current trajectory, you will finish $120 under budget.</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section>
          <h4 className="typ-headline-md text-primary mb-8 font-bold">Category Breakdown</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {budgetData.categories.map(cat => (
              <div key={cat.name} className="p-6 rounded-xl border border-outline-variant hover:bg-white hover:shadow-md transition-all bg-white">
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-surface-container rounded-lg"><span className="material-symbols-outlined text-[20px]">{cat.icon}</span></div>
                  <span className="typ-label-md text-primary font-bold">{cat.name}</span>
                </div>
                <h5 className="typ-headline-sm text-primary font-bold">${cat.amount.toLocaleString()}</h5>
                <div className="mt-4 h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${cat.overBudget ? "bg-[#B45309]/60" : "bg-primary/40"}`} style={{ width: `${Math.min(cat.percent, 100)}%` }} />
                </div>
                <p className={`mt-2 typ-label-sm font-bold ${cat.overBudget ? "text-[#B45309]" : "text-on-surface-variant"}`}>
                  {cat.overBudget ? `Over by ${cat.percent - 100}%` : `${cat.percent}% of category`}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Expenses */}
        <section className="pb-20">
          <h4 className="typ-headline-md text-primary mb-8 font-bold">Recent Expenses</h4>
          <div className="overflow-x-auto rounded-xl border border-outline-variant shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-outline-variant bg-surface-container-low">
                  <th className="px-6 py-4 typ-label-md text-on-surface-variant uppercase tracking-wider font-bold">Date</th>
                  <th className="px-6 py-4 typ-label-md text-on-surface-variant uppercase tracking-wider font-bold">Description</th>
                  <th className="px-6 py-4 typ-label-md text-on-surface-variant uppercase tracking-wider font-bold">Category</th>
                  <th className="px-6 py-4 typ-label-md text-on-surface-variant uppercase tracking-wider font-bold text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant">
                {budgetData.recentExpenses.map((exp, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-6 typ-body-sm text-on-surface-variant">{exp.date}</td>
                    <td className="px-6 py-6 typ-label-md text-primary font-bold">{exp.description}</td>
                    <td className="px-6 py-6"><span className="inline-flex items-center px-4 py-1 rounded-full bg-surface-container text-typ-label-sm font-bold text-on-surface-variant uppercase tracking-tighter text-[11px]">{exp.category}</span></td>
                    <td className="px-6 py-6 typ-headline-sm text-primary text-right font-bold">${exp.amount.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}
