import type { Metadata, Viewport } from "next";
import Navbar from "@/brand/components/misc/navbar";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "./_components/smooth-scrolling";

const spacGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const viewport: Viewport = {
  themeColor: "#0D4FF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Playcope | Football Intelligence Starts Here",
  description:
    "Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way. Powered by AI and real match data.",
  keywords: [
    "Football",
    "AI",
    "Intelligence",
    "Betting",
    "Analytics",
    "Predictions",
    "Playcope",
    "Puntrr",
    "Pustats",
    "Sports Data",
  ],
  authors: [{ name: "Playcope" }],
  openGraph: {
    title: "Playcope | Football Intelligence Starts Here",
    description:
      "Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way. Powered by AI and real match data.",
    url: "https://playcope.com",
    siteName: "Playcope",
    images: [
      {
        url: "/opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "Playcope Football Intelligence",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playcope | Football Intelligence Starts Here",
    description:
      "Playcope is a football intelligence company built to help fans, bettors, analysts, and brands see football in a smarter way.",
    creator: "@playcope",
    images: ["/opengraph.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spacGrotesk.variable} antialiased font-sans overflow-x-hidden`}
      >
        <SmoothScrolling>
          <header className="container sticky z-50 px-3 mx-auto md:p-3 top-5">
            <Navbar />
          </header>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
