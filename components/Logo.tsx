import { brand } from "@/lib/site";
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-dark text-lg font-extrabold text-white shadow">
        {brand.name.charAt(0)}
      </span>
      <span className={`text-2xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
        {brand.name.slice(0, -3)}<span className="text-accent">{brand.name.slice(-3)}</span>
      </span>
    </span>
  );
}
