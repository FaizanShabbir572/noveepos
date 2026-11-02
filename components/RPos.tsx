import { Fragment } from "react";
import { LogoMark } from "./Logo";

// "NPOS" ki jagah R badge + "POS" — text ke saath inline chalta hai
export default function RPos() {
  return (
    <span className="whitespace-nowrap">
      <LogoMark className="mr-[0.06em] inline-block h-[0.82em] w-[0.82em] align-[-0.07em]" />POS
    </span>
  );
}

// Plain string (props / lib data) mein "NPOS" ko <RPos /> se badal deta hai
export function rpos(text: string) {
  return text.split("NPOS").map((part, i) => <Fragment key={i}>{i > 0 && <RPos />}{part}</Fragment>);
}
