"use client";
import { useModal } from "./ModalProvider";

export default function ModalButton({ label, kind, className = "btn-accent" }: { label: string; kind: "demo" | "callback" | "details"; className?: string }) {
  const { open } = useModal();
  return <button onClick={() => open(kind)} className={className}>{label}</button>;
}
