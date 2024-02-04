import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Skelaton from "@/component/Home/skelaton";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {

  return {
    metadataBase: new URL(process.env.HOST),
    title: "sifat",
    description: 'some des',
    keywords: ' \sifat, rasifat, smn, portfolio, me, i, king, ras, website, portfolio website,',
    openGraph: {
      images: `${process.env.HOST}/logo.png`,
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Suspense fallback={<Skelaton />} />
        {children}
      </body>
    </html>
  );
}
