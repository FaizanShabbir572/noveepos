"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { brand, nav } from "@/lib/site";
import { useModal } from "./ModalProvider";
import Logo from "./Logo";

export default function Header() {
  const { open } = useModal();
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-ink text-xs text-gray-300 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5"><Phone className="h-3.5 w-3.5" />{brand.phone}</span>
            <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />{brand.email}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="#about" className="hover:text-white">About</Link>
            <Link href="#contact" className="hover:text-white">Contact Us</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className={`bg-white transition-shadow ${scrolled ? "shadow-md" : "shadow-sm"}`}>
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Link href="/" aria-label={brand.name}><Logo /></Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link href={item.href} className="flex items-center gap-1 px-4 py-7 text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand">
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full min-w-[220px] translate-y-2 rounded-b-lg border-t-4 border-brand bg-white py-2 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link key={c.label} href={c.href} className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-brand-light hover:text-brand">{c.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={() => open("demo")} className="btn-accent px-5 py-2.5 text-xs">Request a Demo</button>
            <button onClick={() => open("callback")} className="btn-brand px-5 py-2.5 text-xs">Request a Callback</button>
          </div>

          <button className="lg:hidden" onClick={() => setMobile(true)} aria-label="Open menu"><Menu className="h-7 w-7" /></button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobile && (
        <div className="fixed inset-0 z-[55] bg-black/50 lg:hidden" onClick={() => setMobile(false)}>
          <div className="ml-auto h-full w-80 max-w-[85%] overflow-y-auto bg-white p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button onClick={() => setMobile(false)} aria-label="Close menu"><X className="h-6 w-6" /></button>
            </div>
            {nav.map((item) => (
              <div key={item.label} className="border-b py-3">
                <Link href={item.href} onClick={() => setMobile(false)} className="font-semibold uppercase">{item.label}</Link>
                {item.children?.map((c) => (
                  <Link key={c.label} href={c.href} onClick={() => setMobile(false)} className="block py-1.5 pl-4 text-sm text-gray-600">{c.label}</Link>
                ))}
              </div>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <button onClick={() => { setMobile(false); open("demo"); }} className="btn-accent">Request a Demo</button>
              <button onClick={() => { setMobile(false); open("callback"); }} className="btn-brand">Request a Callback</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
