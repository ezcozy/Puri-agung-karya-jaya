import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
