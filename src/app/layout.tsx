import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/data";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://skfitness-ashen.vercel.app"),
  title: `${siteConfig.name} | Premium Online Fitness Coaching — ${siteConfig.coach}`,
  description: siteConfig.description,
  keywords: [
    "premium fitness coach",
    "online personal trainer India",
    "Sagar Kadam",
    "luxury fitness coaching",
    "weight loss coach",
    "muscle building online",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    type: "website",
    images: [{ url: siteConfig.images.hero, alt: `${siteConfig.coach} — SK Fitness Coach` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen overflow-x-clip bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
