import { Metadata } from "next";
import EsteticaDemo from "./EsteticaDemo";

export const metadata: Metadata = {
  title: "Íris Estética — Clínica de Estética Avançada em Manaus",
  description:
    "Tratamentos estéticos faciais e corporais com resultados naturais. Toxina, preenchimento, bioestimuladores. Agende sua avaliação.",
  openGraph: {
    title: "Íris Estética — Clínica de Estética Avançada em Manaus",
    description:
      "Beleza que respeita quem você é. Agende sua avaliação gratuita.",
    url: "https://connectlife.com.br/demo/estetica",
    siteName: "Íris Estética",
    locale: "pt_BR",
    type: "website",
  },
};

export default function Page() {
  return <EsteticaDemo />;
}
