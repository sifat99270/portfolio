import { Inter } from "next/font/google";
import "./globals.css";

import Skelaton from "@/component/Home/skelaton";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });




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
