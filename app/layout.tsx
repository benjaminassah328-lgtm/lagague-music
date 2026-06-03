import type { Metadata } from "next";
import { Geist, Geist_Mono,Orbitron,Lora,Raleway,Arimo } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron  = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LAGAGUE",
  description: "Découvrez l'univers de LAGAGUE :music, mode, accessoires et tendances.",

  openGraph: {
    title: "LAGAGUE",
    description: "Découvrez l'univers de LAGAGUE :music, mode, accessoires et tendances.",
    url: "https://www.lagague.com",
    siteName: "LAGAGUE",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "LAGAGUE",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LAGAGUE",
    description: "Découvrez l'univers de LAGAGUE :music, mode, accessoires et tendances.",
    images: ["/images/logo.jpeg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  keywords: [
    "lagague",
    "mode",
    "vêtements",
    "chaussures",
    "accessoires",
    "streetwear",
    "lagague music"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${lora.variable} ${raleway.variable} antialiased`}
      >
        <div className="bg-linear-to-br from-green-900 via-black to-green-900">
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
