import { Inter } from "next/font/google";
import "./globals.css";

import Skelaton from "@/component/Home/skelaton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata() {
  const res = await fetch(`${process.env.HOST}/api/graph`, { cache: "no-store" });
  const result = await res.json();
  if (result['status'] === 'success') {
    return {
      metadataBase: new URL(process.env.HOST),
      title: result['data']['title'],
      description: result['data']['description'],
      keywords: result['data']['keywords'],

      openGraph: {
        images: result['data']['openGraph']
      },
    }
  }
  return;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <Suspense fallback={<Skelaton />}>{children}</Suspense>
      </body>
    </html>
  );
}
