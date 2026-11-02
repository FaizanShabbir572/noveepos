import Link from "next/link";
import { productTiles } from "@/lib/site";
import Icon from "./Icon";

export default function ProductTiles({ title, sub, intro }: { title: string; sub?: string; intro?: string }) {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">{title}</h2>
          {sub && <p className="section-sub">{sub}</p>}
          {intro && <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-gray-600">{intro}</p>}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {productTiles.map((p) => (
            <Link key={p.label} href="/hardware" className="group flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand hover:shadow-lg">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name={p.icon} className="h-7 w-7" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-ink">{p.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
