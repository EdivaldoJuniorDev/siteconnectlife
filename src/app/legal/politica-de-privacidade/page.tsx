import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | ConnectLife Tecnologia",
  description:
    "Como a ConnectLife Tecnologia coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
  alternates: { canonical: "https://connectlife.com.br/legal/politica-de-privacidade" },
  robots: { index: true, follow: true },
};

const LAST_UPDATE = "18 de abril de 2026";

export default function PoliticaDePrivacidade() {
  return (
    <>
      <h1>Política de Privacidade</h1>
      <p>
        <strong>Última atualização:</strong> {LAST_UPDATE}
      </p>

      <p>
        A ConnectLife Tecnologia (&ldquo;ConnectLife&rdquo;, &ldquo;nós&rdquo;)
        respeita a sua privacidade e se compromete a proteger os dados pessoais
        que você nos confia, em conformidade com a Lei Geral de Proteção de
        Dados Pessoais (LGPD — Lei n.º 13.709/2018).
      </p>

      <h2>1. Quem somos</h2>
      <p>
        ConnectLife Tecnologia, software house sediada em Manaus/AM, atuando
        com criação de sites, Micro-SaaS, SaaS completo e automações.
      </p>
      <ul>
        <li>
          <strong>E-mail para contato LGPD:</strong>{" "}
          <a href="mailto:contato@connectlife.com.br">
            contato@connectlife.com.br
          </a>
        </li>
        <li>
          <strong>WhatsApp comercial:</strong>{" "}
          <a
            href="https://wa.me/5592982078515"
            target="_blank"
            rel="noopener noreferrer"
          >
            +55 (92) 98207-8515
          </a>
        </li>
      </ul>

      <h2>2. Quais dados coletamos</h2>
      <ul>
        <li>
          <strong>Dados fornecidos por você:</strong> nome, e-mail, telefone e
          mensagem — quando preenche formulários ou nos contata via WhatsApp.
        </li>
        <li>
          <strong>Dados de navegação:</strong> IP, user-agent, páginas visitadas,
          tempo de permanência e eventos de clique, coletados via cookies de
          analytics <em>apenas se você consentir</em>.
        </li>
        <li>
          <strong>Dados de marketing:</strong> identificadores de campanha e
          conversão, coletados via pixels de anúncio <em>apenas se você
          consentir</em>.
        </li>
      </ul>

      <h2>3. Finalidades do tratamento</h2>
      <ul>
        <li>Responder a pedidos de orçamento e contato comercial.</li>
        <li>Prestar e executar serviços contratados.</li>
        <li>
          Medir audiência e melhorar a experiência de navegação (base:
          consentimento).
        </li>
        <li>
          Realizar ações de marketing e retargeting (base: consentimento).
        </li>
        <li>Cumprir obrigações legais, contábeis e fiscais.</li>
      </ul>

      <h2>4. Bases legais (art. 7º e 11º da LGPD)</h2>
      <ul>
        <li>
          <strong>Execução de contrato</strong> — quando processamos dados para
          prestar o serviço que você contratou.
        </li>
        <li>
          <strong>Consentimento</strong> — para cookies de analytics e marketing,
          comunicações de e-mail e pixels de conversão.
        </li>
        <li>
          <strong>Legítimo interesse</strong> — para prevenção de fraude,
          segurança da aplicação e medição básica do funcionamento do site.
        </li>
        <li>
          <strong>Obrigação legal/regulatória</strong> — para cumprir prazos de
          retenção fiscal e contábil.
        </li>
      </ul>

      <h2>5. Cookies e tecnologias similares</h2>
      <p>
        Usamos cookies em três categorias, com mecanismo de consentimento
        granular:
      </p>
      <ul>
        <li>
          <strong>Necessários</strong> — essenciais para o funcionamento
          (sempre ativos).
        </li>
        <li>
          <strong>Analytics</strong> — medem uso agregado do site (Google
          Analytics).
        </li>
        <li>
          <strong>Marketing</strong> — personalização de anúncios e medição de
          campanhas (Meta Pixel, Google Ads).
        </li>
      </ul>
      <p>
        Você pode alterar suas preferências a qualquer momento limpando os
        cookies do seu navegador ou revisitando o banner de consentimento.
      </p>

      <h2>6. Compartilhamento com terceiros</h2>
      <p>
        Compartilhamos dados estritamente com operadores necessários para
        prestar o serviço: Vercel (hospedagem), Google (analytics e anúncios,
        se consentido), Meta (anúncios, se consentido), provedores de e-mail
        transacional e sistemas internos de CRM. Não vendemos seus dados.
      </p>

      <h2>7. Transferência internacional</h2>
      <p>
        Alguns operadores estão sediados fora do Brasil (EUA, UE). As
        transferências respeitam o art. 33 da LGPD, baseadas em cláusulas
        contratuais padrão e em finalidades legítimas.
      </p>

      <h2>8. Retenção</h2>
      <p>
        Dados de contato de leads são mantidos pelo prazo necessário ao
        atendimento comercial e, no máximo, por 24 meses após o último contato,
        salvo obrigação legal de retenção maior.
      </p>

      <h2>9. Seus direitos (art. 18 da LGPD)</h2>
      <p>
        Você pode, a qualquer momento, solicitar: confirmação de tratamento;
        acesso; correção; anonimização, bloqueio ou eliminação; portabilidade;
        eliminação dos dados tratados com consentimento; informação sobre
        compartilhamento; e revogação do consentimento. Basta enviar sua
        solicitação para{" "}
        <a href="mailto:contato@connectlife.com.br">
          contato@connectlife.com.br
        </a>
        . Responderemos em até 15 dias.
      </p>

      <h2>10. Segurança</h2>
      <p>
        Aplicamos medidas técnicas e organizacionais razoáveis: HTTPS
        obrigatório, headers de segurança (CSP, HSTS), controle de acesso,
        revisão de código e princípio do menor privilégio. Nenhum método é 100%
        seguro; notificaremos incidentes relevantes conforme art. 48 da LGPD.
      </p>

      <h2>11. Crianças e adolescentes</h2>
      <p>
        Este site não é direcionado a menores de 18 anos. Não coletamos
        intencionalmente dados de menores sem o consentimento de seus
        responsáveis legais.
      </p>

      <h2>12. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta política. Mudanças relevantes serão comunicadas
        no site e, quando aplicável, por e-mail. A data de última atualização
        fica sempre visível no topo.
      </p>

      <h2>13. Encarregado (DPO)</h2>
      <p>
        Até a indicação formal de um encarregado, o canal oficial de
        atendimento LGPD é{" "}
        <a href="mailto:contato@connectlife.com.br">
          contato@connectlife.com.br
        </a>
        .
      </p>
    </>
  );
}
