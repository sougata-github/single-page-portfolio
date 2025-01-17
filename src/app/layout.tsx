import "./globals.css";

import { Archivo } from "next/font/google";
import type { Metadata } from "next";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Minimal portfolio built using Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.className} antialiased bg-stone-200 text-stone-900`}
      >
        {children}
      </body>
    </html>
  );
}
