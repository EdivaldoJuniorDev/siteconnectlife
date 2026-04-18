import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | ConnectLife Tecnologia",
  description:
    "Termos e condições de uso do site da ConnectLife Tecnologia.",
  alternates: { canonical: "https://connectlife.com.br/legal/termos" },
  robots: { index: true, follow: true },
};

const LAST_UPDATE = "18 de abril de 2026";

export default function TermosDeUso() {
  return (
    <>
      <h1>Termos de Uso</h1>
      <p>
        <strong>Última atualização:</strong> {LAST_UPDATE}
      </p>

      <p>
        Estes Termos de Uso regem o acesso e a utilização do site{" "}
        <a href="https://connectlife.com.br">connectlife.com.br</a> e dos
        serviços prestados pela ConnectLife Tecnologia. Ao acessar ou usar o
        site, você concorda com os termos abaixo.
      </p>

      <h2>1. Sobre a ConnectLife</h2>
      <p>
        ConnectLife Tecnologia é uma software house sediada em Manaus/AM,
        especializada em criação de sites, Micro-SaaS, SaaS e automações.
      </p>

      <h2>2. Uso do site</h2>
      <p>
        Você concorda em usar o site apenas para finalidades lícitas e em
        conformidade com estes Termos, a Política de Privacidade e a legislação
        aplicável. É vedado:
      </p>
      <ul>
        <li>tentar acessar áreas restritas sem autorização;</li>
        <li>
          executar ações que comprometam a disponibilidade, integridade ou
          segurança do site (ataques, scraping massivo, engenharia reversa);
        </li>
        <li>copiar, redistribuir ou revender conteúdo sem autorização;</li>
        <li>usar dados pessoais de terceiros coletados no site para fins não autorizados.</li>
      </ul>

      <h2>3. Propriedade intelectual</h2>
      <p>
        O conteúdo do site — textos, imagens, logos, marcas, vídeos, código e
        layout — é de titularidade da ConnectLife ou licenciado a ela, e
        protegido pelas leis de propriedade intelectual. É permitido o acesso
        para uso pessoal e informativo; qualquer outro uso requer autorização
        prévia e por escrito.
      </p>

      <h2>4. Serviços e orçamentos</h2>
      <p>
        Os valores exibidos no site têm caráter indicativo. Propostas
        definitivas serão formalizadas em contrato específico após briefing. A
        execução depende de aceite do escopo, prazo e investimento.
      </p>

      <h2>5. Links externos</h2>
      <p>
        O site pode conter links para sites de terceiros. A ConnectLife não se
        responsabiliza pelo conteúdo, disponibilidade ou práticas de privacidade
        desses sites.
      </p>

      <h2>6. Garantias e responsabilidade</h2>
      <p>
        O site é disponibilizado &ldquo;como está&rdquo;. A ConnectLife envida
        esforços razoáveis para manter a operação estável, mas não garante
        disponibilidade ininterrupta ou ausência de erros. Na máxima medida
        permitida em lei, a ConnectLife não se responsabiliza por danos
        indiretos, lucros cessantes ou perda de dados decorrentes do uso do
        site.
      </p>

      <h2>7. Comunicação comercial</h2>
      <p>
        Ao fornecer seus dados em formulários ou via WhatsApp, você autoriza o
        contato comercial para prestação de esclarecimentos e envio de
        propostas relacionadas à sua solicitação. Comunicações de marketing
        dependem de consentimento específico, revogável a qualquer momento.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Estes Termos podem ser atualizados periodicamente. A data de última
        atualização fica visível no topo. O uso continuado do site após
        alterações implica ciência e aceite.
      </p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil.
        Fica eleito o foro da Comarca de Manaus/AM para dirimir controvérsias,
        renunciando as partes a qualquer outro, por mais privilegiado que seja.
      </p>

      <h2>10. Contato</h2>
      <p>
        Dúvidas sobre estes Termos?{" "}
        <a href="mailto:contato@connectlife.com.br">
          contato@connectlife.com.br
        </a>
        .
      </p>
    </>
  );
}
