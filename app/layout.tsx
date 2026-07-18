import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PalmFeed - Pakan Ternak Ruminansia Organik & Premium",
  description: "Transformasi inovatif limbah daun sawit menjadi stok pakan ruminansia bernilai ekonomi tinggi. Mendukung peternakan berkelanjutan dan organik di Indonesia.",
  keywords: ["pakan ruminansia", "pakan ternak sapi", "limbah daun sawit", "PalmFeed", "pakan organik", "peternakan berkelanjutan"],
};

import Navbar from "@/components/Navbar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="font-sans min-h-screen flex flex-col bg-[#F7F5F0] relative">
        {/* Subtle Organic SVG Pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[-1]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
        <Navbar />
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
