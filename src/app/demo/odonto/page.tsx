import { Metadata } from "next";
import OdontoDemo from "./OdontoDemo";

export const metadata: Metadata = {
  title: "OdontoVida — Clínica Odontológica em Manaus",
  description:
    "Sorria com confiança. Clareamento, implantes e tratamentos estéticos com agendamento rápido em Manaus. Agende sua avaliação gratuita.",
};

export default function Page() {
  return <OdontoDemo />;
}
