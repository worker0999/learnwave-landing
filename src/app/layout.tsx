import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Learn Wave - VTU Student Portal",
  description: "Comprehensive student platform for VTU students - Access learning materials, track academic progress, and prepare for your career with Learn Wave.",
  keywords: ["Learn Wave", "VTU", "Student Portal", "Education", "Learning Platform", "VTU Students", "2025"],
  authors: [{ name: "Learn Wave Team", url: "https://github.com/lohithk001" }],
  openGraph: {
    title: "Learn Wave - VTU Student Portal",
    description: "Your comprehensive student platform for accessing learning materials, tracking academic progress, and preparing for your future career.",
    url: "https://learnwave.vtu.edu",
    siteName: "Learn Wave",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Wave - VTU Student Portal",
    description: "Comprehensive student platform designed specifically for VTU students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
