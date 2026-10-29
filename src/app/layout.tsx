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
    default: "Fahmi Muhammad Al Hafizh — Information Systems, UI/UX Design, Product & Business Analysis",
    template: "%s | Fahmi Muhammad Al Hafizh",
  },
  description:
    "Personal portfolio of Fahmi Muhammad Al Hafizh, Information Systems graduate (GPA 3.74/4.00) from STT Terpadu Nurul Fikri focused on System Analysis, UI/UX Design, and Product & Business Analysis.",
  keywords: [
    "Fahmi Muhammad Al Hafizh",
    "Information Systems",
    "System Analyst",
    "UI/UX Designer",
    "Product Analysis",
    "Business Analyst",
    "Web Developer",
    "Laravel",
    "Figma",
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
      "Information Systems graduate (GPA 3.74/4.00) focused on System Analysis, UI/UX Design, and Product & Business Analysis.",
    siteName: "Fahmi Muhammad Al Hafizh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahmi Muhammad Al Hafizh — Information Systems, UI/UX Design, Product & Business Analysis",
    description:
      "Information Systems graduate (GPA 3.74/4.00) focused on System Analysis, UI/UX Design, and Product & Business Analysis.",
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
