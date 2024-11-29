import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { staticMetadata } from "@/utils/staticMetadata";
import ReactQueryProvider from "@/utils/providers/reactQueryProvider";
import "@/styles/globals.css";
import MainLayout from "@/components/layout/MainLayout";

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
    <html lang='fa'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <main className='main'>
            <MainLayout>{children}</MainLayout>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
