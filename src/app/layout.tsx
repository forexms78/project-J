import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "project-j",
  description: "project-june",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={inter.className}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
      </body>
    </html>
  );
}
