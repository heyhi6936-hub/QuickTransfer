import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

// ── Global Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://quicktransfer.site"),

  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: "QuickTransfer – Free Online File Sharing Without Signup",
    template: "%s | QuickTransfer",
  },
  description:
    "Send files online with QuickTransfer. No account required: upload files, share a transfer code, and let recipients download them. Free transfers up to 100MB.",
  keywords:
    "send files online, free file transfer, no sign up, share files online instantly, secure file transfer, send large files, no login, file sharing online, data transfer, free file upload, link transfer, files between devices",
  authors: [{ name: "QuickTransfer" }],
  icons: {
    icon: '/icons/icon-192.png',
    shortcut: '/icons/icon-192.png',
    apple: '/icons/icon-192.png',
  },
  robots: { index: true, follow: true },

  // ── Canonical & Feeds ──────────────────────────────────────────────────────
  alternates: {
    types: {
      "application/xml": "/sitemap.xml",
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    title: "QuickTransfer – Free Online File Sharing Without Signup",
    description:
      "Send files instantly with a secure 6-digit code. No login required, free transfers up to 100MB. Works on any device.",
    url: "https://quicktransfer.site/",
    siteName: "QuickTransfer",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuickTransfer – Free File Sharing Tool",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "QuickTransfer – Free Online File Sharing Without Signup",
    description:
      "Send files instantly with a secure 6-digit code. No login required, free transfers up to 100MB. Works on any device.",
    images: ["/og-image.png"],
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ef4444",
};

// ── JSON-LD Schema (WebApplication Only) ──────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "QuickTransfer",
      url: "https://quicktransfer.site/",
      description:
        "Free online file transfer tool. No sign-up required. Share files instantly using a secure 6-digit code.",
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "No sign-up or registration required",
        "Free transfers up to 100MB",
        "Cryptographically secure 6-digit transfer code",
        "Encrypted in transit via HTTPS",
        "Automatic expiration within 5 to 10 minutes",
        "Works on all modern mobile and desktop browsers",
      ],
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Proactively adding icon links in head as a fallback for some browsers */}
        <link rel="icon" href="/icons/icon-192.png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen flex flex-col hero-gradient dark:bg-slate-900">
              <Header />
              {children}
              <footer className="bg-gray-50/50 dark:bg-slate-900/80 py-8 md:py-12 border-t border-gray-100 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">© 2026 QuickTransfer Inc. All rights reserved.</p>
                </div>
              </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
