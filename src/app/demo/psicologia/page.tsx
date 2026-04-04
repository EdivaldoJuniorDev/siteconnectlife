import { Metadata } from "next";
import PsicologiaDemo from "./PsicologiaDemo";

export const metadata: Metadata = {
  title: "Dra. Camila Rocha — Psicóloga em Manaus | Psicoterapia Individual",
  description:
    "Psicoterapia individual para adultos. Terapia Cognitivo-Comportamental, Mindfulness e acolhimento genuíno. Atendimento presencial em Manaus e online.",
  openGraph: {
    title: "Dra. Camila Rocha — Psicóloga em Manaus",
    description:
      "Um espaço seguro para você se encontrar. Agende sua primeira sessão.",
    url: "https://connectlife.com.br/demo/psicologia",
    siteName: "Dra. Camila Rocha",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <PsicologiaDemo />;
}
