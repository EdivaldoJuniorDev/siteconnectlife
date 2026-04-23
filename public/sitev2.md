# Briefing — connectlife.com.br/site
> Envie este arquivo completo para o Claude Code implementar a página de vendas da ConnectLife.

---

## CONTEXTO DO PROJETO

A ConnectLife é uma Software House em Manaus. Esta página `/site` é a página de vendas do produto "Site para Clínicas", focado em clínicas de estética, odontologia e psicologia em Manaus.

**Diferencial central do produto:**
A cliente manda uma foto sua. A ConnectLife transforma em um vídeo cinematográfico e coloca como hero do site — sem estúdio, sem fotógrafo, sem produção audiovisual. O site entrega protagonismo e ego, não tecnologia.

**Regra de ouro do copy:** nunca mencionar Next.js, VEO3, IA, ou qualquer tecnologia. Só resultado e sensação.

---

## STACK E CONFIGURAÇÃO

```
Framework:     Next.js 14 (App Router)
Rota:          /site → app/site/page.tsx
Estilo:        Tailwind CSS + Shadcn/ui
Animações:     Framer Motion
Fonte display: Playfair Display (headlines grandes)
Fonte corpo:   Geist Sans (texto corrido e UI)
Mobile-first:  obrigatório — tráfego vem majoritariamente do Instagram
```

---

## DESIGN SYSTEM DA PÁGINA

```
Background base:      #F7F5F2  (off-white quente)
Background escuro:    #0F0F0E  (seções de contraste)
Texto primário:       #0F0F0E
Texto secundário:     #6B6B67
Accent principal:     #1D9E75  (verde ConnectLife)
Accent hover:         #0F6E56
Border:               1px solid rgba(0,0,0,0.08)
Border-radius:        0px em tudo — ângulos retos
Sombra:               nenhuma sombra pesada

Cards:                fundo branco, borda fina 1px, sem radius
Botão primário:       fundo #0F0F0E, texto branco, sem radius
Botão secundário:     borda 1px #0F0F0E, fundo transparente
Botão WhatsApp:       fundo #1D9E75, texto branco, ícone WhatsApp SVG

Textura de fundo:     noise/grain SVG sutil sobre o off-white
Grid decorativo:      dots pattern #0F0F0E opacity-[0.04] espaçamento 24px
```

---

## META / SEO

```html
<title>Site para Clínicas em Manaus com Vídeo | ConnectLife</title>
<meta name="description" content="Criamos sites para clínicas e consultórios 
em Manaus com vídeo cinematográfico da própria médica — sem produção, sem 
fotógrafo. A partir de R$ 2.500. Entrega em 7 dias." />

<!-- Open Graph -->
<meta property="og:title" content="Site para Clínicas em Manaus | ConnectLife" />
<meta property="og:description" content="Seu vídeo. Sua cara. No seu site. 
Sem estúdio, sem fotógrafo. A partir de R$ 2.500." />
<meta property="og:image" content="/images/demos/iris-og.jpg" />
<meta property="og:url" content="https://connectlife.com.br/site" />

<!-- Schema LocalBusiness + ProfessionalService -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "name": "ConnectLife Tecnologia",
  "description": "Software House especializada em sites para clínicas em Manaus",
  "url": "https://connectlife.com.br",
  "telephone": "+559292982078515",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Manaus",
    "addressRegion": "AM",
    "addressCountry": "BR"
  },
  "areaServed": "Manaus, AM",
  "priceRange": "R$ 2.500 - R$ 4.900"
}
</script>
```

---

## WHATSAPP CTA (usar em todos os botões)

```
Link base:
https://wa.me/5592982078515?text=Olá%2C%20vi%20o%20site%20da%20ConnectLife%20e%20quero%20saber%20mais%20sobre%20o%20site%20para%20minha%20clínica

Tracking UTM (adicionar no link do botão via JS):
?utm_source=site&utm_medium=[organico|pago]&utm_campaign=site-clinicas
```

---

## ESTRUTURA DE COMPONENTES

```
app/site/
  page.tsx                  ← página principal (importa todos os sections)
  
components/site/
  HeroSection.tsx
  DiferencialSection.tsx
  DemosSection.tsx
  DorSection.tsx
  PacotesSection.tsx
  ComoFuncionaSection.tsx
  CalculadoraSection.tsx
  CtaFinalSection.tsx
```

---

## SEÇÃO 1 — HERO

**Layout:** duas colunas (texto esquerda, vídeo/visual direita). Mobile: empilhado, visual primeiro.

```
Tag acima:      "Para clínicas e consultórios em Manaus"
                [pill com borda verde, texto verde, fundo verde/10]

Headline:       Sua clínica está cheia de pacientes
                — ou só de seguidores?

                [Tipografia: Playfair Display, 56px desktop / 36px mobile]
                [Quebra de linha proposital entre "pacientes" e "—"]

Subheadline:    Todo mês tem paciente novo pesquisando no Google
                pela sua especialidade em Manaus.
                A pergunta é: ele está encontrando você
                ou o concorrente?

                [Geist Sans, 18px, cor #6B6B67, max-width 480px]

CTA primário:   [botão] Quero ser encontrada primeiro →
                [fundo #0F0F0E, texto branco, padding 16px 32px]

Micro-copy:     Falar direto no WhatsApp · Resposta em minutos
                [12px, #6B6B67, abaixo do botão]

Visual direita: vídeo do demo (iris-demo.mp4 ou odonto-demo.mp4)
                autoplay muted loop playsinline
                objeto fit-cover, aspect-ratio 9/16 no mobile
                aspect-ratio 4/3 no desktop
                borda 1px solid rgba(0,0,0,0.08)
                [se vídeo não disponível: imagem placeholder do demo Íris]

Animação entrada: Framer Motion staggered
                  texto vem de baixo para cima (y: 24 → 0, opacity 0→1)
                  vídeo vem da direita (x: 40 → 0, opacity 0→1)
                  delay escalonado por elemento

Background hero: off-white com dots grid decorativo
```

---

## SEÇÃO 2 — O DIFERENCIAL

**Layout:** centralizado, max-width 720px. Antes/depois abaixo do texto.

```
Tag:       "O que nenhuma outra agência de Manaus oferece"
           [mesma pill da seção anterior]

Headline:  Sua foto.
           Sua cara.
           No seu site.
           Como se fosse uma campanha publicitária.

           [Playfair Display, 48px desktop / 32px mobile]
           [cada linha em linha própria, peso visual decrescente]
           ["campanha publicitária" em cor #1D9E75]

Body:      A maioria das clínicas em Manaus tem site.
           Poucas têm um site que para quem passa.

           Você manda uma foto sua.
           A gente transforma em um vídeo cinematográfico —
           sem estúdio, sem fotógrafo, sem dia de produção,
           sem cachê de modelo.

           Resultado: você vira protagonista do seu próprio site
           antes de qualquer concorrente fazer o mesmo.

           [Geist Sans, 16px, #6B6B67, parágrafos com espaçamento generoso]

Visual antes/depois:
           Dois cards lado a lado com label "Antes" e "Depois"
           Antes: imagem de uma foto comum de celular (baixa qualidade simulada,
                  filtro dessaturado, label "Sua foto do WhatsApp")
           Depois: frame do vídeo do demo Íris ou Odonto, vibrante,
                   label "Seu site ConnectLife"
           Seta → entre os dois
           [animação: Depois pisca suavemente com border verde]

CTA secundário: "Ver como fica na prática ↓"
                [link âncora para seção Demos, sem fundo, sublinhado verde]
```

---

## SEÇÃO 3 — DEMOS (PROVA VISUAL)

**Layout:** título centralizado + 3 cards em grid. Mobile: scroll horizontal.

```
Tag:       "Veja o resultado"

Headline:  É assim que sua clínica vai aparecer.

           [Playfair Display, 40px desktop / 28px mobile]

Subtexto:  Estes são exemplos reais do que entregamos.
           [14px, #6B6B67]

CARDS (3 cards em grid 3 colunas desktop / scroll mobile):

  Card 1 — OdontoVida
  Vídeo:   /videos/demos/odonto-demo.mp4
           [autoplay muted loop, aspect-ratio 16/9, object-fit cover]
  Label:   "OdontoVida · Clínica Odontológica"
  Badge:   "Landing Page · R$ 2.500"
           [pill fundo off-white, borda #1D9E75, texto #0F6E56]
  Link:    "Ver site completo →" [abre /demo/odonto em nova aba]

  Card 2 — Íris Estética [card destacado, borda 2px #1D9E75]
  Vídeo:   /videos/demos/iris-demo.mp4
  Label:   "Íris Estética · Clínica Estética Avançada"
  Badge:   "Landing Page · R$ 2.500"
  Link:    "Ver site completo →" [abre /demo/estetica em nova aba]

  Card 3 — Dra. Camila Rocha
  Vídeo:   /videos/demos/psico-demo.mp4
  Label:   "Dra. Camila Rocha · Psicologia Clínica"
  Badge:   "Site Profissional · R$ 4.900"
  Link:    "Ver site completo →" [abre /demo/psicologia em nova aba]

  [Todos os vídeos: autoplay muted loop playsinline, pause on hover]
  [Se vídeo não disponível: imagem estática do screenshot do demo]

CTA abaixo dos cards:
  [botão] Quero o meu assim →
  [fundo #0F0F0E, texto branco]
```

---

## SEÇÃO 4 — A DOR (dados)

**Layout:** fundo levemente diferente (#F0EDE8), título centralizado + 3 blocos.

```
Tag:       "A realidade do mercado em Manaus"

Headline:  Enquanto você posta no Instagram,
           sua concorrente aparece no Google.

           [Playfair Display, 40px / 28px mobile]

Body:      Instagram depende do algoritmo.
           Google depende do seu site.

           Quando uma paciente pesquisa "clínica de estética em Manaus"
           e não te encontra — ela não vai te procurar.
           Ela agenda com quem apareceu primeiro.

           [16px, #6B6B67, centralizado, max-width 560px]

TRÊS BLOCOS (grid 3 colunas / empilhado mobile):

  Bloco 1:
  Ícone:   lupa SVG (inline, 32px, cor #1D9E75)
  Número:  87%
           [Playfair Display, 48px, #0F0F0E]
  Texto:   "das buscas por serviços de saúde começam
            em mecanismos de busca"
           [14px, #6B6B67]

  Bloco 2:
  Ícone:   cronômetro SVG (inline, 32px, cor #1D9E75)
  Número:  8 seg
           [Playfair Display, 48px, #0F0F0E]
  Texto:   "é o tempo que você tem para convencer
            quem chega no seu site"
           [14px, #6B6B67]

  Bloco 3:
  Ícone:   troféu SVG (inline, 32px, cor #1D9E75)
  Número:  75%
           [Playfair Display, 48px, #0F0F0E]
  Texto:   "dos cliques vão para os 3 primeiros
            resultados do Google"
           [14px, #6B6B67]

  [Números animam de 0 até o valor quando entram na viewport — useInView]
```

---

## SEÇÃO 5 — PACOTES

**Layout:** título centralizado + 2 cards lado a lado. Mobile: empilhado.

```
Tag:       "O que você recebe"

Headline:  Tudo que você precisa.
           Nada que você não precisa.

           [Playfair Display, 40px / 28px]

CARD 1 — Landing Page
Preço:     R$ 2.500
           [Playfair Display, 36px, #0F0F0E]
Sub:       "Negociável até R$ 1.990"
           [12px, #6B6B67]
Prazo:     "Entrega em até 5 dias úteis"
           [12px, #1D9E75, bold]
Divisor:   linha 1px
Itens:
  ✓  Seu vídeo cinematográfico no hero do site
  ✓  Domínio .com.br incluso
  ✓  Hospedagem por 1 ano inclusa
  ✓  E-mail profissional incluso
  ✓  Botão WhatsApp com mensagem pré-pronta
  ✓  Captura de e-mail de visitantes
  ✓  3 e-mails automáticos para quem entrar em contato
  ✓  Aparece no Google desde o primeiro dia
  [✓ em verde #1D9E75, texto em #6B6B67, 14px]

Rodapé:    "Mais vendido para quem está começando."
           [12px, #6B6B67, itálico]
CTA:       [botão outline] Quero a Landing Page →

---

CARD 2 — Site Profissional  [DESTACADO]
  borda: 2px solid #1D9E75
  background: #F0FBF7
  badge topo: "Mais completo" [pill verde]

Preço:     R$ 4.900
           [Playfair Display, 36px, #1D9E75]
Sub:       "Orçamento por escopo acima de R$ 8.000"
           [12px, #6B6B67]
Prazo:     "Entrega em até 7 dias úteis"
           [12px, #1D9E75, bold]
Divisor:   linha 1px
Itens:
  ✓  Tudo da Landing Page, mais:
  ✓  Página Sobre com sua história
  ✓  Página de Serviços detalhada
  ✓  Página de Contato com mapa
  ✓  7 e-mails automáticos de relacionamento
  ✓  SEO local completo + Google Search Console
  [mesmo estilo do card 1]

Rodapé:    "Ideal para clínicas já estabelecidas."
           [12px, #6B6B67, itálico]
CTA:       [botão sólido #0F0F0E] Quero o Site Profissional →

---

Abaixo dos cards, centralizado:
  "Site Institucional a partir de R$ 8.000 — escopo personalizado."
  Link: "Falar sobre projeto maior →" [abre WhatsApp]
```

---

## SEÇÃO 6 — COMO FUNCIONA

**Layout:** título esquerda + 4 steps numerados verticalmente.

```
Tag:       "É mais simples do que parece"

Headline:  Do WhatsApp ao seu site no ar
           em menos de 7 dias.

           [Playfair Display, 40px / 28px]

STEPS (linha vertical conectando os números):

  01  Você manda sua foto pelo WhatsApp
      Pode ser a melhor foto que você tem guardada.
      A gente cuida do resto.

  02  A gente produz seu vídeo
      Transformamos sua foto em um vídeo
      cinematográfico — sem você sair do lugar.

  03  Você aprova o layout
      Te mostramos como vai ficar antes de publicar.
      Você pede ajustes à vontade.

  04  Seu site vai ao ar
      Com domínio, e-mail e tudo configurado.
      Pronto para receber pacientes.

  [Números: Playfair Display, 48px, #1D9E75, outline/stroke]
  [Linha vertical: 1px dashed #1D9E75 conectando os steps]
  [Animação: steps revelam sequencialmente no scroll — useInView com delay]

CTA:       [botão] Começar agora →
           [centralizado abaixo dos steps]
```

---

## SEÇÃO 7 — CALCULADORA (derruba objeção de preço)

**Layout:** fundo #0F0F0E (escuro), texto branco. Calculadora interativa centralizada.

```
Headline:  "Será que vale o investimento?"
           [Playfair Display, 36px, branco]

Body:      Vamos fazer a conta juntos.
           [16px, rgba(255,255,255,0.6)]

CALCULADORA INTERATIVA (componente React com estado):

  Label:   "Quantos procedimentos você faz por mês?"
  Slider:  min=5, max=50, step=5, default=15
  Display: número atual [36px, branco, bold]

  Label:   "Qual o ticket médio por procedimento?"
  Slider:  min=200, max=3000, step=100, default=500
  Display: "R$ [valor]" [36px, branco, bold]

  RESULTADO (calculado em tempo real):
  ─────────────────────────────────────
  Faturamento mensal estimado:    R$ [ticket × procedimentos]
  Custo do site Landing Page:     R$ 2.500  (uma única vez)
  Pacientes para pagar o site:    [ceil(2500 / ticket)] pacientes
  ─────────────────────────────────────
  Destaque grande:
  "Seu site se paga com [N] paciente(s) novo(s)."
  [Playfair Display, 28px, #1D9E75]

  Subtexto: "O site trabalha por você 24 horas por dia,
             7 dias por semana, sem folga e sem salário."
            [14px, rgba(255,255,255,0.5)]

CTA:       [botão fundo #1D9E75] Quero meu site agora →
```

---

## SEÇÃO 8 — CTA FINAL

**Layout:** fundo #0F0F0E, centralizado, espaçamento generoso.

```
Headline:  Sua concorrente já está lendo isso.
           [Playfair Display, 48px, branco, max-width 640px, centralizado]

Body:      A diferença entre quem fecha mais pacientes
           e quem fica esperando no Instagram
           é simples: presença no Google.

           Você tem 5 minutos para uma conversa?
           A gente te mostra exatamente como seu site
           vai ficar — antes de você decidir qualquer coisa.

           [16px, rgba(255,255,255,0.6), centralizado]

CTA grande:   [botão grande] Falar agora no WhatsApp →
              [fundo #1D9E75, texto branco, padding 20px 48px, fonte 18px]
              [ícone WhatsApp SVG branco à esquerda]

Micro-copy:   Sem compromisso. Sem enrolação.
              Se não fizer sentido pra você, tudo bem.
              [12px, rgba(255,255,255,0.4), centralizado]

Separador:    linha 1px rgba(255,255,255,0.1)

Rodapé info:  ConnectLife Tecnologia · Manaus, AM
              contato@connectlife.com.br
              [12px, rgba(255,255,255,0.3), centralizado]
```

---

## ANIMAÇÕES GLOBAIS (Framer Motion)

```typescript
// Variante padrão para entrada de seções
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

// Stagger para listas de cards/steps
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

// Contadores numéricos (seção de dados)
// usar useInView + useMotionValue + useTransform para animar 0 → valor final

// Todos os sections: lazy load com useInView({ once: true, margin: '-80px' })
// Scroll suave: html { scroll-behavior: smooth }
```

---

## COMPONENTE CALCULADORA (lógica)

```typescript
// app/site/components/CalculadoraSection.tsx

const [procedimentos, setProcedimentos] = useState(15)
const [ticket, setTicket] = useState(500)

const faturamento = procedimentos * ticket
const pacoteLp = 2500
const pacientesParaPagar = Math.ceil(pacoteLp / ticket)

// Display:
// "Seu site se paga com {pacientesParaPagar} paciente(s) novo(s)."
// Atualiza em tempo real conforme sliders movem
```

---

## ASSETS NECESSÁRIOS

```
/public/videos/demos/
  odonto-demo.mp4      ← vídeo do demo OdontoVida (gerado pelo VEO3)
  iris-demo.mp4        ← vídeo do demo Íris Estética
  psico-demo.mp4       ← vídeo do demo Dra. Camila Rocha

/public/images/site/
  antes.jpg            ← foto comum de celular (baixa qualidade intencional)
  depois.jpg           ← frame do demo Íris (alta qualidade)
  iris-og.jpg          ← OG image (1200×630)

[Se os vídeos ainda não estiverem prontos, usar imagens estáticas
dos screenshots dos demos como fallback com <picture> + <source>]
```

---

## CHECKLIST DE IMPLEMENTAÇÃO

```
[ ] Rota /site criada em app/site/page.tsx
[ ] Todos os 8 componentes de seção criados em components/site/
[ ] Meta tags e Schema JSON-LD no head
[ ] Link do WhatsApp com mensagem pré-preenchida em todos os CTAs
[ ] Calculadora interativa funcionando com sliders
[ ] Contadores numéricos animando no scroll (useInView)
[ ] Vídeos com autoplay muted loop playsinline + fallback imagem
[ ] Dots grid decorativo no hero
[ ] Textura grain no background
[ ] Mobile-first revisado em 375px, 390px e 428px
[ ] Scroll suave entre seções (âncoras)
[ ] Framer Motion lazy: animações só disparam quando seção entra na viewport
[ ] Google Search Console meta tag de verificação (placeholder)
[ ] robots.txt permite indexação de /site
[ ] sitemap.xml inclui /site
```

---

## OBSERVAÇÕES FINAIS

1. **Tom do copy:** nunca alterar. Está calibrado para ego e urgência oculta — não é pressão de tempo, é espelho da dor que a cliente já sente.

2. **Tecnologia invisível:** nenhuma menção a IA, VEO3, Next.js ou qualquer stack. O produto é o resultado, não o processo.

3. **Mobile é prioridade 1:** a maioria dos leads vai vir de Stories e Reels. O site precisa converter no celular antes de qualquer outra tela.

4. **Vídeos são o produto:** se os vídeos dos demos não estiverem prontos, usar imagens. Mas os vídeos são o que diferencia — priorizar ter pelo menos 1 rodando antes de subir para produção.

5. **CTA único:** todos os botões abrem o mesmo WhatsApp. Sem formulário, sem e-mail direto nessa página.
