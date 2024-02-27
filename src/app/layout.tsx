"use client";
import Foot from "@/components/UIUX/Foot";
import Head from "@/components/UIUX/Head";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import '@/components/style/common.scss'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const url = usePathname();
  const urlPath = url != ('/'||`/home/28`);

  return (
    <html lang="en">
      <body>
        <header>
          {urlPath && <Head />}
        </header>
        <SessionProvider>
          <main>{children}</main>  
        </SessionProvider>
        <footer>
          {urlPath && <Foot />}
        </footer>

      </body>
    </html>

  );
}
