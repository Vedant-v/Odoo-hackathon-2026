"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (login(email, password)) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials. Use demo@traveloop.com / demo1234");
    }
  };

  return (
    <div className="min-h-screen flex bg-surface">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex flex-col justify-between w-1/2 bg-primary-container p-16 relative overflow-hidden">
        <div>
          <h1 className="typ-display text-on-primary leading-tight">Traveloop</h1>
          <p className="typ-body-lg text-on-primary/70 mt-6 max-w-md">
            Your quiet concierge for crafting unforgettable journeys. Plan, explore, and document your travels with intention.
          </p>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-on-primary/60">
            <span className="material-symbols-outlined">verified</span>
            <span className="typ-body-md">Minimalist trip planning</span>
          </div>
          <div className="flex items-center gap-4 text-on-primary/60">
            <span className="material-symbols-outlined">payments</span>
            <span className="typ-body-md">Smart budget tracking</span>
          </div>
          <div className="flex items-center gap-4 text-on-primary/60">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="typ-body-md">Beautiful travel journaling</span>
          </div>
        </div>
        {/* Abstract decorative circles */}
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-on-primary/10" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full border border-on-primary/10" />
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-16">
        <div className="w-full max-w-md space-y-10">
          <div className="lg:hidden mb-10">
            <h1 className="typ-display text-primary">Traveloop</h1>
            <p className="typ-body-md text-on-surface-variant mt-1">Quiet Concierge</p>
          </div>

          <div>
            <h2 className="typ-headline-lg text-primary mb-2">
              {isSignUp ? "Create Account" : "Welcome back"}
            </h2>
            <p className="typ-body-md text-on-surface-variant">
              {isSignUp
                ? "Start planning your next adventure"
                : "Sign in to continue your journey"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <div className="space-y-2">
                <label className="typ-label-sm text-on-surface-variant uppercase block">Full Name</label>
                <input
                  type="text"
                  placeholder="Elena Rodriguez"
                  className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary transition-all typ-body-md outline-none"
                />
              </div>
            )}
            <div className="space-y-2">
              <label className="typ-label-sm text-on-surface-variant uppercase block">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="demo@traveloop.com"
                className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary transition-all typ-body-md outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="typ-label-sm text-on-surface-variant uppercase block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-transparent border border-outline-variant rounded-lg px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary transition-all typ-body-md outline-none"
                required
              />
            </div>

            {error && (
              <div className="p-4 bg-error-container rounded-lg">
                <p className="typ-body-sm text-on-error-container">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-lg typ-label-md active:scale-[0.98] transition-all hover:opacity-90 font-bold"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

          <div className="text-center">
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="typ-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
            </button>
          </div>

          <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant">
            <p className="typ-label-sm text-on-surface-variant mb-2 font-bold tracking-wider">DEMO CREDENTIALS</p>
            <p className="typ-body-sm text-on-surface">Email: <span className="font-bold">demo@traveloop.com</span></p>
            <p className="typ-body-sm text-on-surface">Password: <span className="font-bold">demo1234</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}
