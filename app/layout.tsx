import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: swap for the real custom domain before deploying
  metadataBase: new URL("https://tylerpham.dev"),
  title: "Tyler Pham — Software Engineer",
  description:
    "Software engineer building full-stack web apps, AI systems, and iOS. Three products in production — real users, real hardware.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${anton.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
