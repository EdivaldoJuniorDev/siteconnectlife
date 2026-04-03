import { Metadata } from "next";
import PsicologiaDemo from "./PsicologiaDemo";

export const metadata: Metadata = {
  title: "Dra. Camila Rocha — Psicóloga em Manaus | CRP 20/0000",
  description:
    "Psicoterapia individual para adultos em Manaus. Atendimento presencial e online. Abordagem cognitivo-comportamental. Agende sua primeira sessão.",
};

export default function Page() {
  return <PsicologiaDemo />;
}
