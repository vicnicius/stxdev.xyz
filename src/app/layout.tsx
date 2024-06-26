import type { Metadata } from "next";
import { Fira_Code as Mono, Inter_Tight as Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "(stxdev.xyz) - Stacks, Clarity and Bitcoin Development",
  description:
    "A blog about developing applications using blockchain technology, focusing on the Stacks & Bitcoin blockchains and the Clarity programming language.",
};

const sans = Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sans.className} ${sans.variable} ${mono.className} ${mono.variable} p-4 flex flex-col justify-between min-h-screen max-w-prose`}
      >
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
