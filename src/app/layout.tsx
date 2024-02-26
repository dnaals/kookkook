"use client";
import Foot from "@/components/UIUX/Foot";
import Head from "@/components/UIUX/Head";
import { usePathname } from "next/navigation";
import '@/components/style/common.scss'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const url = usePathname();
  const urlPath = url != '/';

  return (
    <html lang="en">
      <body>
        <header>
          {urlPath && <Head />}
        </header>
        <main>{children}</main>
        <footer>
          {urlPath && <Foot />}
        </footer>

      </body>
    </html>

  );
}
