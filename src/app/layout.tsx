import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "MyTegami.win – Write Boldly. Apply Globally.",
  description: "Create multilingual, AI-crafted cover letters with just two phrases. No resume needed. Built for students, migrants, and global job seekers.",
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
        {children}
      </body>
    </html>
  );
}