"use client";
import Link from "next/link";
import { Twitter, Facebook, Linkedin, Instagram, Pin, Send } from "lucide-react";
import { brand, footerCols } from "@/lib/site";
import Logo from "./Logo";

const icons = [Twitter, Facebook, Linkedin, Pin, Instagram];
const names = ["Twitter", "Facebook", "LinkedIn", "Pinterest", "Instagram"];
const pages: Record<string, string> = { Retail: "/retail", Restaurants: "/restaurants", "Bakeries Delis": "/bakeries-delis", "Coffee Shop": "/coffee-shop", Hardware: "/hardware" };

export default function Footer() {
  return (
    <footer id="about" className="bg-ink text-gray-400">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm">Run your business with {brand.name}&apos;s fast, dependable NPOS systems.</p>
          <p className="mt-6 text-sm font-semibold text-white">Subscribe for Newsletter:</p>
          <form className="mt-3 flex max-w-sm overflow-hidden rounded-full bg-white/10" onSubmit={(e) => { e.preventDefault(); (e.currentTarget.elements[0] as HTMLInputElement).value = ""; alert("Subscribed!"); }}>
            <input required type="email" placeholder="Your email" className="flex-1 bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-gray-500" />
            <button className="bg-accent px-5 text-white hover:bg-accent-dark" aria-label="Subscribe"><Send className="h-4 w-4" /></button>
          </form>
        </div>
        {footerCols.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">{col.title}</h3>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => <li key={l}><Link href={pages[l] ?? "#"} className="hover:text-accent">{l}</Link></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <span>© {brand.name} {new Date().getFullYear()}. All Rights Reserved.</span>
          <div className="flex gap-3">
            {icons.map((I, i) => (
              <Link key={names[i]} href="#" aria-label={names[i]} className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-accent hover:text-white"><I className="h-4 w-4" /></Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
