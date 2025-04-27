import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "./[locale]/provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://alegex.hu/"),
  title: "Alegex | AI-alapú kereskedés crypto valutákkal",
  description:
    "Mi az AI-alapú kriptovaluta kereskedés úttörői vagyunk, és célunk, hogy a legmodernebb technológiával segítsük befektetéseidet.",
  icons: {
    icon: "/Alogo.png",
    shortcut: "/Alogo.png",
    apple: "/Alogo.png",
  },
  openGraph: {
    title: "Alegex | AI-alapú kereskedés crypto valutákkal",
    description:
      "Mi az AI-alapú kriptovaluta kereskedés úttörői vagyunk, és célunk, hogy a legmodernebb technológiával segítsük befektetéseidet.",
    images: [
      {
        url: "/shareImg.jpg",
        width: 800,
        height: 600,
        alt: "Alegex | AI-alapú kereskedés crypto valutákkal",
      },
    ],
  },
};

export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;

}>) {

  return (
    <html className="dark" suppressHydrationWarning lang="hu">
      <head>
        <link rel="icon" href="/Alogo.png" sizes="any" />
        {/* <GoogleAnalytics gaId='G-2TG649VQB5' /> */}
        <Analytics/>
        <SpeedInsights/>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          {/* <CookieBanner /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
