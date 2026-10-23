import { Snowflake } from "lucide-react";

// Banner background ke bokeh dots aur snowflakes: [left%, top%, size px]
const dots = [[6, 12, 22], [18, 38, 14], [27, 8, 18], [41, 26, 28], [52, 70, 16], [63, 14, 20], [72, 44, 12], [86, 9, 30], [93, 52, 18], [12, 78, 20], [34, 88, 14], [80, 84, 22]];
const flakes = [[10, 30, 90], [24, 62, 70], [48, 6, 80], [58, 48, 110], [88, 30, 70]];

export default function SnowBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {dots.map(([l, t, s], i) => (
        <span key={i} className="absolute rounded-full bg-white/40 blur-[1px]" style={{ left: `${l}%`, top: `${t}%`, width: s, height: s }} />
      ))}
      {flakes.map(([l, t, s], i) => (
        <Snowflake key={i} className="absolute text-white/25" style={{ left: `${l}%`, top: `${t}%`, width: s, height: s }} strokeWidth={1} />
      ))}
    </div>
  );
}
