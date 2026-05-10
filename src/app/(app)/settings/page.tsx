"use client";

import TopNav from "@/components/TopNav";
import { useAuth } from "@/components/AuthProvider";

export default function SettingsPage() {
  const { user } = useAuth();

  return (
    <>
      <TopNav title="Settings" />
      <div className="px-4 md:px-16 py-10 max-w-screen-md mx-auto w-full space-y-16 pb-20">
        <section className="space-y-10">
          <h2 className="typ-display text-primary">Settings</h2>
          
          <div className="space-y-10">
            {/* Profile Section */}
            <div className="space-y-6">
              <h3 className="typ-headline-sm text-primary font-bold">Profile</h3>
              <div className="flex items-center gap-6 p-6 border border-outline-variant rounded-xl bg-white shadow-sm">
                <div className="w-20 h-20 rounded-full overflow-hidden border border-outline-variant bg-surface-container">
                  {user?.avatar && <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />}
                </div>
                <div className="flex-1">
                  <h4 className="typ-headline-sm text-primary font-bold">{user?.name}</h4>
                  <p className="typ-body-md text-on-surface-variant">{user?.email}</p>
                </div>
                <button className="px-6 py-2 border border-outline-variant rounded-lg typ-label-md hover:border-primary hover:text-primary transition-all font-bold">Edit</button>
              </div>
            </div>

            {/* Application Section */}
            <div className="space-y-6">
              <h3 className="typ-headline-sm text-primary font-bold">Preferences</h3>
              <div className="border border-outline-variant rounded-xl divide-y divide-outline-variant bg-white shadow-sm">
                {[
                  { icon: "notifications", title: "Notifications", desc: "Manage your alerts and trip reminders", action: "toggle" },
                  { icon: "dark_mode", title: "Appearance", desc: "Choose between light and dark themes", action: "select" },
                  { icon: "language", title: "Language", desc: "Select your preferred language", action: "select" },
                  { icon: "currency_exchange", title: "Currency", desc: "Set default currency for budgeting", action: "select" },
                ].map(item => (
                  <div key={item.title} className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors cursor-pointer first:rounded-t-xl last:rounded-b-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="typ-label-md text-primary font-bold">{item.title}</h4>
                        <p className="typ-body-sm text-on-surface-variant">{item.desc}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Section */}
            <div className="space-y-6">
              <h3 className="typ-headline-sm text-primary font-bold">Privacy & Security</h3>
              <div className="border border-outline-variant rounded-xl divide-y divide-outline-variant bg-white shadow-sm">
                <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors cursor-pointer rounded-t-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">lock</span>
                    </div>
                    <div>
                      <h4 className="typ-label-md text-primary font-bold">Change Password</h4>
                      <p className="typ-body-sm text-on-surface-variant">Update your account security</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </div>
                <div className="flex items-center justify-between p-6 hover:bg-surface-container-low transition-colors cursor-pointer rounded-b-xl text-error hover:text-error">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-error-container/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-error">delete</span>
                    </div>
                    <div>
                      <h4 className="typ-label-md font-bold">Delete Account</h4>
                      <p className="typ-body-sm opacity-70">Permanently remove all your travel data</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant">chevron_right</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
