import { Inter } from "next/font/google";
import "./globals.css";

import Skelaton from "@/component/Home/skelaton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://portfolio-sifat99270s-projects.vercel.app'),
    title: "sifat",
    description: "portfolio website this web site make by sifat",
    keywords: [
      "sifat",
      "rasifat",
      "smn",
      "portfolio",
      "me",
      "i",
      "king",
      "ras",
      "website",
      "portfolio",
      "website",
    ],
    openGraph: {
      title: 'sifat',
      description: 'portfolio',
      url: 'https://agency.teamrabbil.com',
      siteName: 'smn',
      images: [
        {
          url: 'https://agency.teamrabbil.com/files/istockphoto-1017296544-170667a.jpg', // Must be an absolute URL
          width: 800,
          height: 600,
        },
        {
          url: 'https://agency.teamrabbil.com/files/istockphoto-1017296544-170667a.jpg', // Must be an absolute URL
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  }
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
