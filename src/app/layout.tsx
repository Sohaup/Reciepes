import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/ui/navBar/NavBar";
import ThemeProvider from "@/providers/themeProvider";
import Footer from "./_components/ui/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reciepes ",
  description: "website For Reciepes ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden max-w-screen `}
      >
        <ThemeProvider >
          <>
            <NavBar />
            {children}
            <Footer />
          </>
        </ThemeProvider>

      </body>
    </html>
  );
}
