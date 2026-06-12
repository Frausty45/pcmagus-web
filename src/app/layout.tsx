import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pcmagus.hu"),
  title: {
    default: "PCMagus | PC és laptop javítás, diagnosztika, gépépítés",
    template: "%s | PCMagus",
  },
  description:
    "PC és laptop diagnosztika, javítás, karbantartás, bővítés és egyedi gépépítés érthető javaslatokkal.",
  openGraph: {
    title: "PCMagus",
    description:
      "PC és laptop diagnosztika, javítás, karbantartás és egyedi gépépítés.",
    url: "https://pcmagus.hu",
    siteName: "PCMagus",
    locale: "hu_HU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hu"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[#05040a] font-sans">{children}</body>
    </html>
  );
}
