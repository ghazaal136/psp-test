import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/globals.css";
import { staticMetadata } from "@/utils/staticMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: staticMetadata.title,
  description: staticMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
