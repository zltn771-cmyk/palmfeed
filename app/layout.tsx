import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

export const metadata: Metadata = {
  title: "PalmFeed - Pakan Ternak Ruminansia Organik & Premium",
  description: "Transformasi inovatif limbah daun sawit menjadi stok pakan ruminansia bernilai ekonomi tinggi. Mendukung peternakan berkelanjutan dan organik di Indonesia.",
  keywords: ["pakan ruminansia", "pakan ternak sapi", "limbah daun sawit", "PalmFeed", "pakan organik", "peternakan berkelanjutan"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="font-sans min-h-screen flex flex-col">
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
