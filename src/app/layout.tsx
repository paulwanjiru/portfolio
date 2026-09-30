import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Wanjiru | Full-Stack Software Engineer & Systems Architect",
  description:
    "Full-Stack Software Engineer and Systems Developer based in Nakuru City, Kenya. Production web platforms, bespoke enterprise software, e-commerce storefronts with M-PESA integrations, and cloud infrastructure.",
  keywords: [
    "Paul Wanjiru",
    "Paul Wanjiru Developer",
    "Full-Stack Software Engineer Kenya",
    "Systems Architect Nakuru",
    "Web Development Kenya",
    "Custom Software Kenya",
    "MPESA STK Push Daraja API",
    "Next.js 16",
    "React 19",
    "PHP 8.2",
    "MySQL Database Optimization",
    "Enterprise ERP Architect"
  ],
  authors: [{ name: "Paul Wanjiru", url: "https://www.infrabitsystems.co.ke" }],
  creator: "Paul Wanjiru",
  publisher: "Paul Wanjiru",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://paulwanjiru.github.io/portfolio/",
    title: "Paul Wanjiru | Full-Stack Software Engineer & Systems Developer",
    description:
      "Full-Stack Software Engineer and Systems Developer based in Nakuru City, Kenya. Production web platforms, college portals, and e-commerce storefronts with M-PESA integrations.",
    siteName: "Paul Wanjiru Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Wanjiru | Full-Stack Software Engineer & Systems Developer",
    description:
      "Full-Stack Software Engineer and Systems Developer based in Nakuru City, Kenya. Production web platforms, college portals, and e-commerce storefronts with M-PESA integrations.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00F0FF" },
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google Analytics Tag from InfraBit Systems */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EVJEV77P68"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EVJEV77P68');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
