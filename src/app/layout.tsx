
import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rathore Digital | Digital Marketing & Growth",
    template: "%s | Rathore Digital",
  },
  description:
    "Digital marketing, SEO, paid advertising, web development, and creative services to help businesses grow.",
  applicationName: "Rathore Digital",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Rathore Digital | Digital Marketing & Growth",
    description:
      "Strategy, marketing, and digital experiences built to move your business forward.",
    siteName: "Rathore Digital",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rathore Digital | Digital Marketing & Growth",
    description:
      "Strategy, marketing, and digital experiences built to move your business forward.",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
