"use client";
import { useEffect, useState } from "react";
import { X, Check, CheckCircle2, Gift } from "lucide-react";
import { brand, bundleItems } from "@/lib/site";
import PosMockup from "./PosMockup";

const sectors = ["Hospitality", "Retail", "Coffee-shop", "Restaurants", "Bakeries and delis"];

export default function OfferPopup() {
  const [show, setShow] = useState(false);
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const month = new Date().toLocaleString("en-GB", { month: "long" });

  useEffect(() => {
    let seen = false;
    try { seen = sessionStorage.getItem("offerSeen") === "1"; } catch {}
    if (seen) return;
    const t = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setShow(false);
    try { sessionStorage.setItem("offerSeen", "1"); } catch {}
  };

  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4" onClick={close}>
      <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl md:grid-cols-2" onClick={(e) => e.stopPropagation()}>
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 z-10 text-gray-500 hover:text-ink"><X /></button>

        {/* Bundle side */}
        <div className="bg-gradient-to-br from-brand-dark to-brand p-8 text-white">
          <h2 className="text-2xl font-extrabold">Complete POS Bundle</h2>
          <h3 className="mt-1 text-blue-100">With no strings attached</h3>
          <div className="mt-4 inline-block rounded-lg bg-accent px-4 py-2 font-bold">NO MONTHLY FEES · Only {brand.bundlePrice} + VAT</div>
          <div className="my-6 scale-75"><PosMockup /></div>
          <ul className="grid gap-2 text-sm sm:grid-cols-2">
            {bundleItems.map((b) => (
              <li key={b} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{b}</li>
            ))}
          </ul>
        </div>

        {/* Quote form side */}
        <div className="p-8">
          <div className="flex items-center gap-2 text-accent"><Gift className="h-6 w-6" /><h2 className="text-2xl font-extrabold">{month} Offer</h2></div>
          {done ? (
            <div className="flex flex-col items-center gap-3 py-12 text-center">
              <CheckCircle2 className="h-14 w-14 text-green-500" />
              <p className="text-gray-600">Thanks! Your quote request is in — we&apos;ll be in touch soon.</p>
              <button onClick={close} className="btn-brand mt-2">Close</button>
            </div>
          ) : (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => { e.preventDefault(); if (step === 1) setStep(2); else setDone(true); }}
            >
              <div className="mb-2 flex gap-2">
                <span className={`h-1.5 flex-1 rounded-full ${step >= 1 ? "bg-brand" : "bg-gray-200"}`} />
                <span className={`h-1.5 flex-1 rounded-full ${step >= 2 ? "bg-brand" : "bg-gray-200"}`} />
              </div>
              {step === 1 ? (
                <>
                  <label className="block text-sm font-semibold">Which sector do you operate in?</label>
                  <select required defaultValue="" className="input">
                    <option value="" disabled>Please Select</option>
                    {sectors.map((s) => <option key={s}>{s}</option>)}
                  </select>
                  <label className="block text-sm font-semibold">How many systems do you require?</label>
                  <input required type="number" min={1} defaultValue={1} className="input" />
                  <button type="submit" className="btn-brand w-full">Next</button>
                </>
              ) : (
                <>
                  <input required className="input" placeholder="Name" />
                  <input className="input" placeholder="Company Name" />
                  <input required type="email" className="input" placeholder="Email" />
                  <input required type="tel" className="input" placeholder="Phone Number" />
                  <div className="flex gap-3">
                    <button type="button" onClick={() => setStep(1)} className="btn border border-gray-300 text-gray-600">Back</button>
                    <button type="submit" className="btn-accent flex-1">Request Quote</button>
                  </div>
                </>
              )}
              <button type="button" onClick={close} className="block w-full pt-2 text-center text-sm text-gray-500 underline hover:text-ink">Not interested, thank you.</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
