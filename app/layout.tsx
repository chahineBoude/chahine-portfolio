import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarsCanvas } from "./components/StarsBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chahine's portfolio",
  description: "Chahine's Official Portfolio By Chahine Boudemagh",
  keywords: [
    "Developer",
    "Portfolio",
    "Developer Portflio",
    "Full stack",
    "Front end",
    "Back end",
    "Chahine Boudemagh",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={inter.className}>{children}</main>
        <StarsCanvas />
      </body>
    </html>
  );
}
