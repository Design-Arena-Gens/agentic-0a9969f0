import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { Space_Grotesk, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "AI Influencer Architect",
  description:
    "Design a hyper-personal AI influencer persona, workflow, and tooling roadmap tailored to your goals."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
