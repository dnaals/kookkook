import Foot from "@/components/UIUX/Foot";
import Head from "@/components/UIUX/Head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        <header><Head /></header>
        <main>{children}</main>
        <footer><Foot /></footer>

      </body>
    </html>

  );
}
