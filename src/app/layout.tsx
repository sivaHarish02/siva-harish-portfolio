import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sivaharish.com"),
  title: "Siva Harish | Backend Engineer & Flutter Developer",
  description:
    "Backend Engineer & Flutter Developer specializing in Node.js, Flutter, MySQL, Payment Systems, Real-Time Applications, and Production Engineering.",
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
    description: "Building scalable APIs, payment systems, real-time applications, and mobile solutions.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Siva Harish | Backend Engineer & Flutter Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Harish | Backend Engineer & Flutter Developer",
    description: "Building scalable APIs, payment systems, real-time applications, and mobile solutions.",
    images: ["/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
