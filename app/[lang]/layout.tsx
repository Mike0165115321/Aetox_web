import { IBM_Plex_Sans, IBM_Plex_Sans_Thai } from "next/font/google";
import "../globals.css";
import Script from "next/script"; // นำเข้า Script จาก next/script

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const ibmPlexThai = IBM_Plex_Sans_Thai({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

export const metadata = {
  title: "Aetox | AI & Workflow Automation",
  description: "หยุดเผาเวลาไปกับงานซ้ำซ้อน เราสร้างระบบ AI อัตโนมัติเพื่อธุรกิจคุณ",
};

export async function generateStaticParams() {
  return [{ lang: "th" }, { lang: "en" }];
}

import { CurrencyProvider } from "@/context/CurrencyContext";
import { ScrollProvider } from "@/context/ScrollContext";
import { GlobalBackground } from "@/components/layout/GlobalBackground";

export default async function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || 'th';

  return (
    <html lang={lang} className={`${ibmPlexThai.variable} ${ibmPlexSans.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="">
        {/* ใช้ next/script พร้อม strategy="beforeInteractive" เพื่อให้รันก่อน React Hydrate */}
        <Script id="theme-initializer" strategy="beforeInteractive">
          {`
            (function() {
              try {
                const saved = localStorage.getItem('aetox-theme');
                if (saved === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            })()
          `}
        </Script>
        
        <GlobalBackground />
        <ScrollProvider>
          <CurrencyProvider>
            <div className="relative z-10">
              {children}
            </div>
          </CurrencyProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
