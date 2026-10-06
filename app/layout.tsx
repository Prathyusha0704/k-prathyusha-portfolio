import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Portfolio of K Prathyusha, a Computer Science Engineering graduate with skills in Java, Python, SQL, backend development, REST APIs, database management, AI/ML and data analysis.";

export const metadata: Metadata = {
  title: "K Prathyusha | Computer Science Engineer | Software Developer",
  description,
  metadataBase: new URL("https://k-prathyusha-portfolio.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "K Prathyusha | Computer Science Engineer | Software Developer",
    description,
    type: "website",
    siteName: "K Prathyusha Portfolio",
  },
  twitter: {
    card: "summary",
    title: "K Prathyusha | Software Developer",
    description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
