import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { brand } from "@/lib/site";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import DemoSection from "@/components/DemoSection";
import Footer from "@/components/Footer";
import { CallerId, CashDrawer, KeyboardMouse, PaymentTerminal, PosTerminal, ReceiptPrinter, Scanners } from "@/components/hardware/Devices";

export const metadata: Metadata = {
  title: `POS Hardware | ${brand.name}`,
  description: `${brand.name} POS hardware: all-in-one touchscreen terminals, cash drawers, thermal printers, barcode scanners, payment terminals and more.`,
};

const devices = [
  {
    id: "pos", title: "POS Terminal", art: <PosTerminal />,
    text: "A fast, all-in-one touchscreen terminal with a bright 15.6\" display. Everything is built in, so there are no computer boxes or loose cables under your counter.",
    specs: ["All-in-one design — no external PC", "15.6\" multi-point capacitive touchscreen", "15.6\" widescreen customer display", "Quad-core Intel CPU", "SSD storage", "8 GB RAM"],
  },
  {
    id: "cash-drawer", title: "Cash Drawer", art: <CashDrawer />,
    text: "A modern, heavy-duty cash drawer with a spring-loaded tray that opens the moment a sale completes. Two keys lock it securely at the end of the day.",
    specs: ["Auto-opens from the till", "5 note & 8 coin compartments", "Dual-key lock"],
  },
  {
    id: "printer", title: "Thermal Printer", art: <ReceiptPrinter />,
    text: "An 80mm thermal printer that prints receipts, bills and kitchen tickets in a flash — no ink or ribbons to buy, so you save time and running costs.",
    specs: ["80mm thermal receipts", "High-speed printing with auto-cutter", "No ink required"],
  },
  {
    id: "scanner", title: "Barcode Scanner", art: <Scanners />,
    text: "Choose a wireless handheld scanner for flexibility around the shop floor, or a wired omnidirectional scanner that reads barcodes from any angle at the counter.",
    specs: ["Wireless handheld or wired omnidirectional", "Reads 1D & 2D barcodes", "Plug-and-play with the till"],
  },
  {
    id: "payments", title: "Payment Terminal", art: <PaymentTerminal />,
    text: `${brand.name} works with leading card payment providers, so the amount goes straight from the till to the card machine — no keying in. Hospitality venues can add pay-at-table terminals for single or split payments.`,
    specs: ["Contactless, chip & PIN, Apple Pay & Google Pay", "Integrated with the till", "Pay-at-table option"],
  },
  {
    id: "caller-id", title: "Caller ID", art: <CallerId />,
    text: "See who's calling before you pick up. The caller ID unit captures the customer's number and brings up their details and order history — ideal for phone orders.",
    specs: ["Captures incoming numbers", "Links to customer records", "Perfect for phone & delivery orders"],
  },
  {
    id: "keyboard", title: "Wireless Keyboard & Mouse", art: <KeyboardMouse />,
    text: "Our systems are touchscreen first, but some jobs — like adding lots of products — are quicker with a keyboard. A sleek wireless set keeps your counter tidy.",
    specs: ["Wireless, no cable clutter", "Quiet, full-size keys", "Ideal for back-office data entry"],
  },
];

export default function HardwarePage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          badge={`${brand.name} hardware range`}
          title="Enhance Your ROI With Our Highly-Efficient POS Hardware"
          text="Reliable, stylish hardware that's built to keep up with your busiest days — and make your counter look the part."
          featuresHref="#pos"
        />

        <section className="py-16 text-center">
          <div className="container-x max-w-3xl">
            <h2 className="section-title">{brand.name}</h2>
            <p className="mt-5 leading-relaxed text-gray-600">
              You need to know your POS system won&apos;t let you down. That&apos;s why every piece of {brand.name} hardware is chosen for quality and reliability — and designed to look sleek on your counter, giving your business a premium feel your customers will notice.
            </p>
          </div>
        </section>

        {devices.map((d, i) => (
          <section key={d.id} id={d.id} className={`scroll-mt-28 py-16 ${i % 2 === 0 ? "bg-gray-50" : ""}`}>
            <div className="container-x grid items-center gap-12 lg:grid-cols-2">
              <div className={`relative grid min-h-[300px] place-items-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#dce7f8] to-[#93afdf] p-8 sm:p-12 ${i % 2 ? "lg:order-2" : ""}`}>
                <span aria-hidden className="absolute left-[8%] top-[10%] h-6 w-6 rounded-full bg-white/40" />
                <span aria-hidden className="absolute bottom-[12%] right-[10%] h-9 w-9 rounded-full bg-white/30" />
                <div role="img" aria-label={`${brand.name} ${d.title}`} className="relative w-full"><div aria-hidden>{d.art}</div></div>
              </div>
              <div>
                <h2 className="section-title">{d.title}</h2>
                <p className="mt-5 leading-relaxed text-gray-600">{d.text}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {d.specs.map((s) => <li key={s} className="flex items-start gap-2 text-sm font-medium text-ink"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" /> {s}</li>)}
                </ul>
              </div>
            </div>
          </section>
        ))}

        <DemoSection />
      </main>
      <Footer />
    </>
  );
}
