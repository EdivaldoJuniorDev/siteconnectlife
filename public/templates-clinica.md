# Briefing — Templates de Clínica ConnectLife (v2)
> Cole no Claude Code para construir os 3 templates de demo do portfólio.
> Rotas: /demo/odonto · /demo/estetica · /demo/psicologia

---

## PRINCÍPIOS GERAIS (aplicar nos 3 templates)

### O que os templates anteriores erraram
- Foto numa caixa quadrada genérica — sem alma
- Tipografia igual, sem identidade
- Sem textura, sem glassmorphism, sem profundidade
- Parecia template de construtora de site 2010
- **Sem vídeo — o diferencial ConnectLife não aparecia**

### O que os templates novos DEVEM ter
- **VÍDEO no hero** — é o diferencial ConnectLife, tem que estar nos 3
- A profissional É o produto — protagonismo total
- Foto da profissional ocupando metade ou toda a tela (seções internas)
- Tipografia com personalidade (Cormorant Garamond + Geist)
- Cores com identidade real por segmento
- Glassmorphism nos elementos flutuantes (Odonto + Estética)
- Textura grain/noise no fundo (SVG filter ou CSS)
- Animações de entrada no scroll (Framer Motion)
- Antes/depois dos procedimentos (exceto Psico)
- Banner demo com CTA no topo
- Mobile-first obrigatório (tráfego vem do Instagram)
- **Sem placeholders** — usar imagens/vídeos gerados por IA antes de buildar

### ⚠️ ANTES DE BUILDAR — gerar assets
Os demos SÃO o produto. Prospect vê o portfólio e decide se compra.
Placeholder com ícone de câmera = demo morto.

**Pipeline por template:**
1. Gerar foto profissional no ChatGPT 4o (a partir de prompt ou referência)
2. Gerar variações (sobre, clínica, etc.)
3. Animar foto hero no Kling AI / Runway → vídeo 4-6s
4. Comprimir: ffmpeg WebM VP9 + MP4 H.264 + poster JPG
5. Só então buildar o template

### Estrutura de seções (Odonto + Estética)
1. Banner demo com CTA (fixo, 40px)
2. Nav
3. Hero — **VÍDEO** full + overlay + copy + CTA
4. Sobre a profissional
5. Serviços
6. Antes e depois
7. Depoimentos com glassmorphism
8. CTA final
9. Footer

### Estrutura de seções (Psicologia)
1. Banner demo com CTA
2. Nav editorial
3. Hero — **VÍDEO** do ambiente/consultório + overlay editorial + copy
4. Sobre a psicóloga — longa, pessoal
5. Abordagem terapêutica
6. Como funciona — 4 steps
7. Depoimentos (sem glass — estilo editorial)
8. CTA final suave
9. Footer

---

## TIPOGRAFIA (mesma nos 3 templates)

```css
--font-display: 'Cormorant Garamond', serif;   /* headlines */
--font-body:    'Geist', sans-serif;            /* corpo e UI */
```
Personalidade: luxury, premium, sofisticado.
Carregar via `next/font` (não CDN) para performance.

---

## METADATA / SEO (cada demo)

Cada demo deve ter metadata completa — prova que o produto entrega SEO.

```tsx
// Exemplo OdontoVida
export const metadata: Metadata = {
  title: "OdontoVida — Clínica Odontológica em Manaus",
  description: "Clareamento, implantes e estética dental com tecnologia moderna. Agende sua avaliação gratuita.",
  openGraph: {
    title: "OdontoVida — Clínica Odontológica em Manaus",
    description: "Seu sorriso perfeito começa com uma conversa.",
    url: "https://connectlife.com.br/demo/odonto",
    siteName: "OdontoVida",
    locale: "pt_BR",
    type: "website",
  },
};
```

JSON-LD de LocalBusiness em cada demo com endereço, horário, telefone.

---

## TEXTURA DE FUNDO (aplicar em todos)

```css
/* Grain overlay — adicionar como pseudo-elemento */
.grain::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.035;
  pointer-events: none;
  z-index: 1;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 180px;
}
```

---

## GLASSMORPHISM (para elementos flutuantes — Odonto + Estética)

```css
.glass {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;  /* exceção — glassmorphism usa radius */
}

.glass-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

Usar em: badges flutuantes no hero, cards de depoimento,
notificações estilo WhatsApp/Instagram.

**Psicologia NÃO usa glassmorphism** — tom editorial, mais limpo.

---

## ANIMAÇÕES PADRÃO (Framer Motion)

```typescript
// Entrada padrão
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
}

// Stagger para listas
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
}

// Float — para badges no hero
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-8px); }
}

// Todos com useInView({ once: true, margin: '-60px' })
```

---

## BANNER DE DEMO (todos os templates)

```
Position: fixed top-0, z-index 9999, height 40px
Background: #0F0F0E
Texto: "⚡ Este site foi criado em 7 dias —"
Link:  "Quero o meu assim →" → wa.me/5592982078515
Font:  11px, branco, centralizado
Hover no link: underline, cor #C8501A
```

O conteúdo da página começa com padding-top: 40px para compensar.

---

## CTAs DOS DEMOS

Os demos são sites fictícios, mas os CTAs levam pro WhatsApp da ConnectLife.

**Regra:** o copy do botão simula a clínica ("Agendar consulta"),
mas o link vai pra ConnectLife com mensagem contextualizada:

```
wa.me/5592982078515?text=Vi o demo [OdontoVida/Íris/Dra. Camila] e quero um site assim para minha clínica
```

Assim o prospect entende o que o PACIENTE dele vai ver (botão real),
mas a ação leva pra ConnectLife (conversão).

---

# TEMPLATE 1 — OdontoVida
**Rota:** /demo/odonto
**Arquivo:** app/demo/odonto/page.tsx

## Paleta
```css
--accent:        #1A4731;   /* verde escuro dental */
--accent-mid:    #2D6A4F;   /* verde médio */
--accent-light:  #95D5B2;   /* verde claro hover */
--bg:            #F8F6F2;   /* off-white quente */
--bg-alt:        #EFF4F1;   /* fundo alternado levemente verde */
--text:          #1A1A18;
--text-muted:    #5C5C58;
--white:         #FFFFFF;
```

## NAV
```
Logo: "OdontoVida" em --font-display, 20px, --accent
      + ícone dente SVG simples à esquerda, 20px

Links: Início · Sobre · Serviços · Resultados · Localização
       [13px, --text-muted, hover: --accent]

CTA nav: "Agendar consulta"
         [background --accent, branco, padding 10px 20px, border-radius 0]

Nav: background white, border-bottom 1px rgba(0,0,0,0.06)
     position sticky top-40px (abaixo do banner)
```

## HERO — COM VÍDEO

**Layout:** vídeo da dentista/clínica ocupando tela inteira (como o hero do /site).
Overlay escuro + copy à esquerda.

```
Fundo: VÍDEO (gerado por IA a partir da foto da dentista)
  <video autoPlay muted loop playsInline>
    <source src="/videos/demos/odonto-hero.webm" type="video/webm" />
    <source src="/videos/demos/odonto-hero.mp4" type="video/mp4" />
  </video>
  poster: /images/demos/odonto-hero-poster.jpg
  class: object-cover scale-[1.03]

Overlay: bg-gradient-to-r from-black/70 via-black/50 to-black/30

Lado esquerdo (copy sobre overlay):
  Tag: "Clínica Odontológica em Manaus"
       [pill, borda 1px --accent, texto --accent-light, 11px]

  Headline: Seu sorriso perfeito
            começa com uma
            conversa.
            [--font-display, 58px desktop / 38px mobile, branco]

  Sub:  Clareamento, implantes e estética dental
        com tecnologia moderna e atendimento
        humanizado em Manaus.
        [16px, white/60, max-width 420px]

  CTA: [botão] Agendar avaliação gratuita →
       [background --accent, branco, 16px 36px]
  Micro: Sem compromisso · Resposta em até 2 horas
         [12px, white/40]

BADGES FLUTUANTES (glass, animação float):

  Badge 1 — superior direito:
  [glass] ★ 4.9  "247 avaliações Google"
  [12px, icone estrela amarela, branco]
  float: 3s ease-in-out infinite

  Badge 2 — inferior direito:
  [glass-dark] 🦷 "Próximo horário: hoje às 15h"
  float: 4s ease-in-out infinite, delay 1s

Mobile: vídeo full height, badges menores
```

## SOBRE A PROFISSIONAL

```
Layout: duas colunas. Esquerda: foto. Direita: texto.

Foto:
  Imagem profissional em ambiente de clínica (gerada por IA)
  Proporção 3/4, object-fit cover
  Sem border-radius
  Borda fina 1px --accent opacity 0.2 no lado direito

  Floating badge glass (sobre a foto):
  [ícone diploma] "CRO-AM 00000"
  [glass, 12px, canto inferior esquerdo]

Texto direita:
  Tag: "SOBRE"
  Headline: Cuidando do seu sorriso
            há mais de 10 anos.
            [--font-display, 36px]

  Texto:
    A Dra. Beatriz Silva é especialista em odontologia estética
    formada pela UFAM, com especialização em implantodontia e
    clareamento dental pelo Instituto de Odontologia Avançada.

    Seu atendimento é baseado em escuta ativa e tecnologia de
    ponta — porque um sorriso bonito começa por um diagnóstico
    honesto e um plano personalizado para o seu caso.

  Formações (lista com ícone check verde):
    ✓ Graduação em Odontologia — UFAM
    ✓ Especialização em Implantodontia — IOA São Paulo
    ✓ Certificação em Clareamento a Laser — APCD
    ✓ Membro da Associação Brasileira de Odontologia

  CTA inline: "Agendar minha avaliação →" [link verde]
```

## SERVIÇOS

```
Fundo: --bg-alt (levemente verde)

Tag: "SERVIÇOS"
Headline: O que oferecemos
          para o seu sorriso.

Grid 3 colunas desktop / 1 coluna mobile:

  Card 1: Clareamento a laser
  Ícone: SVG dente brilhando 32px --accent
  Desc: Até 8 tons mais claro em uma sessão.
        Resultado imediato, sem sensibilidade.
  Badge: "Sessão única"

  Card 2: Implante dentário
  Ícone: SVG implante 32px
  Desc: Solução definitiva para dentes perdidos.
        Titânio de alta qualidade, garantia total.
  Badge: "Mais procurado"
  [card destacado: border-top 2px --accent]

  Card 3: Lentes de contato dental
  Ícone: SVG estrela 32px
  Desc: Transformação completa do sorriso com
        facetas ultra-finas e naturais.
  Badge: "Sem desgaste"

  Card 4: Harmonização do sorriso
  Ícone: SVG smile 32px
  Desc: Gengivoplastia, remodelamento e
        alinhamento para o sorriso ideal.

  Card 5: Ortodontia invisível
  Ícone: SVG aligner 32px
  Desc: Alinhadores transparentes para
        correção discreta e confortável.

  Card 6: Tratamento de canal
  Ícone: SVG raiz 32px
  Desc: Procedimento moderno, sem dor,
        com anestesia de última geração.

Estilo cards:
  background: white
  border: 1px solid rgba(0,0,0,0.07)
  padding: 28px
  border-radius: 0
  hover: border-color --accent, translateY(-3px)
  transition: all 200ms
```

## ANTES E DEPOIS

```
Fundo: --bg (off-white)

Tag: "RESULTADOS"
Headline: Transformações reais
          de pacientes reais.

Componente BeforeAfterSlider (3 exemplos em tabs ou carrossel):
  (reutilizar componente do /site com clipPath + pointer events)

  Exemplo 1: Clareamento
  Exemplo 2: Lentes de contato
  Exemplo 3: Implante + harmonia

  Cada um:
  - Slider arrastável dividindo antes/depois
  - Label "ANTES" (pill escuro esquerda) / "DEPOIS" (pill verde direita)
  - Handle: círculo branco 40px, borda 2px --accent, setas ← →
  - clipPath: inset() + pointer events (mesmo padrão do /site)

  Imagens: geradas por IA (dentes antes/depois)

Abaixo dos sliders — stats em linha:
  [247] Pacientes atendidos  |  [8+] Anos de experiência  |  [100%] Satisfação
  [números animam no scroll com useInView + counter]
```

## DEPOIMENTOS

```
Fundo: --bg-alt

Tag: "DEPOIMENTOS"
Headline: O que nossos pacientes dizem.

2 cards glassmorphism em grid:

  Card 1 [glass sobre fundo --bg-alt]:
  Foto: avatar (gerado por IA) circular 48px
  Nome: Fernanda Costa, 34 anos
  Estrelas: ★★★★★ [--accent]
  Texto: "Fiz o clareamento e não acreditei no resultado.
          Em uma sessão meu sorriso mudou completamente.
          O atendimento foi impecável do começo ao fim."

  Card 2 [glass]:
  Nome: Ricardo Almeida, 47 anos
  ★★★★★
  Texto: "Tinha medo de fazer implante mas a Dra. foi
          muito atenciosa. Hoje não vivo mais sem.
          Recomendo para quem está em dúvida."

  Badges notificação flutuantes [glass] acima dos cards:
  [Instagram] "Super recomendo!" [WhatsApp] "Adorei o resultado!"
```

## CTA FINAL + FOOTER

```
Fundo: --accent (verde escuro)
Textura: grain overlay mais intenso (opacity 0.06)

Headline: Agende hoje.
          Atendemos de segunda a sábado.
          [--font-display, 48px, branco]

Sub: Vagas limitadas por semana.
     Garanta a sua avaliação gratuita agora.
     [rgba(255,255,255,0.7)]

Botão: "Falar no WhatsApp →"
       [fundo branco, texto --accent, ícone WhatsApp, grande]

Footer:
  Endereço: Av. Djalma Batista, 1661 · Chapada · Manaus - AM
  Horário: Seg a Sex: 8h às 19h · Sáb: 8h às 13h
  Telefone: (92) 9 8888-0001
  [rgba(255,255,255,0.5), 13px]
```

---

# TEMPLATE 2 — Íris Estética
**Rota:** /demo/estetica
**Arquivo:** app/demo/estetica/page.tsx

## Paleta
```css
--accent:        #8B6914;   /* dourado escuro */
--accent-mid:    #C9A84C;   /* dourado médio */
--accent-light:  #E8D5A3;   /* champagne claro */
--bg:            #FAF7F2;   /* off-white creme */
--bg-alt:        #F3EDE4;   /* bege mais quente */
--bg-dark:       #2C1810;   /* marrom escuro luxo */
--text:          #1C1410;
--text-muted:    #7A6A58;
```

## NAV
```
Logo: "Íris" em --font-display italic, dourado + "Estética" regular, escuro
Fundo: transparente sobre hero / white com scroll

Links: [--text-muted] Início · Sobre · Tratamentos · Resultados · Contato

CTA: "Agendar avaliação"
     [border 1px --accent, texto --accent, fundo transparente]
     hover: fundo --accent, texto branco
```

## HERO — COM VÍDEO

**Layout:** vídeo da esteticista/clínica ocupando tela inteira.
Overlay com gradiente mais suave (mostrar mais a clínica premium).

```
Fundo: VÍDEO (gerado por IA a partir da foto da esteticista)
  <video autoPlay muted loop playsInline>
    <source src="/videos/demos/estetica-hero.webm" type="video/webm" />
    <source src="/videos/demos/estetica-hero.mp4" type="video/mp4" />
  </video>
  poster: /images/demos/estetica-hero-poster.jpg
  class: object-cover scale-[1.03]

Overlay: bg-gradient-to-r from-[#2C1810]/80 via-[#2C1810]/50 to-transparent

Lado esquerdo (copy sobre overlay):

  Headline: Beleza que
            respeita quem
            você é.
            [--font-display, 64px desktop / 40px mobile, branco]
            ["você é." em --accent-light italic]

  Sub: Tratamentos estéticos faciais e corporais
       com resultados naturais e duradouros.
       Porque você merece se sentir bem
       na sua própria pele.
       [15px, white/60]

  CTA: "Agendar minha avaliação →"
       [fundo --accent, branco, padding 16px 32px]
  Micro: Avaliação gratuita · Sem fila de espera
         [12px, white/40]

BADGES FLUTUANTES:

  Badge 1 [glass, canto superior direito, float]:
  [ícone Instagram rosa] "Cliente · Super recomendo!" · há 31m

  Badge 2 [glass, canto inferior direito, float delay 1.5s]:
  [ícone WhatsApp verde] "Adorei o resultado!" · há 23m

Mobile: vídeo full height, badges menores
```

## SOBRE

```
Fundo: --bg-alt (bege mais quente)
Layout: duas colunas — direita foto, esquerda texto
[invertido do odonto para variar]

Foto:
  Imagem em ambiente de clínica premium (gerada por IA)
  Elemento decorativo: linha dourada 1px vertical à esquerda da foto
  Floating pill [glass]: "CRBM-AM 00000 · CRM-AM 00000"

Texto:
  Tag: "SOBRE A PROFISSIONAL"
  Headline: Olá, sou a
            Dra. Lúcia Andrade.
            [--font-display, italic, 36px]

  Texto:
    Sou biomédica especialista em estética avançada, apaixonada
    por realçar a beleza natural de cada paciente.

    Meu trabalho começa por entender você — sua rotina, suas
    inseguranças, seu objetivo. Só então criamos juntos o
    protocolo ideal para o seu rosto e o seu momento de vida.

    Resultados que parecem naturais porque são planejados
    para a sua individualidade.

  Formações: [lista com ícone check dourado]
    ✓ Biomedicina — UNINORTE Manaus
    ✓ Especialização em Harmonização Orofacial — FAESP
    ✓ Certificação em Bioestimuladores — Merz Aesthetics
    ✓ Aperfeiçoamento em Técnicas Avançadas de Preenchimento
```

## TRATAMENTOS

```
Fundo: --bg (creme)

Tag: "TRATAMENTOS"
Headline: Protocolos personalizados
          para cada momento da sua vida.

Grid 3x2 desktop:

  [hover: border-top 2px --accent-mid, translateY(-3px)]

  Card 1: Toxina botulínica
  Ícone: SVG rosto/estrela dourado
  Desc: Suavização de linhas com resultado natural.
        Procedimento rápido, sem recuperação.
  Tag: "Mais procurado"

  Card 2: Preenchimento facial
  Ícone: SVG gota
  Desc: Ácido hialurônico para lábios, maçãs
        do rosto e sulcos. Efeito imediato.

  Card 3: Bioestimuladores
  Ícone: SVG sparkle
  Desc: Estimulação natural do colágeno para
        pele mais firme e jovem. Resultado progressivo.

  Card 4: Skinbooster
  Ícone: SVG gota brilho
  Desc: Hidratação profunda com ácido hialurônico.
        Pele luminosa por até 6 meses.

  Card 5: Fios de PDO
  Ícone: SVG linha curva
  Desc: Lifting sem cirurgia. Reposicionamento
        e tensionamento da pele.

  Card 6: Protocolos faciais
  Ícone: SVG folha
  Desc: Combinação personalizada de técnicas
        para seu objetivo específico.
```

## ANTES E DEPOIS

```
Fundo: --bg-dark (marrom escuro luxo)

Tag: "RESULTADOS" [--accent-light]
Headline: Transformações que
          falam por si.
          [--font-display, branco]

Sub: Resultados reais de pacientes reais.
     Com consentimento e privacidade preservada.
     [rgba(255,255,255,0.5)]

3 sliders BeforeAfterSlider (mesmo componente):
  Exemplo 1: Lábios
  Exemplo 2: Harmonização facial
  Exemplo 3: Aplicação de toxina — resultado natural

  Imagens: geradas por IA (antes/depois estética)

Stats abaixo [glass-dark]:
  [500+] Procedimentos  |  [98%] Satisfação  |  [5⭐] Avaliação média
```

## DEPOIMENTOS

```
Fundo: --bg

Tag: "O QUE DIZEM NOSSAS CLIENTES"
Headline: Experiências que
          transformam vidas.

2 cards [glass sobre --bg-alt]:

  Card 1:
  Nome: Isabela Mendonça, 38 anos
  ★★★★★
  "Tinha receio do botox mas a Dra. explicou cada detalhe.
   O resultado ficou tão natural que ninguém percebeu que
   fiz nada — só falam que estou mais descansada."

  Card 2:
  Nome: Patrícia Viana, 43 anos
  ★★★★★
  "Já fui em outras clínicas mas a Íris é outra experiência.
   Atendimento exclusivo, ambiente lindo, resultados incríveis."

  Badges notificação flutuantes [glass] acima dos cards:
  [Instagram] "Que resultado incrível!" · há 2h
  [WhatsApp] "Amei demais! Já indiquei!" · há 45m
```

## CTA FINAL + FOOTER

```
Fundo: --bg-dark (marrom escuro)
Textura grain intensificada

Headline: Sua transformação começa
          com uma conversa.
          [--font-display, 48px, branco]

Sub: Atendimento exclusivo, com hora marcada.
     Sem espera, sem pressa.
     [rgba(255,255,255,0.6)]

Botão: "Quero agendar minha avaliação →"
       [fundo --accent, branco, grande]

Footer:
  Endereço: Rua Recife, 3000 · Adrianópolis · Manaus - AM
  Horário: Seg a Sex: 9h às 19h · Sáb: 9h às 14h
  Telefone: (92) 9 8888-0002
  [rgba(255,255,255,0.4), 13px]
```

---

# TEMPLATE 3 — Dra. Camila Rocha · Psicologia
**Rota:** /demo/psicologia
**Arquivo:** app/demo/psicologia/page.tsx

## Paleta
```css
--accent:        #4A6741;   /* verde sálvia escuro */
--accent-mid:    #7A9E6E;   /* sálvia médio */
--accent-light:  #C8DBBB;   /* sálvia claro */
--bg:            #F5F2EE;   /* off-white terra */
--bg-alt:        #EDE8E0;   /* bege terra */
--bg-warm:       #2C2416;   /* marrom quente escuro */
--text:          #1E1A14;
--text-muted:    #6B6358;
```

## CONCEITO VISUAL

**Diferente do Odonto e Estética:**
- Sem glassmorphism — mais limpo, mais seguro
- Tipografia com mais espaçamento, mais respiração
- Vídeo do AMBIENTE do consultório (não close-up da profissional)
- Sem badges flutuantes de "notificação" — não combina com o tom
- Elementos decorativos sutis: linha horizontal, dots, aspas grandes

**Tom:** editorial, literário, acolhedor, honesto.
Parece mais um artigo de revista do que um site de clínica.

## NAV EDITORIAL

```
Logo: "Dra. Camila Rocha" em --font-display, 16px
      abaixo: "Psicóloga · CRP 20/00000-0" em --font-body, 11px, --text-muted

Links: Início · Sobre · Psicoterapia · Como funciona · Contato

CTA: "Agendar sessão"
     [borda 1px --accent, texto --accent, sem fundo]

Nav: fundo --bg, borda-bottom 1px rgba(0,0,0,0.06), sticky top-40px
```

## HERO — VÍDEO DO CONSULTÓRIO

**Layout:** vídeo do AMBIENTE do consultório (plantas, luz natural, poltrona).
Overlay suave que preserva o tom acolhedor. Copy editorial à esquerda.
A profissional aparece depois, na seção Sobre.

```
Fundo: VÍDEO do consultório (gerado por IA — ambiente, não pessoa)
  <video autoPlay muted loop playsInline>
    <source src="/videos/demos/psico-hero.webm" type="video/webm" />
    <source src="/videos/demos/psico-hero.mp4" type="video/mp4" />
  </video>
  poster: /images/demos/psico-hero-poster.jpg
  class: object-cover scale-[1.03]

Overlay: bg-gradient-to-r from-[#F5F2EE]/92 via-[#F5F2EE]/60 to-transparent
(overlay claro, não escuro — tom editorial)

Texto (esquerda, sobre o overlay):

  Linha decorativa: 2px horizontal 40px, --accent-mid, acima do texto

  Headline: Um espaço seguro
            para você
            se encontrar.
            [--font-display, 58px desktop / 36px mobile, --text]
            ["se encontrar." em --accent italic]

  Sub: Psicoterapia individual para adultos que buscam
       autoconhecimento, equilíbrio emocional
       e qualidade de vida.
       Atendimento presencial em Manaus e online.
       [15px, --text-muted, max-width 440px, line-height 1.8]

  CTA primário: "Agendar primeira sessão →"
                [fundo --accent, branco]
  CTA secundário: "Saiba como funciona ↓"
                  [sem fundo, borda 1px --text-muted, --text-muted]
  Micro: "Primeira sessão de acolhimento sem compromisso."
         [12px, --text-muted]

Decorativo direito (se visível sobre o vídeo):
  Aspas " em --font-display, 180px, --accent-light opacity 0.4
  Texto em aspas: "O que não é nomeado não pode ser transformado."
  [13px, --text-muted, italic, max-width 200px]
```

## SOBRE — LONGA E PESSOAL

```
Fundo: --bg-alt

Layout: duas colunas. Foto esquerda, texto direita.

Foto:
  Imagem da psicóloga sentada no consultório (gerada por IA)
  Proporção 3/4, sem border-radius
  Elemento decorativo: faixa --accent-light 8px width, altura 60%,
  posicionada à esquerda da foto (como moldura lateral)

  Credencial [pill simples, sem glass]:
  "CRP 20/00000-0" [--accent, borda --accent-light, fundo --accent-light opacity 0.3]

Texto:
  Tag: "SOBRE"
  Linha decorativa: 1px, 32px, --accent-mid

  Headline: Olá, sou a Camila.
            [--font-display, 38px italic]

  Texto (LONGO — isso é editorial):
    Sou psicóloga formada pela Universidade Federal do Amazonas,
    com especialização em Terapia Cognitivo-Comportamental pelo
    Instituto de Psicologia Aplicada de São Paulo.

    Atendo adultos que estão passando por ansiedade, depressão,
    crises de vida, dificuldades nos relacionamentos — ou simplesmente
    querem se conhecer melhor.

    Acredito que cada pessoa já carrega em si os recursos para sua
    transformação. Meu papel é caminhar ao seu lado nesse processo
    com escuta genuína e sem julgamentos.

    [16px, --text, line-height 1.9, espaçamento generoso entre parágrafos]

  Formações [lista limpa, sem ícone — só linha 1px --accent-light]:
    Psicologia — Universidade Federal do Amazonas
    Especialização TCC — Instituto de Psicologia Aplicada, SP
    Formação em Mindfulness — Centro Mente Aberta UNIFESP
```

## ABORDAGEM TERAPÊUTICA

```
Fundo: --bg

Tag: "COMO TRABALHO"
Linha decorativa: --accent-mid

Headline: Cada processo terapêutico
          é único como você.

3 cards editoriais (sem ícone — só número e texto):

  [1]
  Título: Terapia Cognitivo-Comportamental
  Desc:   A abordagem mais estudada e com maior evidência científica.
          Focamos em compreender como pensamentos influenciam
          emoções e comportamentos — e como mudá-los.

  [2]
  Título: Mindfulness e Atenção Plena
  Desc:   Técnicas de presença e consciência que reduzem ansiedade
          e melhoram a qualidade de vida no dia a dia.

  [3]
  Título: Psicoeducação
  Desc:   Entender o que está acontecendo com você é parte
          fundamental do tratamento. Trabalhamos o autoconhecimento
          como ferramenta de transformação.

  Estilo cards:
    Sem borda visível — só padding e espaço
    Número: [1] em --font-display, 48px, --accent-light, bold
    Borda-top: 1px --accent-light
    Fundo: transparente
```

## COMO FUNCIONA — 4 STEPS

```
Fundo: --bg-warm (marrom quente)

Tag: "O PROCESSO" [--accent-light]
Headline: Do primeiro contato
          à transformação real.
          [--font-display, 40px, branco]

Steps verticais (linha sálvia conectando):

  [01]  Primeiro contato
        Me chame no WhatsApp para uma conversa de 15 minutos.
        Sem compromisso, sem formulário.
        Duração: "15 minutos" [pill --accent-light opacity 0.3, texto --accent-light]

  [02]  Sessão de acolhimento
        Nosso primeiro encontro. Você me conta sua história,
        eu apresento como trabalhamos. Decidimos juntos.
        Duração: "50 minutos"

  [03]  Início do processo terapêutico
        Sessões semanais, mesmo horário.
        Construímos seu processo no seu ritmo.
        Duração: "Semanal"

  [04]  Transformação percebida
        Com o tempo, mudanças concretas nos pensamentos,
        nas relações, na forma de encarar a vida.
        Duração: "Contínuo"

  Números: [0X] em --font-display, 56px, --accent-mid opacity 0.4
  Linha: 1px dashed --accent-mid conectando verticalmente
  Texto título: 16px, branco, bold
  Texto desc: 14px, rgba(255,255,255,0.6)
```

## DEPOIMENTOS

```
Fundo: --bg

Tag: "DEPOIMENTOS"
Headline: Experiências de quem
          já caminhou comigo.

Nota legal abaixo do headline:
  "Identidades preservadas a pedido, conforme Código de Ética do CFP."
  [11px, --text-muted, italic]

2 cards (SEM glassmorphism — cards simples, editoriais):

  Card 1:
  Aspas: " [--font-display, 60px, --accent-light, display block]
  Texto: "Cheguei na terapia sem acreditar muito que ia funcionar.
          Depois de 6 meses com a Dra. Camila entendo coisas de mim
          que nunca tinha parado para olhar."
  Autor: M.F. · 29 anos
  [linha 1px --accent-light, depois nome]

  Card 2:
  Texto: "O que me surpreendeu foi a leveza do processo. Esperava
          algo pesado e foi o contrário. A Camila tem uma escuta
          incrível e me fez sentir seguro desde a primeira sessão."
  Autor: T.S. · 41 anos

  Estilo:
    background: --bg-alt
    border-left: 3px solid --accent-mid
    padding: 32px
    sem border-radius
```

## CTA FINAL + FOOTER

```
Fundo: --bg-alt
Textura grain

Linha decorativa: 40px, 2px, --accent-mid, centralizada acima do texto

Headline: Dar o primeiro passo
          é a parte mais difícil.
          [--font-display, 44px, --text, centralizado]

Sub: O resto a gente faz juntos.
     Me chame no WhatsApp e vamos conversar
     sem compromisso.
     [16px, --text-muted, centralizado]

Botão: "Quero agendar minha primeira sessão →"
       [fundo --accent, branco, padding 18px 36px]

Micro: Atendimento presencial em Manaus · Online para todo o Brasil
       [12px, --text-muted, centralizado]

Footer:
  "Dra. Camila Rocha · Psicóloga · CRP 20/00000-0"
  "Rua Leonardo Malcher, 726 · Centro · Manaus - AM"
  [(92) 9 8888-0003]
  [12px, --text-muted, centralizado]
```

---

## ESTRUTURA DE ARQUIVOS

```
app/
  demo/
    odonto/
      page.tsx
    estetica/
      page.tsx
    psicologia/
      page.tsx

components/
  demo/
    shared/
      BannerDemo.tsx          ← banner fixo com CTA (igual nos 3)
      BeforeAfterSlider.tsx   ← componente before/after reutilizável
      GlassBadge.tsx          ← badge glass flutuante reutilizável
    odonto/
      HeroOdonto.tsx
      SobreOdonto.tsx
      ServicosOdonto.tsx
      AntesDepoisOdonto.tsx
      DepoimentosOdonto.tsx
      CtaOdonto.tsx
    estetica/
      HeroEstetica.tsx
      SobreEstetica.tsx
      TratamentosEstetica.tsx
      AntesDepoisEstetica.tsx
      DepoimentosEstetica.tsx
      CtaEstetica.tsx
    psicologia/
      HeroPsico.tsx
      SobrePsico.tsx
      AbordagemPsico.tsx
      ComoFuncionaPsico.tsx
      DepoimentosPsico.tsx
      CtaPsico.tsx
```

---

## ASSETS NECESSÁRIOS (gerar ANTES de buildar)

```
/public/videos/demos/
  odonto-hero.webm        ← vídeo IA da dentista (WebM VP9, ~800KB)
  odonto-hero.mp4         ← fallback MP4 H.264
  estetica-hero.webm      ← vídeo IA da esteticista
  estetica-hero.mp4
  psico-hero.webm         ← vídeo IA do consultório (ambiente)
  psico-hero.mp4

/public/images/demos/
  odonto-hero-poster.jpg  ← poster do vídeo (1º frame)
  odonto-sobre.jpg        ← foto sobre a profissional
  estetica-hero-poster.jpg
  estetica-sobre.jpg
  psico-hero-poster.jpg
  psico-sobre.jpg

Pipeline por asset:
  1. ChatGPT 4o → foto profissional
  2. Kling AI / Runway → animar para vídeo 4-6s
  3. ffmpeg -c:v libvpx-vp9 -b:v 800k → WebM
  4. ffmpeg -c:v libx264 -crf 28 → MP4
  5. ffmpeg -ss 00:00:01 -frames:v 1 → poster JPG
```

---

## CHECKLIST GERAL

```
[ ] Assets: gerar todas as fotos/vídeos IA ANTES de buildar
[ ] Banner demo com CTA "Quero o meu assim →" nos 3
[ ] Font: Cormorant Garamond + Geist via next/font
[ ] Grain texture em todas as seções via CSS pseudo-elemento
[ ] VÍDEO no hero dos 3 templates (não foto estática)
[ ] Hero: vídeo full + overlay + copy (mesmo padrão do /site)
[ ] Badges glass flutuando com animação float (Odonto + Estética)
[ ] Before/after slider funcional com touch (Odonto + Estética)
[ ] Depoimentos Psico: sem glass, estilo editorial
[ ] Stats com counter animado no scroll
[ ] Metadata/SEO completo em cada demo (title, description, OG, JSON-LD)
[ ] Todos os CTAs → wa.me com mensagem contextualizada por demo
[ ] Mobile testado em 375px e 390px
[ ] Psicologia NÃO tem antes/depois — estrutura própria
[ ] scale-[1.03] em todos os vídeos (fix sub-pixel)
```
