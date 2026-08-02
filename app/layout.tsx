import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { WhatsAppFloatingButton } from "@/components/sections/WhatsAppFloatingButton";
import { ExitIntentPopup } from "@/components/sections/ExitIntentPopup";
import { BRAND, SEO } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SEO.baseUrl),
  title: {
    default: SEO.title,
    template: "%s | DevArea",
  },
  description: SEO.description,
  keywords: SEO.keywords,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: SEO.title,
    description: SEO.description,
    url: SEO.baseUrl,
    siteName: BRAND.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    creator: "@devarea",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#F8FAFC" />
        {/* Ensure theme is applied before React hydration */}
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const rawTheme = localStorage.getItem('theme');
              let theme = rawTheme;
              if (rawTheme && (rawTheme.startsWith('"') || rawTheme.startsWith("'"))) {
                try {
                  theme = JSON.parse(rawTheme);
                } catch {
                  theme = rawTheme;
                }
              }
              if (theme !== 'light' && theme !== 'dark') {
                theme = null;
              }
              const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              const isDark = theme === 'dark' || (!theme && prefersDark);
              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="min-h-screen flex flex-col bg-light-bg dark:bg-[#000000] text-light-heading dark:text-white transition-colors duration-500">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
          <WhatsAppFloatingButton type="default" position="bottom-right" />
          <ExitIntentPopup 
            whatsappNumber="917068317379"
            whatsappMessage="Hi, mujhe website development ke baare mein details chahiye"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
