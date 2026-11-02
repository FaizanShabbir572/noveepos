// TradeWithRay "R" badge — header, footer aur device screens sab yahi use karte hain
export function LogoMark({ className = "", outline = false }: { className?: string; outline?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      {outline
        ? <rect x="1" y="1" width="46" height="46" rx="9.5" fill="#0a2a66" stroke="#fff" strokeWidth="2" />
        : <rect width="48" height="48" rx="10" fill="#0a2a66" />}
      <path fill="#fff" fillRule="evenodd" d="M13 13h12.5c5 0 8 3 8 7.2 0 3.4-1.9 5.8-4.9 6.7L34 35h-7.8l-4.7-7.6H20V35h-7zm7 5.6v3.6h4.8c1.2 0 1.9-.7 1.9-1.8s-.7-1.8-1.9-1.8z" />
      <path fill="#fff" d="M34 8h7v7z" />
    </svg>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark outline={light} className="h-11 w-11 shrink-0" />
      <span className={`flex flex-col leading-none ${light ? "text-white" : "text-navy"}`}>
        <span className="text-[10px] font-semibold tracking-[0.32em] opacity-80">TRADE WITH</span>
        <span className="text-[30px] font-extrabold tracking-[0.04em]">RAY</span>
      </span>
    </span>
  );
}
