import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Dancing_Script } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  preload: true,
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://siva-harish-portfolio.vercel.app"),
  title: "Siva Harish | Backend Engineer & Flutter Developer",
  description:
    "Backend Engineer & Flutter Developer specializing in Node.js, Flutter, MySQL, Payment Systems, Real-Time Applications and Production Engineering.",
  keywords: [
    "Siva Harish",
    "Backend Engineer",
    "Flutter Developer",
    "Node.js Developer",
    "MySQL Developer",
    "Firebase",
    "Razorpay",
    "WebRTC",
    "API Development",
  ],
  authors: [{ name: "Siva Harish" }],
  openGraph: {
    title: "Siva Harish | Backend Engineer & Flutter Developer",
    description: "Building Scalable APIs, Payment Systems & Real-Time Applications",
    url: "https://siva-harish-portfolio.vercel.app",
    siteName: "Siva Harish Portfolio",
    images: [
      {
        url: "https://siva-harish-portfolio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siva Harish Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Harish | Backend Engineer & Flutter Developer",
    description: "Building Scalable APIs, Payment Systems & Real-Time Applications",
    images: ["https://siva-harish-portfolio.vercel.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Siva Harish",
  jobTitle: "Backend Engineer & Flutter Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${dancingScript.variable} antialiased`}
    >
      <body className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
