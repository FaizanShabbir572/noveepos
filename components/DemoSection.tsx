"use client";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { BusinessSelect, Consent } from "./ModalProvider";

export default function DemoSection() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="bg-gradient-to-br from-brand-dark to-brand py-20">
      <div className="container-x">
        <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
          <h3 className="text-center text-3xl font-bold">Book A Demo</h3>
          {sent ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-green-500" />
              <p className="text-gray-600">Thanks! We&apos;ll contact you shortly to arrange your demo.</p>
            </div>
          ) : (
            <form className="mt-8 grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required className="input" placeholder="Full Name" />
              <input className="input" placeholder="Company Name" />
              <input required type="email" className="input" placeholder="Email Address" />
              <input required type="tel" className="input" placeholder="Phone Number" />
              <div className="sm:col-span-2"><BusinessSelect /></div>
              <div className="sm:col-span-2"><Consent /></div>
              <button type="submit" className="btn-accent sm:col-span-2">Book A Demo</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
