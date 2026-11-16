import type { Metadata, Viewport } from "next";
import { Newsreader, Inter } from "next/font/google";
import "@/styles/globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Fahmi Muhammad Al Hafizh",
    template: "%s | Fahmi Muhammad Al Hafizh",
  },
  description:
    "Personal portfolio of Fahmi Muhammad Al Hafizh — Information Systems, UI/UX Design, Product & Business Analysis (STT Terpadu Nurul Fikri, Sukmajaya, Depok). Transforming user and business needs into structured digital solutions.",
  keywords: [
    "Fahmi Muhammad Al Hafizh",
    "Information Systems",
    "UI/UX Design",
    "Product Analysis",
    "Business Analysis",
    "System Analyst",
    "Web Developer",
    "Laravel",
    "Agile",
    "Sukmajaya",
    "Depok",
    "Portfolio",
  ],
  authors: [{ name: "Fahmi Muhammad Al Hafizh" }],
  creator: "Fahmi Muhammad Al Hafizh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fahmialhafizh.com",
    title: "Fahmi Muhammad Al Hafizh — Information Systems, UI/UX Design, Product & Business Analysis",
    description:
      "Information Systems, UI/UX Design, Product & Business Analysis. Transforming user and business needs into structured digital solutions.",
    siteName: "Fahmi Muhammad Al Hafizh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahmi Muhammad Al Hafizh — Information Systems, UI/UX Design, Product & Business Analysis",
    description:
      "Information Systems, UI/UX Design, Product & Business Analysis. Transforming user and business needs into structured digital solutions.",
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
    <html lang="en" className={`${newsreader.variable} ${inter.variable}`}>
      <body className="bg-editorial-bg text-editorial-text antialiased selection:bg-editorial-accent/15 selection:text-editorial-text min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
