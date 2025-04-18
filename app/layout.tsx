import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "WINDAYPVC - Janelas e Portas PVC de Alta Qualidade",
    template: "%s | WINDAYPVC",
  },
  description:
    "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
  keywords: [
    "janelas pvc",
    "portas pvc",
    "estores",
    "mosquiteiras",
    "portadas",
    "vedaluz",
    "janelas eficientes",
    "isolamento térmico",
    "isolamento acústico",
  ],
  authors: [{ name: "WINDAYPVC" }],
  creator: "WINDAYPVC",
  publisher: "WINDAYPVC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://windaypvc.pt"),
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
    },
  },
  openGraph: {
    title: "WINDAYPVC - Janelas e Portas PVC de Alta Qualidade",
    description:
      "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    url: "https://windaypvc.pt",
    siteName: "WINDAYPVC",
    images: [
      {
        url: "/winday.jpg",
        width: 1200,
        height: 630,
        alt: "WINDAYPVC - Janelas e Portas PVC de Alta Qualidade",
      },
    ],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WINDAYPVC - Janelas e Portas PVC de Alta Qualidade",
    description:
      "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
    images: ["/winday.jpg"],
    creator: "@windaypvc",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
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
  icons: {
    icon: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: ["/logo192.png"],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT">
      <head>
        <link rel="canonical" href="https://windaypvc.pt" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "WINDAYPVC",
              url: "https://windaypvc.pt",
              logo: "https://windaypvc.pt/logo512.png",
              sameAs: [
                "https://www.facebook.com/profile.php?id=61561480102114",
                "https://www.instagram.com/winday.pt1/",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+351-932-825-464",
                contactType: "customer service",
                availableLanguage: ["Portuguese"],
              },
              email: "geralwinday@gmail.com",
              description:
                "Janelas e portas em PVC duráveis, isolantes e de design moderno, oferecendo conforto e eficiência com baixa manutenção.",
            }),
          }}
        />
      </body>
    </html>
  )
}
