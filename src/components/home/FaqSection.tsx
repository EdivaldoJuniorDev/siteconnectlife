import Accordion from "@/components/ui/Accordion";
import FadeUp from "@/components/ui/FadeUp";

export const FAQ_ITEMS = [
  {
    id: "prazo",
    question: "Quanto tempo leva para ter meu site pronto?",
    answer:
      "Landing pages ficam prontas em 3 a 5 dias úteis. Sites profissionais em 7 a 10 dias. O prazo começa após a aprovação do layout, não do pagamento.",
  },
  {
    id: "incluso",
    question: "O que está incluso no preço?",
    answer:
      "Domínio .com.br, hospedagem por 1 ano, certificado SSL, e-mail profissional e configuração de SEO básico. Nada de taxa escondida depois.",
  },
  {
    id: "alteracoes",
    question: "Posso pedir alterações depois que o site ficar pronto?",
    answer:
      "Sim. Os planos de manutenção mensal cobrem atualizações de conteúdo, correções e pequenas melhorias. Projetos fora do escopo são orçados separadamente.",
  },
  {
    id: "fora-manaus",
    question: "Vocês trabalham com clientes fora de Manaus?",
    answer:
      "Sim. Atendemos todo o Brasil remotamente por videochamada e WhatsApp. O processo é idêntico ao atendimento presencial.",
  },
  {
    id: "dependencia",
    question: "Vou depender de vocês para sempre?",
    answer:
      "Não. Você recebe acesso total ao código, ao domínio e à hospedagem. Se quiser trocar de fornecedor, é só levar. Acreditamos em transparência, não em dependência.",
  },
  {
    id: "pagamento",
    question: "Quais formas de pagamento vocês aceitam?",
    answer:
      "Pix, transferência bancária e cartão de crédito em até 12x. 50% na aprovação do layout, 50% na entrega.",
  },
];

export default function FaqSection() {
  return (
    <section className="bg-surface-warm py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <FadeUp className="mb-12">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">
            Perguntas frequentes
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-text-primary md:text-4xl">
            Tira-dúvidas rápido.
          </h2>
        </FadeUp>

        <FadeUp>
          <Accordion items={FAQ_ITEMS} />
        </FadeUp>
      </div>
    </section>
  );
}
