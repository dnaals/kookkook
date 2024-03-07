"use client";
import Foot from "@/components/UIUX/Foot";
import Head from "@/components/UIUX/Head";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";
import '@/components/style/common.scss'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const url = usePathname();
  const isHomePage = url === '/';
  const isVariablePage = url.startsWith('/home/') && url.split('/').length > 2;
  return (
    <html lang="en">
      <body>
        <header>
        {!isHomePage && !isVariablePage && <Head />}
        </header>
        <SessionProvider>
          <main>{children}</main>  
        </SessionProvider>
        <footer>
        {!isHomePage && !isVariablePage && <Foot />}
        </footer>

      </body>
    </html>

  );
}
