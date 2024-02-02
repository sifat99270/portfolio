import { Inter } from "next/font/google";
import "./globals.css";

import "bootstrap-icons/font/bootstrap-icons.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata() {

  return {
    metadataBase: new URL(process.env.BASE_URL),
    title: "sifat",
    description: 'some des',
    keywords: ' \sifat, rasifat, smn, portfolio, me, i, king, ras, website, portfolio website,',
    openGraph: {
      images: "/logo.png",
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
