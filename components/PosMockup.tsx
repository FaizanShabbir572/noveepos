import SaleScreen from "./SaleScreen";

// Offer popup ka POS terminal illustration — wahi sale screen jo baqi site par hai
export default function PosMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-full max-w-md ${className}`}>
      <div className="rounded-2xl border-[10px] border-gray-800 bg-gray-800 shadow-2xl">
        <div className="aspect-[16/9] overflow-hidden rounded-md bg-white"><SaleScreen /></div>
      </div>
      <div className="mx-auto h-10 w-16 bg-gradient-to-b from-gray-700 to-gray-500" />
      <div className="mx-auto h-3 w-48 rounded-full bg-gray-700" />
    </div>
  );
}
