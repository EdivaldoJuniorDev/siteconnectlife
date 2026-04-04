import { Metadata } from "next";
import OdontoDemo from "./OdontoDemo";

export const metadata: Metadata = {
  title: "OdontoVida — Clínica Odontológica em Manaus",
  description:
    "Clareamento, implantes e estética dental com tecnologia moderna e atendimento humanizado em Manaus. Agende sua avaliação gratuita.",
  openGraph: {
    title: "OdontoVida — Clínica Odontológica em Manaus",
    description:
      "Seu sorriso perfeito começa com uma conversa. Agende sua avaliação gratuita.",
    url: "https://connectlife.com.br/demo/odonto",
    siteName: "OdontoVida",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <OdontoDemo />;
}
