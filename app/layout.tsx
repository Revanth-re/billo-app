import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { JsonLd, organizationLd, websiteLd, softwareLd } from "@/components/JsonLd";

// Self-hosted fonts (no Google Fonts request → faster first paint, better Core Web Vitals).
const jakarta = localFont({
  src: "../node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-jakarta",
  display: "swap",
});
const telugu = localFont({
  src: [
    { path: "../node_modules/@fontsource/noto-sans-telugu/files/noto-sans-telugu-telugu-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/noto-sans-telugu/files/noto-sans-telugu-telugu-600-normal.woff2", weight: "600" },
    { path: "../node_modules/@fontsource/noto-sans-telugu/files/noto-sans-telugu-telugu-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-telugu-face",
  display: "swap",
  preload: false,
});
const hindi = localFont({
  src: [
    { path: "../node_modules/@fontsource/noto-sans-devanagari/files/noto-sans-devanagari-devanagari-400-normal.woff2", weight: "400" },
    { path: "../node_modules/@fontsource/noto-sans-devanagari/files/noto-sans-devanagari-devanagari-600-normal.woff2", weight: "600" },
    { path: "../node_modules/@fontsource/noto-sans-devanagari/files/noto-sans-devanagari-devanagari-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-hindi-face",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Billo – Restaurant Billing App & POS for India | Token Printing, Udhaari, GST",
    template: "%s",
  },
  description: SITE.description,
  applicationName: "Billo",
  keywords: [
    "Billo", "Billo app", "Billo billing", "Billo POS", "Billo restaurant billing", "billo quick",
    "restaurant billing software", "restaurant billing app", "restaurant POS India", "POS software India",
    "billing app for restaurant", "tiffin centre billing app", "hotel billing software", "billing machine for restaurant",
    "Bluetooth thermal printer billing app", "token billing app", "udhaari app", "khata app for restaurant",
    "GST billing software for restaurant", "billing software India", "POS for restaurants India", "hotel billing machine", "billing app for small business India",
  ],
  authors: [{ name: "Billo" }],
  creator: "Billo",
  publisher: "Billo",
  category: "Business software",
  alternates: { canonical: "/", languages: { "en-IN": "/", "hi-IN": "/hi", "te-IN": "/te" } },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: "Billo",
    title: "Billo – Fast billing for Indian restaurants",
    description: SITE.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Billo – restaurant billing app for India" }],
  },
  twitter: { card: "summary_large_image", title: "Billo – Fast billing for Indian restaurants", description: SITE.description, images: ["/og-image.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: true, email: true },
  // Google Search Console "HTML tag" verification — set NEXT_PUBLIC_GOOGLE_VERIFICATION in Vercel.
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION } : undefined,
};

export const viewport: Viewport = { themeColor: "#06484C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${telugu.variable} ${hindi.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={[organizationLd(), websiteLd(), softwareLd()]} />
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
