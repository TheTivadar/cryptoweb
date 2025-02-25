import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/cookieAcceptance/googleAnalytics";
import CookieBanner from "@/components/cookieAcceptance/cookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alegex",
  description: "Modern AI trading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Alogo.png" sizes="any" />
        <Suspense fallback={null}>
          <GoogleAnalytics GA_MEASUREMENT_ID='G-2TG649VQB5' />
        </Suspense>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieBanner />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
