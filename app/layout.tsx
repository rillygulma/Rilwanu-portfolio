import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeContextProvider } from "@/components/layout/ThemeContext";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rilwanu Idris | Frontend Developer",
    template: "%s | Rilwanu Idris",
  },
  description:
    "Rilwanu Idris is a Frontend Developer specializing in Next.js, React, TypeScript, and Tailwind CSS.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeContextProvider>
          <Navbar />

          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>

          <WhatsAppButton />

          <Footer />
        </ThemeContextProvider>
      </body>
    </html>
  );
}