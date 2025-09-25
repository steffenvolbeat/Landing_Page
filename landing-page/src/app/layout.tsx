import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./components/theme/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexcent - Modern Landing Page", // Titel der Seite angepasst
  description: "Modern Landing Page mit Next.js 13 und Tailwind CSS and Dark/Light Mode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning für Theme  */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*ThemeProvider umschließt alle Children */}
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
