import { MapPin, Quote, Star } from "lucide-react";
import { brand, testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="bg-brand-light py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-sub">Businesses across Pakistan run on {brand.name}</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg">
              <Quote className="absolute right-6 top-6 h-10 w-10 text-brand/10" />
              <div className="flex gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, k) => <Star key={k} className={`h-4 w-4 ${k < t.rating ? "fill-current" : "text-gray-300"}`} />)}
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{t.title}</h3>
              <blockquote className="mt-3 flex-1 leading-relaxed text-gray-600">&ldquo;{t.text}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t pt-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand to-brand-dark font-bold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <span>
                  <span className="block font-bold text-ink">{t.name} <span className="font-medium text-brand">· {t.business}</span></span>
                  <span className="flex items-center gap-1 text-sm text-gray-500"><MapPin className="h-3.5 w-3.5" />{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
