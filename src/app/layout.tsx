import type { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Criação de Site para Clínicas em Manaus | ConnectLife",
  description:
    "Sites profissionais para clínicas, consultórios e médicos em Manaus. Entrega em 7 dias, Next.js, foco em captação de pacientes. A partir de R$1.490.",
  keywords: [
    "criação de site para clínica Manaus",
    "site para dentista Manaus",
    "site para consultório médico Manaus",
    "agência de sites Manaus",
    "desenvolvimento de site Manaus",
  ],
  openGraph: {
    title: "Criação de Site para Clínicas em Manaus | ConnectLife",
    description:
      "Sites profissionais para clínicas, consultórios e médicos em Manaus. Entrega em 7 dias, Next.js, foco em captação de pacientes. A partir de R$1.490.",
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
    <html lang="pt-BR" className={`${dmSerif.variable} ${geist.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
