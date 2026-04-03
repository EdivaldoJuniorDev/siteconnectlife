import { Metadata } from "next";
import EsteticaDemo from "./EsteticaDemo";

export const metadata: Metadata = {
  title: "Íris Estética Avançada — Clínica de Estética em Manaus",
  description:
    "Botox, preenchimento labial e tratamentos faciais premium em Manaus. Resultados naturais com profissionais certificados. Agende sua avaliação.",
};

export default function Page() {
  return <EsteticaDemo />;
}
