import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { brand } from "@/lib/site";
import { ModalProvider } from "@/components/ModalProvider";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700","800"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: `NPOS System | Smart NPOS Software | ${brand.name}`,
  description: `Faster checkouts with a modern NPOS system. Pay ${brand.bundlePrice} upfront or ${brand.weeklyPrice}.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body><ModalProvider>{children}</ModalProvider></body>
    </html>
  );
}
