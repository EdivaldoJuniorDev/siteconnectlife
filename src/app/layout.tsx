import type { Metadata } from "next";
import { DM_Serif_Display, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import CookieConsent from "@/components/consent/CookieConsent";
import ConsentBootstrap from "@/components/consent/ConsentBootstrap";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ConnectLife Tecnologia | Sites, SaaS e Automações — Manaus",
  description:
    "Software House em Manaus. Sites profissionais, Micro-SaaS, SaaS e Automações para negócios que querem crescer com tecnologia.",
  keywords: [
    "software house Manaus",
    "criação de site Manaus",
    "desenvolvimento de software Manaus",
    "automação Manaus",
    "SaaS Manaus",
  ],
  openGraph: {
    title: "ConnectLife Tecnologia | Sites, SaaS e Automações — Manaus",
    description:
      "Software House em Manaus. Sites profissionais, Micro-SaaS, SaaS e Automações para negócios.",
    url: "https://connectlife.com.br",
    siteName: "ConnectLife",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://connectlife.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSerif.variable} ${geist.variable} ${playfair.variable} ${cormorant.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        <ConsentBootstrap />
        <GoogleTagManager />
        <GoogleTagManagerNoScript />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
