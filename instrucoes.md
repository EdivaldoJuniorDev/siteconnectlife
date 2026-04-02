Crie a landing page completa da ConnectLife (connectlife.com.br), uma Software House 
brasileira focada em Sites, Micro-SaaS, SaaS e Automações para negócios.

Stack: Next.js 14 (App Router) + Tailwind + Shadcn/ui + Framer Motion

---

IDENTIDADE VISUAL

Logo: http://connectlife.com.br/wp-content/uploads/2024/09/cropped-Ativo-1.png
(buscar as cores dominantes da logo para montar o design system)

Paleta base:
- Background: #F7F5F2 (off-white quente, não branco puro)
- Superfícies: #FAFAF8
- Bordas: 1px solid rgba(0,0,0,0.08) — finíssimas
- Texto primário: #0F0F0E
- Texto secundário: #6B6B67
- Accent: extrair da logo (provavelmente azul ou verde escuro)

Design System:
- border-radius: 0px — zero arredondamento, ângulos retos em tudo
- Sem sombras pesadas
- Glassmorphism: backdrop-blur-md + bg-white/60 + border border-white/20
- Textura de fundo: noise/grain SVG sutil sobre o off-white
- Grid de dots ou linhas finas tipo firecrwal.dev como elemento decorativo
- Tipografia: Fonte display geométrica + sans-serif refinada
  Sugestão: "Instrument Serif" ou "DM Serif Display" para headlines + "Geist" para corpo

---

SEÇÕES DA LANDING PAGE

1. HERO
- Headline principal: "Transformamos código em crescimento."
- Subheadline: "Sites, automações e SaaS feitos com precisão técnica e foco em resultado."
- CTA primário: "Ver nossos projetos" (âncora para portfólio)
- CTA secundário: "Falar com a equipe" (WhatsApp link)
- Background: off-white com grid de dots animado (movimento lento e sutil)
- Elemento hero: mockup de site em glassmorphism flutuando com animação de entrada

2. SERVIÇOS (4 cards)
- Sites e Landing Pages — R$ 1.490 a R$ 2.490
- Micro-SaaS — sob consulta
- Automações e Integrações — sob consulta
- SaaS completo — sob consulta
Cards: fundo glass, borda fina, hover com leve elevação + linha accent colorida no top
Layout: 2x2 grid

3. COMO TRABALHAMOS (processo em 4 steps horizontal)
- Briefing → Design → Desenvolvimento → Entrega
- Linha conectando os steps com animação de progresso no scroll
- Cada step tem número grande em outline e descrição curta

4. PORTFÓLIO (placeholder por agora — 3 cards vazios com label "Em breve")
- Layout tipo bento grid
- Cards com glassmorphism

5. POR QUE CONNECTLIFE
- 3 diferenciais em layout assimétrico:
  1. "Stack moderna" — Next.js, Vercel, Supabase
  2. "Entrega rápida" — Sites em 5 a 7 dias úteis
  3. "Resultado, não só código" — foco em conversão e performance

6. CTA FINAL
- "Pronto para começar?"
- Texto: "Seu próximo projeto começa com uma conversa."
- Botão: "Falar no WhatsApp" — abre wa.me/55[NUMERO]
- Background com textura diferente (pode ser mais escura — charcoal #1A1A18)

7. FOOTER
- Logo + links simples
- "© 2025 ConnectLife Tecnologia — Manaus, AM"

---

ANIMAÇÕES (Framer Motion)

- Hero: staggered entrance — texto entra de baixo para cima, mockup da direita
- Dots grid: movimento parallax lento no mouse move
- Cards serviço: hover com translateY(-4px) + borda accent aparece
- Steps processo: linha de progresso anima no scroll (useInView)
- Seção "Por que ConnectLife": counter animado nos números ao entrar na viewport
- Scroll suave entre seções

---

ELEMENTOS DECORATIVOS

- Dots grid: padrão de pontos #0F0F0E com opacity 0.04, espaçamento 24px
- Linha diagonal fina cruzando o hero (inspiração Firecrwal.dev)
- Tags técnicas flutuando no hero: "Next.js", "Vercel", "Supabase", "Stripe"
  (como badges glass com borda fina, animação float suave)

---

NOTAS TÉCNICAS

- Mobile-first e responsivo
- SEO: meta tags completas, OG tags
title: "Criação de Site para Clínicas em Manaus | ConnectLife"
description: "Sites profissionais para clínicas, consultórios e médicos em Manaus. 
Entrega em 7 dias, Next.js, foco em captação de pacientes. A partir de R$1.490."

keywords-foco:
- "criação de site para clínica Manaus"
- "site para dentista Manaus"  
- "site para consultório médico Manaus"
- "agência de sites Manaus"
- "desenvolvimento de site Manaus"
SEO ADICIONAL

Schema markup: LocalBusiness + ProfessionalService (JSON-LD)
Google Meu Negócio: preparar imagens e descrição junto com o site
Sitemap.xml e robots.txt configurados

Páginas de nicho (criar estrutura de rota dinâmica):
/site-para-[especialidade]-manaus
Cada página com:
- H1 único com keyword
- Copy específico da especialidade  
- Demo/mockup do nicho
- FAQ schema markup
- CTA para WhatsApp com mensagem pré-preenchida:
  "Olá, quero um site para minha clínica de [especialidade]"

Google Search Console: configurar no primeiro dia de deploy
Meta tags OG completas para compartilhamento


- Sem dark mode por enquanto — só light
- WhatsApp number placeholder: 92 9 8207-8515 (Manaus DDD 92)
- Favicon: usar a logo
- Performance: imagens otimizadas, lazy loading
- Componentes separados por seção (HeroSection, ServicesSection, etc.)