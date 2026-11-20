import type { Metadata } from "next";
import { Geist, Geist_Mono , Inter , IBM_Plex_Sans_Thai , Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const nerdFont = localFont({
  src: "./fonts/JetBrainsMonoNerdFontMono-Regular.ttf",
  variable: "--font-nerd"
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  weight: "700",
})

const thaiFont = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  weight: ["100","200","300","400","500","600","700"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets:['latin'],
})

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created by TeetyK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nerdFont.variable} ${inter.variable} ${thaiFont.variable} ${plus_jakarta_sans.variable} h-full antialiased`}
    >
      <body className="bg-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">{children}</body>
    </html>
  );
}
