import FeatureArt from "./FeatureArt";

export default function FeatureGrid({ id, title, sub, items }: { id: string; title: string; sub?: string; items: { art: string; title: string; text: string }[] }) {
  return (
    <section id={id} className="py-20">
      <div className="container-x">
        <div className="text-center">
          <h2 className="section-title">{title}</h2>
          {sub && <p className="section-sub">{sub}</p>}
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div key={f.title} className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-xl">
              <div className="bg-gradient-to-b from-brand-light to-white px-6 pt-6">
                <FeatureArt name={f.art} className="mx-auto h-36 w-full transition group-hover:scale-105" />
              </div>
              <div className="p-7 pt-4">
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
