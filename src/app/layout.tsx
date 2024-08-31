import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";



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

export const metadata: Metadata = {
  title: "VANGUARD",
  description: "Desafio Next.JS, Typescript, Tailwind, Prisma, semestre 2024.2 para todos os membros da Code JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${helvetica.variable} ${helveticaRounded.variable} ${helveticaLight.variable} ${helveticaBold.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
