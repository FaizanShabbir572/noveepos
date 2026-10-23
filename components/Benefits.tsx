"use client";
import { useState } from "react";
import { brand, benefitTabs } from "@/lib/site";
import Icon from "./Icon";

export default function Benefits() {
  const [active, setActive] = useState(benefitTabs[0].id);
  const tab = benefitTabs.find((t) => t.id === active)!;
  return (
    <section id="benefits" className="py-20">
      <div className="container-x">
        <h2 className="section-title text-center">Discover The Benefits of {brand.name}</h2>
        <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-2 rounded-full bg-gray-100 p-1.5">
          {benefitTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex-1 whitespace-nowrap rounded-full px-5 py-3 text-sm font-semibold transition ${active === t.id ? "bg-brand text-white shadow" : "text-gray-600 hover:text-brand"}`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div key={tab.id} className="mt-12 grid animate-[fade_.4s_ease] gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tab.items.map((it) => (
            <div key={it.title} className="flex gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <Icon name={it.icon} className="h-7 w-7" />
              </div>
              <div>
                <h5 className="font-bold">{it.title}</h5>
                <p className="mt-1 text-sm text-gray-600">{it.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center"><a href="#features" className="btn-brand">View More</a></div>
      </div>
      <style>{`@keyframes fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}`}</style>
    </section>
  );
}
