import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puri Agung Karya Jaya | Perumahan KPR Subsidi",
  description:
    "Puri Agung Karya Jaya - Hunian nyaman KPR Subsidi Tipe 36. Investasi masa depan keluarga Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${inter.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}
