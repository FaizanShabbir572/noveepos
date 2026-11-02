import RPos from "./RPos";
import { brand, featurePoints } from "@/lib/site";
import Icon from "./Icon";

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">{brand.name} Features</h2>
          <p className="section-sub">Power up your business with a smarter <RPos /> system</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featurePoints.map((f) => (
            <div key={f.title} className="group rounded-xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-full bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-white">
                <Icon name={f.icon} className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#benefits" className="btn-brand">Read More</a>
        </div>
      </div>
    </section>
  );
}
