import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { apiGetTitle } from "./api/actions";

const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = async () => {
  const title = await apiGetTitle();
  return {
    title,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
