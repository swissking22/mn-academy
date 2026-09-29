import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/data/company";
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
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "MN Academy | Creative & Technical Solutions",
    template: "%s | MN Academy",
  },
  description:
    "Professional graphic design, branding, electrical installation and technical solutions in Yaoundé, Cameroon.",
  keywords: [
    "MN Academy",
    "graphic design Yaoundé",
    "electrical installation Cameroon",
    "branding",
    "wiring",
    "CCTV",
    "creative and technical solutions",
  ],
  authors: [{ name: company.ceo }],
  creator: company.name,
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_CM",
    url: company.siteUrl,
    siteName: company.name,
    title: "MN Academy | Creative & Technical Solutions",
    description:
      "Professional graphic design, branding, electrical installation and technical solutions in Yaoundé, Cameroon.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MN Academy | Creative & Technical Solutions",
    description:
      "Professional graphic design, branding, electrical installation and technical solutions in Yaoundé, Cameroon.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
