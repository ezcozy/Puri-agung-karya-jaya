import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600"] });
const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
export const metadata: Metadata = { title: "Puri Agung Karya Jaya | Hunian KPR Subsidi", description: "Hunian tipe 36 KPR subsidi di Kertapati, Palembang." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="id"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>; }

