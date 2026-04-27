import { IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import "../globals.css";

const ibmPlexThai = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-ibm-plex-thai",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

export default function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params?.lang || 'th';

  return (
    <html lang={lang} className={`${ibmPlexThai.variable} ${inter.variable}`}>
      <body className="bg-aetox-bg text-aetox-text-main font-sans antialiased overflow-x-hidden min-h-screen">
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
