import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | SEO, Ads, Web Development & More`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Taking your business online with full-service digital marketing: SEO, Meta & Google Ads, web development, e-commerce stores and video editing.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | SEO, Ads, Web Development & More`,
    description:
      "Taking your business online with full-service digital marketing: SEO, Meta & Google Ads, web development, e-commerce stores and video editing.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | SEO, Ads, Web Development & More`,
    description:
      "Taking your business online with full-service digital marketing: SEO, Meta & Google Ads, web development, e-commerce stores and video editing.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
