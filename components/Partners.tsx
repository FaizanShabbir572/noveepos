import { CreditCard } from "lucide-react";
import { partners } from "@/lib/site";

export default function Partners() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container-x">
        <h2 className="section-title text-center">Our Integration Partners</h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <div key={p.name} className="rounded-xl bg-white p-8 text-center shadow-sm transition hover:shadow-lg">
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-brand-light text-brand"><CreditCard className="h-8 w-8" /></div>
              <h4 className="text-xl font-bold">{p.name}</h4>
              <p className="mt-2 text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
