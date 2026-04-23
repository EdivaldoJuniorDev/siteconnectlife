# Briefing — ConnectLife Home v2
> Cole este arquivo no Claude Code para redesenhar a home da connectlife.com.br
> O hero atual está bom. O problema está no restante — fraco, sem densidade, sem punch.
> Este briefing reconstrói tudo após o hero.

---

## DIAGNÓSTICO DO SITE ATUAL

Hero: ✅ bom — vídeo animado, headline forte, fundo escuro
Serviços: ❌ 4 cards soltos, sem profundidade
Diferenciais: ❌ apenas 2 números, seção cortada
CTA final: ❌ funciona mas seção vazia em volta
Problema geral: poucas seções, pouco conteúdo, sem ritmo visual

---

## REFERÊNCIA VISUAL: FIRECRAWL.DEV

O que extrair da estética do Firecrawl:
- Seções com fundo alternado (escuro → claro → escuro) criando ritmo
- Grid de dots/linhas finas como textura de fundo
- Badges técnicos pequenos (pills com ícone + texto) espalhados
- Números grandes com label pequeno acima (estilo editorial)
- Ícones simples e funcionais, não decorativos
- Código ou terminal mockado como elemento visual
- Bordas finíssimas 1px em tudo
- Espaçamento generoso mas com densidade de conteúdo
- Animações sutis: fade-in no scroll, contadores, linha que cresce

---

## DESIGN SYSTEM (manter o atual + extensões)

```
Fundo escuro:       #0F0F0E
Fundo claro:        #F7F5F2  (off-white quente)
Fundo meio-tom:     #F0EDE8  (seções alternadas no claro)
Superfície card:    #FFFFFF com borda 1px rgba(0,0,0,0.08)
Superfície escura:  #1A1A18  (cards em fundo escuro)
Accent:             #1D9E75  (verde) — usar com parcimônia
Accent laranja:     manter o laranja atual do hero se já existe
Texto primário:     #0F0F0E  /  #FFFFFF (conforme fundo)
Texto secundário:   #6B6B67  /  rgba(255,255,255,0.5)
Border claro:       1px solid rgba(0,0,0,0.08)
Border escuro:      1px solid rgba(255,255,255,0.08)
Border-radius:      0px — ângulos retos em tudo
Fonte display:      manter a atual do hero
Fonte corpo:        manter a atual

Textura dots:       radial-gradient pontilhado, opacity 0.04, espaçamento 24px
Linhas decorativas: 1px horizontal/vertical, rgba(255,255,255,0.06) em fundos escuros
```

---

## ESTRUTURA COMPLETA DA HOME

```
1. NAV          (manter atual)
2. HERO         (manter atual — vídeo animado, ok)
3. LOGOS        (social proof — novo)
4. SERVIÇOS     (rebuild completo)
5. COMO FAZEMOS (novo — processo técnico)
6. NÚMEROS      (rebuild — mais impacto)
7. STACK        (novo — badges técnicos)
8. CASOS DE USO (novo — o que já entregamos)
9. PARA QUEM    (novo — segmentos)
10. DEPOIMENTOS (novo)
11. FAQ         (novo)
12. CTA FINAL   (rebuild)
13. FOOTER      (manter/melhorar)
```

---

## SEÇÃO 3 — LOGOS / SOCIAL PROOF

**Fundo:** #F7F5F2 (claro)
**Layout:** faixa fina, logos em linha com scroll infinito (marquee)

```
Tag acima:   "Negócios que já confiam na ConnectLife"
             [10px uppercase, #6B6B67, centralizado]

Logos:       Como não temos logos reais de clientes ainda,
             usar logos das TECNOLOGIAS que dominamos —
             posiciona autoridade técnica:

             Next.js · Vercel · Supabase · Stripe · Tailwind ·
             Framer Motion · OpenAI · Google Cloud

             [logos em SVG inline, cinza #B4B2A9, altura 24px]
             [marquee com animação CSS infinita, velocidade suave]
             [fade nas bordas esquerda e direita com gradient mask]

Abaixo:      linha 1px rgba(0,0,0,0.06)
```

---

## SEÇÃO 4 — SERVIÇOS (rebuild completo)

**Fundo:** #F7F5F2 (claro)
**Layout:** título esquerda + grid de cards

```
Tag:         "SERVIÇOS"
             [10px uppercase verde, letter-spacing 2px]

Headline:    O que a ConnectLife
             constrói para você.
             [display 40px / 28px mobile, max-width 480px]

Subtexto:    Da primeira conversa ao produto no ar.
             [14px, #6B6B67]

GRID DE SERVIÇOS (2 colunas desktop / 1 coluna mobile):

  CARD 1 — Sites e Landing Pages     [card grande, span 1]
  Ícone: monitor SVG 24px
  Badge: "A partir de R$ 2.500" [pill verde]
  Título: Site que agenda pacientes
          enquanto você dorme.
  Desc:   Não é só uma página bonita.
          É sua recepção funcionando 24h —
          captando, informando e convertendo
          visitas em clientes agendados.
  Lista:
    → Design exclusivo por segmento
    → SEO local configurado desde o dia 1
    → Domínio + hospedagem + email inclusos
    → Entrega em 5 a 7 dias úteis
  Link:   "Ver pacotes →" [verde, sem fundo]
  [borda-top 2px verde]

  CARD 2 — Automações e Integrações  [card normal]
  Ícone: raio/zap SVG 24px
  Badge: "Sob consulta" [pill cinza]
  Título: Automação que elimina
          o trabalho repetitivo.
  Desc:   Confirmação de consulta, follow-up,
          lembretes, relatórios — tudo rodando
          sozinho. Você foca no que importa.
  Link:   "Saiba mais →" [cinza]
  [borda-top 1px rgba(0,0,0,0.08)]

  CARD 3 — Micro-SaaS               [card normal]
  Ícone: puzzle SVG 24px
  Badge: "Sob consulta" [pill cinza]
  Título: Produto digital enxuto
          e rentável.
  Desc:   Da ideia ao MVP funcional com
          stack moderna. Valide seu produto
          no mercado antes de investir pesado.
  Link:   "Saiba mais →" [cinza]

  CARD 4 — SaaS Completo            [card normal]
  Ícone: server SVG 24px
  Badge: "Sob consulta" [pill cinza]
  Título: Plataforma robusta
          do zero ao deploy.
  Desc:   Autenticação, billing, dashboard,
          multi-tenant — toda infraestrutura
          que seu negócio precisa para escalar.
  Link:   "Saiba mais →" [cinza]

Estilo dos cards:
  background: white
  border: 1px solid rgba(0,0,0,0.08)
  padding: 32px
  border-radius: 0
  hover: border-color rgba(0,0,0,0.2), translateY(-2px) suave
  transition: all 200ms ease
```

---

## SEÇÃO 5 — COMO FAZEMOS (novo — fundo escuro)

**Fundo:** #0F0F0E (escuro)
**Layout:** duas colunas — esquerda texto fixo (sticky), direita steps que scrollam

```
Tag:         "PROCESSO"
             [10px uppercase rgba(255,255,255,0.4)]

Headline:    Sem reunião toda semana.
             Sem surpresa no final.
             [display 40px, branco]

Subtexto:    Do briefing ao deploy em etapas
             claras e previsíveis.
             [16px, rgba(255,255,255,0.5)]

STEPS (4 cards que aparecem no scroll com animação sequencial):

  STEP 01
  Número:    01
             [Playfair/display, 64px, outline stroke verde, opacity 0.3]
  Título:    Você explica. A gente escuta.
             [18px, branco, bold]
  Desc:      Uma conversa de 30 minutos pelo WhatsApp.
             Entendemos seu negócio, seu público e seu objetivo.
             Sem formulário de 40 campos.
             [14px, rgba(255,255,255,0.5)]
  Duração:   "~30 minutos" [badge pill, borda verde, texto verde]

  STEP 02
  Número:    02
  Título:    Mostramos antes de construir.
  Desc:      Você aprova o visual antes de escrevermos
             uma linha de código. Sem surpresa no design.
  Duração:   "1 a 2 dias"

  STEP 03
  Número:    03
  Título:    Construímos com tecnologia de ponta.
  Desc:      Código limpo, SEO configurado, performance
             otimizada desde o primeiro commit.
             Stack: Next.js, Supabase, Vercel.
  Duração:   "3 a 7 dias"

  STEP 04
  Número:    04
  Título:    No ar. De verdade.
  Desc:      Domínio, hospedagem, SSL, email — tudo
             configurado e testado. Você recebe as chaves
             do projeto, não uma dependência eterna.
  Duração:   "1 dia"

  [Linha vertical verde 1px conectando os steps]
  [Cada step aparece com fadeUp ao scrollar — useInView]
  [Textura de dots no fundo escuro]

CTA inline:  [botão outline branco] Iniciar projeto →
```

---

## SEÇÃO 6 — NÚMEROS (rebuild com mais impacto)

**Fundo:** #F7F5F2 (claro)
**Layout:** 4 números grandes em grid + linha decorativa

```
Tag:         "EM NÚMEROS"

[Grid 4 colunas desktop / 2x2 mobile]

  Número 1:
  Label:     "PROJETOS ENTREGUES"
  Valor:     8+
             [Playfair Display, 72px, #0F0F0E]
  Desc:      Sites, sistemas e automações
             entregues nos últimos 12 meses.

  Número 2:
  Label:     "PRAZO MÉDIO DE ENTREGA"
  Valor:     7
             [72px]
  Sufixo:    "dias"
             [24px, #6B6B67]
  Desc:      Do briefing ao site no ar.
             Sem enrolação.

  Número 3:
  Label:     "TECNOLOGIAS DOMINADAS"
  Valor:     12+
             [72px]
  Desc:      Stack moderna e integrada
             para cada tipo de projeto.

  Número 4:
  Label:     "SATISFAÇÃO DOS CLIENTES"
  Valor:     100%
             [72px, #1D9E75]
  Desc:      Todos os projetos entregues
             com aprovação total.

  [Separadores verticais 1px entre os números — desktop]
  [Números animam de 0 ao valor quando entram na viewport]
  [Animação: useInView + counter com easing]
```

---

## SEÇÃO 7 — STACK TÉCNICA (novo — fundo escuro)

**Fundo:** #0F0F0E
**Layout:** título centralizado + grid de badges técnicos + terminal mockado

```
Tag:         "TECNOLOGIA"

Headline:    As mesmas ferramentas que
             empresas de bilhões usam.
             [display 40px, branco, centralizado]

Subtexto:    Não porque é moderno.
             Porque entrega resultado real.
             [16px, rgba(255,255,255,0.5), centralizado]

GRID DE BADGES (wrap responsivo, centralizado):

  Cada badge:
  [ícone SVG 16px] [nome da tech]
  border: 1px solid rgba(255,255,255,0.12)
  background: rgba(255,255,255,0.04)
  padding: 10px 16px
  font-size: 13px
  color: rgba(255,255,255,0.7)
  hover: border-color rgba(255,255,255,0.3), color white

  Badges:
  ▸ Next.js 14         — "App Router, RSC, Server Actions"
  ▸ TypeScript         — "tipagem em 100% do código"
  ▸ Tailwind CSS       — "estilo sem CSS custom"
  ▸ Supabase           — "banco, auth e storage"
  ▸ Vercel             — "deploy e edge functions"
  ▸ Stripe             — "pagamentos e assinaturas"
  ▸ Framer Motion      — "animações de produção"
  ▸ Shadcn/ui          — "componentes acessíveis"
  ▸ Resend             — "email transacional"
  ▸ OpenAI / Gemini    — "IA integrada quando faz sentido"
  ▸ Prisma / Drizzle   — "ORM type-safe"
  ▸ Zod                — "validação de dados"

TERMINAL MOCKADO (elemento visual):
  Box com fundo #111, borda 1px rgba(255,255,255,0.1)
  Header com 3 círculos (vermelho, amarelo, verde) 8px
  Conteúdo animado tipo typing:

  $ npx create-next-app@latest meu-projeto
  ✓ TypeScript? Yes
  ✓ Tailwind CSS? Yes
  ✓ App Router? Yes

  $ git push && vercel deploy
  ✓ Build completed in 23s
  ✓ Ready: https://meu-projeto.vercel.app

  [Efeito cursor piscando no final]
  [Typing animation com delay entre linhas]
```

---

## SEÇÃO 8 — CASOS DE USO (novo — fundo claro)

**Fundo:** #F0EDE8 (tom mais quente)
**Layout:** título esquerda + 3 cards horizontais ou bento grid

```
Tag:         "O QUE JÁ ENTREGAMOS"

Headline:    Projetos reais.
             Resultados reais.
             [display 40px]

BENTO GRID (3 cards em layout assimétrico):

  CARD GRANDE (2/3 largura):
  Categoria: [badge] "Site Profissional"
  Projeto:   ERP para Loja de Cortinas — Manaus
  Desc:      Sistema completo de gestão com controle
             de pedidos, clientes, estoque e financeiro.
             Entregue em 2,5 meses.
  Resultado: "R$ 8.000 de contrato + R$ 450/mês MRR"
  Stack:     [badges mini] Next.js · Supabase · Vercel
  Visual:    placeholder cinza com ícone de código
             [div com aspect-ratio 16/9, fundo #E8E6E1]

  CARD MÉDIO (1/3 largura):
  Categoria: [badge] "Micro-SaaS"
  Projeto:   iEscala — Escalonamento de Enfermagem
  Desc:      Substituiu planilhas manuais por
             sistema de agendamento automatizado.
  Resultado: "MVP em 3 semanas"
  Stack:     [badges mini] Next.js · Supabase

  CARD MÉDIO (1/3 largura):
  Categoria: [badge] "Automação"
  Projeto:   SafeStack — Blueprints de Segurança
  Desc:      Plataforma SaaS para geração de
             documentação técnica com IA.
  Resultado: "Deploy global, Stripe integrado"
  Stack:     [badges mini] Next.js · Gemini · Stripe

  CARD MÉDIO (2/3 largura):
  Categoria: [badge] "Site para Clínica"
  Projeto:   Demos de Portfólio — Clínicas em Manaus
  Desc:      Landing pages com vídeo cinematográfico
             para clínicas de odontologia, estética
             e psicologia.
  Resultado: "3 demos prontos · entregas em 7 dias"
  Stack:     [badges mini] Next.js · Vercel · VEO3
  Link:      "Ver demos →" [/site]

Estilo cards:
  background: white
  border: 1px solid rgba(0,0,0,0.08)
  padding: 28px
  hover: translateY(-3px), sombra leve
```

---

## SEÇÃO 9 — PARA QUEM (novo — fundo escuro)

**Fundo:** #0F0F0E
**Layout:** 3 colunas com ícone grande + texto

```
Tag:         "PARA QUEM"

Headline:    Construímos para quem
             quer crescer de verdade.
             [display 40px, branco]

TRÊS PERFIS:

  Perfil 1:
  Ícone:     🏥 (substituir por SVG cruz médica 48px, verde)
  Título:    Clínicas e consultórios
             [18px, branco, bold]
  Desc:      Você tem expertise médica.
             A gente tem expertise digital.
             Juntos, sua agenda fica cheia.
  Lista:
    → Odontologia, estética, psicologia
    → Nutrição, fisioterapia, dermatologia
    → Qualquer especialidade em Manaus
  CTA:       "Ver solução para clínicas →" [/site, verde]

  Perfil 2:
  Ícone:     SVG briefcase 48px
  Título:    Empresas e profissionais
             liberais
  Desc:      Advogados, arquitetos, contadores,
             consultores. Presença digital que
             transmite autoridade e gera leads.
  Lista:
    → Site institucional profissional
    → Automações de atendimento
    → Integração com WhatsApp e CRM

  Perfil 3:
  Ícone:     SVG rocket 48px
  Título:    Founders e empreendedores
  Desc:      Tem uma ideia de produto digital?
             Do MVP à plataforma completa,
             construímos com você.
  Lista:
    → Validação rápida de produto
    → Stack moderna e escalável
    → Você fica com o código, sempre

  [Borda direita 1px rgba(255,255,255,0.08) entre perfis — desktop]
  [Cards com hover: borda-top 2px verde]
```

---

## SEÇÃO 10 — DEPOIMENTOS (novo — fundo claro)

**Fundo:** #F7F5F2
**Layout:** título centralizado + 2-3 cards de depoimento

```
Tag:         "DEPOIMENTOS"

Headline:    Quem já trabalhou
             com a ConnectLife.
             [display 36px]

CARDS (2 ou 3 em grid):

  Card 1:
  Texto:     "A ConnectLife entregou o sistema
              exatamente como prometido. Em 2,5 meses
              tínhamos um ERP completo funcionando.
              O suporte pós-entrega foi impecável."
             [16px, #0F0F0E, aspas grandes em verde]
  Nome:      Cliente — Loja de Cortinas, Manaus
  Estrelas:  ★★★★★ [verde]

  Card 2:
  Texto:     "Finalmente consegui sair das planilhas.
              O iEscala simplificou completamente
              a gestão de escala da equipe de enfermagem.
              Profissionalismo do início ao fim."
  Nome:      Usuária — iEscala, Manaus
  Estrelas:  ★★★★★

  [Cards com borda 1px, padding 32px]
  [Aspas " em Playfair Display, 80px, #1D9E75, opacity 0.3]
  [Animação: fade-in escalonado no scroll]
```

---

## SEÇÃO 11 — FAQ (novo — fundo claro)

**Fundo:** #F0EDE8
**Layout:** accordion simples, duas colunas desktop

```
Tag:         "PERGUNTAS FREQUENTES"

Headline:    Tira-dúvidas rápido.

PERGUNTAS (accordion com animação suave):

  Q: Quanto tempo leva para ter meu site pronto?
  A: Landing pages ficam prontas em 3 a 5 dias úteis.
     Sites profissionais em 7 a 10 dias. O prazo começa
     após a aprovação do layout, não do pagamento.

  Q: O que está incluso no preço?
  A: Domínio .com.br, hospedagem por 1 ano, certificado
     SSL, e-mail profissional e configuração de SEO básico.
     Nada de taxa escondida depois.

  Q: Posso pedir alterações depois que o site ficar pronto?
  A: Sim. Os planos de manutenção mensal cobrem atualizações
     de conteúdo, correções e pequenas melhorias. Projetos
     fora do escopo são orçados separadamente.

  Q: Vocês trabalham com clientes fora de Manaus?
  A: Sim. Atendemos todo o Brasil remotamente por
     videochamada e WhatsApp. O processo é idêntico
     ao atendimento presencial.

  Q: Vou depender de vocês para sempre?
  A: Não. Você recebe acesso total ao código, ao domínio
     e à hospedagem. Se quiser trocar de fornecedor,
     é só levar. Acreditamos em transparência, não
     em dependência.

  Q: Quais formas de pagamento vocês aceitam?
  A: Pix, transferência bancária e cartão de crédito
     em até 12x. 50% na aprovação do layout,
     50% na entrega.

  [Accordion: clique abre com altura animada]
  [Ícone + que vira × ao abrir]
  [Borda-bottom 1px entre perguntas]
```

---

## SEÇÃO 12 — CTA FINAL (rebuild)

**Fundo:** #0F0F0E
**Layout:** centralizado, espaçamento generoso, elemento decorativo

```
[Elemento decorativo: linhas diagonais finas em SVG, opacity 0.04]
[Dots grid intensificado no fundo]

Tag:         "PRÓXIMO PASSO"
             [verde, centralizado]

Headline:    Sua concorrente já está
             lendo isso.
             [Playfair Display, 56px desktop / 36px mobile, branco]
             [max-width 640px, centralizado]

Body:        A diferença entre quem fecha mais clientes
             e quem fica esperando é simples:
             presença digital profissional.

             Você tem 5 minutos para uma conversa?
             [16px, rgba(255,255,255,0.5), centralizado]

CTAs:
  [botão grande] Falar no WhatsApp →
  [fundo #1D9E75, texto branco, ícone WhatsApp, padding 20px 48px]

  [botão outline] Ver nossos serviços
  [borda 1px rgba(255,255,255,0.2), texto rgba(255,255,255,0.6)]

Micro-copy:  Sem compromisso. Resposta em minutos.
             [12px, rgba(255,255,255,0.3)]

Linha decorativa: HRFlowable com linhas técnicas
  "connectlife.com.br · contato@connectlife.com.br · Manaus, AM"
  [10px, rgba(255,255,255,0.2), centralizado]
```

---

## ANIMAÇÕES GLOBAIS

```typescript
// Padrão fadeUp — usar em todas as seções
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
}

// Stagger para grids de cards
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
}

// Contador numérico (seção números)
// useInView → useMotionValue(0) → animate até valor final
// easing: "easeOut", duration: 1.5

// Typing terminal (seção stack)
// Array de linhas → setTimeout encadeado → append linha por linha
// cursor ::after com animation blink 1s infinite

// Marquee logos
// CSS: @keyframes marquee { 0% { transform: translateX(0) } 100% { transform: translateX(-50%) } }
// animation: marquee 20s linear infinite
// Duplicar array de logos para loop perfeito

// Accordion FAQ
// height: 0 → height: auto com Framer Motion AnimatePresence
// opacity: 0 → 1 com delay 50ms

// Todos os useInView: { once: true, margin: '-60px' }
```

---

## ESTRUTURA DE ARQUIVOS

```
app/
  page.tsx                         ← home, importa todos os sections

components/home/
  LogosSection.tsx
  ServicosSection.tsx
  ComoFazemosSection.tsx
  NumerosSection.tsx
  StackSection.tsx
  CasosSection.tsx
  ParaQuemSection.tsx
  DepoimentosSection.tsx
  FaqSection.tsx
  CtaFinalSection.tsx

components/ui/
  Terminal.tsx                     ← componente terminal mockado
  Counter.tsx                      ← contador animado reutilizável
  Marquee.tsx                      ← marquee de logos
  Accordion.tsx                    ← FAQ accordion
  Badge.tsx                        ← badges/pills de tech e preço
```

---

## CHECKLIST DE IMPLEMENTAÇÃO

```
[ ] NAV: manter atual, apenas revisar se links estão corretos
[ ] HERO: manter atual sem alterações
[ ] LOGOS: marquee com logos de tecnologias em SVG
[ ] SERVIÇOS: 4 cards com borda-top accent no principal
[ ] COMO FAZEMOS: 4 steps com linha vertical e números outline
[ ] NÚMEROS: 4 contadores animados com useInView
[ ] STACK: grid de badges + terminal com typing animation
[ ] CASOS: bento grid com 4 projetos reais
[ ] PARA QUEM: 3 perfis em colunas, fundo escuro
[ ] DEPOIMENTOS: 2 cards com aspas grandes
[ ] FAQ: accordion animado, 6 perguntas
[ ] CTA FINAL: fundo escuro, botão WhatsApp grande
[ ] FOOTER: manter atual ou melhorar com links organizados
[ ] Mobile: testar todas as seções em 375px e 390px
[ ] Performance: lazy load de imagens, Framer Motion lazy
[ ] SEO: manter meta tags atuais, adicionar FAQ schema
```

---

## NOTAS FINAIS

1. **Ritmo visual:** alternar fundo claro (#F7F5F2) e escuro (#0F0F0E) a cada 2 seções. Nunca 3 seções do mesmo fundo em sequência.

2. **Densidade certa:** cada seção deve ter conteúdo suficiente para parecer substancial mas espaçamento para não sufocar. Mínimo 80px padding vertical por seção.

3. **Ângulos retos:** border-radius: 0 em absolutamente tudo — cards, botões, badges, inputs. É identidade da ConnectLife.

4. **Verde com parcimônia:** usar o verde (#1D9E75) apenas em: borda-top do card principal de serviços, badges de preço, CTAs principais, contornos de números e bullets de lista. Não colorir blocos inteiros de verde.

5. **WhatsApp:** todos os CTAs apontam para:
   https://wa.me/5592982078515
   (número confirmado pelo cliente)

6. **Projetos reais:** os casos de uso são projetos reais da ConnectLife. Não inventar. Os listados (ERP cortinas, iEscala, SafeStack) são projetos reais.
```
