import { IBM_Plex_Sans_Thai, Inter } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${ibmPlexThai.variable} ${inter.variable} font-sans`}>
      <body className="bg-ultra-dark text-foreground antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
