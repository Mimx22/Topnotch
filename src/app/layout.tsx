import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Asala Taiye Miracle | Full-Stack Developer",
  description: "Full-Stack Developer based in Lagos, Nigeria with 3 years of experience building scalable, responsive web applications using React, JavaScript, Node.js, Firebase, and MongoDB.",
  keywords: [
    "Asala Taiye Miracle",
    "Full-Stack Developer",
    "React",
    "Node.js",
    "JavaScript",
    "Firebase",
    "MongoDB",
    "Lagos Nigeria Developer",
    "Web Developer"
  ],
  authors: [{ name: "Asala Taiye Miracle" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
