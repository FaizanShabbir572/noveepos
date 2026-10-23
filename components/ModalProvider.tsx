"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { brand, businessTypes } from "@/lib/site";

type ModalKind = "demo" | "callback" | "details" | null;
const Ctx = createContext<{ open: (k: Exclude<ModalKind, null>) => void }>({ open: () => {} });
export const useModal = () => useContext(Ctx);

export function Consent() {
  return (
    <label className="flex items-start gap-3 text-xs leading-relaxed text-gray-600">
      <input type="checkbox" required className="mt-0.5 h-4 w-4 shrink-0 accent-brand" />
      <span>
        By checking this box you confirm you have read and understood the {brand.name}{" "}
        <a href="#" className="font-semibold text-brand underline">terms and conditions</a>. See our{" "}
        <a href="#" className="font-semibold text-brand underline">privacy policy</a> for how we handle your personal data and your rights over it.
      </span>
    </label>
  );
}

export function BusinessSelect({ includeOther = true }: { includeOther?: boolean }) {
  const list = includeOther ? businessTypes : businessTypes.filter((b) => b !== "Other");
  return (
    <select required defaultValue="" className="input">
      <option value="" disabled>Select your business type</option>
      {list.map((b) => <option key={b}>{b}</option>)}
    </select>
  );
}

function ModalShell({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl bg-white p-6 shadow-2xl sm:p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-gray-500 hover:text-ink"><X /></button>
        <h3 className="mb-6 pr-8 text-xl font-bold text-ink">{title}</h3>
        {children}
      </div>
    </div>
  );
}

function FormBody({ kind, onDone }: { kind: Exclude<ModalKind, null>; onDone: () => void }) {
  return (
    <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onDone(); }}>
      <input required className="input" placeholder="Full Name" />
      {kind !== "callback" && <input className="input" placeholder="Company Name" />}
      <input required type="email" className="input" placeholder="Email Address" />
      <input required type="tel" className="input" placeholder="Phone Number" />
      {kind === "callback" ? (
        <select required defaultValue="" className="input">
          <option value="" disabled>Preferred Time To Be Called</option>
          <option>Between 9am - 1pm</option>
          <option>Between 1pm - 5pm</option>
          <option>After 5pm</option>
        </select>
      ) : (
        <BusinessSelect includeOther={kind === "demo"} />
      )}
      {kind === "details" && (
        <select required defaultValue="" className="input">
          <option value="" disabled>VAT Registered</option>
          <option>Yes</option>
          <option>No</option>
        </select>
      )}
      <Consent />
      <button type="submit" className="btn-accent w-full">Submit</button>
    </form>
  );
}

const titles = { demo: "Book Your Free Demo Now", callback: "Request a Callback", details: "Please leave your details below" };

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [kind, setKind] = useState<ModalKind>(null);
  const [done, setDone] = useState(false);
  const close = () => { setKind(null); setDone(false); };
  return (
    <Ctx.Provider value={{ open: (k) => { setDone(false); setKind(k); } }}>
      {children}
      {kind && (
        <ModalShell title={done ? "Thank you!" : titles[kind]} onClose={close}>
          {done ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <CheckCircle2 className="h-14 w-14 text-green-500" />
              <p className="text-gray-600">We&apos;ve received your details. Our team will be in touch shortly.</p>
              <button onClick={close} className="btn-brand mt-2">Close</button>
            </div>
          ) : (
            <FormBody kind={kind} onDone={() => setDone(true)} />
          )}
        </ModalShell>
      )}
    </Ctx.Provider>
  );
}
