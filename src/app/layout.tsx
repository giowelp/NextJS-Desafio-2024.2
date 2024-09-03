import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/header/nav";

// Import das fontes locais

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/HELVETICA.ttf",
    },
  ],
  variable: "--font-helvetica",
});

const helveticaRounded = localFont({
  src: [
    {
      path: "../public/fonts/HELVETICA-ROUNDED.ttf",
    },
  ],
  variable: "--font-helveticaRounded",
});

const helveticaLight = localFont({
  src: [
    {
      path: "../public/fonts/HELVETICA-LIGHT.otf",
    },
  ],
  variable: "--font-helveticaLight",
});

const helveticaBold = localFont({
  src: [
    {
      path: "../public/fonts/HELVETICA-BOLD.ttf",
    },
  ],
  variable: "--font-helveticaBold",
});

const catullBQ = localFont({
  src: [
    {
      path: "../public/fonts/CATULL.ttf",
    },
  ],
  variable: "--font-catullBQ",
});

export const metadata: Metadata = {
  title: "VANGUARD",
  description: "E-commerce de mangás",
};


// Normal

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html
      lang="en"
      className={`${helvetica.variable} ${helveticaRounded.variable} ${helveticaLight.variable} ${helveticaBold.variable} ${catullBQ.variable}`}
    >
      
      <body>
      <Header />
      {children}</body>
    </html>
  );
}
