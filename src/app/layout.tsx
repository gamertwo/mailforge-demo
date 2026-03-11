import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import { SiteFooter } from "@/components/mailforge/site-footer";
import { SiteHeader } from "@/components/mailforge/site-header";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MailForge Demo",
  description: "AI cold email personalizer demo with a full Next.js multi-page experience.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable}`}>
        <div className="mf-grid" />
        <div className="mf-glow mf-glow-right" />
        <div className="mf-glow mf-glow-left" />
        <div className="mf-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
