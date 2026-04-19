import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030305",
};

const siteUrl = "https://mytegami.win";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MyTegami.win – AI Cover Letter Generator | Write Boldly. Apply Globally.",
    template: "%s | MyTegami.win",
  },
  description: "Generate professional cover letters in 15+ languages with AI. Just 2 phrases = done. Used by 50,000+ job seekers. Free to start. Land your dream job faster.",
  keywords: [
    "AI cover letter generator",
    "cover letter maker",
    "job application",
    "resume",
    "career",
    "LinkedIn message generator",
    "personal bio",
    "multilingual cover letter",
    "Japanese resume",
    "ESG entry sheet",
    "SPI practice",
    "job seeker tools",
    "career communication",
    "AI writing assistant",
  ],
  authors: [{ name: "MyTegami Team" }],
  creator: "MyTegami",
  publisher: "MyTegami",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "MyTegami.win",
    title: "MyTegami.win – AI Cover Letter Generator | Write Boldly. Apply Globally.",
    description: "Generate professional cover letters in 15+ languages with AI. Just 2 phrases = done. Used by 50,000+ job seekers. Free to start.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MyTegami - AI Cover Letter Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyTegami.win – AI Cover Letter Generator",
    description: "Generate professional cover letters in 15+ languages with AI. Just 2 phrases = done.",
    images: ["/og-image.png"],
    creator: "@mytegami",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      ja: `${siteUrl}/ja`,
    },
  },
  category: "productivity",
  classification: "AI Cover Letter & Career Communication Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-body bg-background text-text-primary antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}