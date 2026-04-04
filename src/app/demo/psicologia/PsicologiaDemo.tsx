"use client";

import { motion } from "framer-motion";
import BannerDemo from "@/components/demo/shared/BannerDemo";

const WA =
  "https://wa.me/5592982078515?text=Vi%20o%20demo%20Dra.%20Camila%20Rocha%20e%20quero%20um%20site%20assim%20para%20meu%20consult%C3%B3rio";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const vp = { once: true, margin: "-60px" as const };

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] pt-10 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/Demo 3 — Dra. Camila Rocha (ambiente consultório) 02.jpg"
        alt="Consultório da Dra. Camila Rocha"
        className="absolute inset-0 w-full h-full object-cover scale-[1.03]"
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F2EE]/[0.92] via-[#F5F2EE]/60 to-transparent" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: 40 }}
              viewport={vp} transition={{ duration: 0.6 }}
              className="h-[2px] bg-[#7A9E6E] mb-6"
            />
            <motion.h1
              initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
              className="font-cormorant text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] text-[#1E1A14]"
            >
              Um espaço seguro para você{" "}
              <span className="text-[#4A6741] italic">se encontrar.</span>
            </motion.h1>
            <motion.p
              initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
              className="mt-6 text-[#6B6358] text-base leading-[1.8] max-w-[440px]"
            >
              Psicoterapia individual para adultos que buscam autoconhecimento,
              equilíbrio emocional e qualidade de vida. Atendimento presencial em
              Manaus e online para todo o Brasil.
            </motion.p>
            <motion.div
              initial="hidden" whileInView="show" viewport={vp} custom={2} variants={fade}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#4A6741] text-white text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
              >
                Agendar primeira sessão
                <span className="text-base">&#8594;</span>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-[#6B6358] text-[#6B6358] text-sm font-semibold tracking-wide transition-colors hover:bg-[#6B6358]/5"
              >
                Saiba como funciona &#8595;
              </a>
            </motion.div>
            <motion.p
              initial="hidden" whileInView="show" viewport={vp} custom={3} variants={fade}
              className="mt-4 text-[#6B6358] text-xs"
            >
              Primeira sessão de acolhimento sem compromisso.
            </motion.p>
          </div>

          {/* Right decorative quote */}
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={vp} transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end justify-center pr-8"
          >
            <span className="font-cormorant text-[180px] leading-none text-[#C8DBBB]/40 select-none">
              &ldquo;
            </span>
            <p className="text-[#6B6358]/60 text-sm italic max-w-[240px] text-right -mt-12 leading-relaxed">
              A escuta genuína é o primeiro passo para a transformação.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Nav (editorial) ─── */
function Nav() {
  const links = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Psicoterapia", href: "#psicoterapia" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="sticky top-10 z-40 bg-[#F5F2EE] border-b border-black/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <div>
          <span className="font-cormorant text-[16px] font-semibold text-[#1E1A14]">
            Dra. Camila Rocha
          </span>
          <span className="block text-[11px] text-[#6B6358] -mt-0.5">
            Psicóloga &middot; CRP 20/00000-0
          </span>
        </div>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs text-[#6B6358] hover:text-[#1E1A14] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA} target="_blank" rel="noopener noreferrer"
            className="text-xs font-semibold text-[#4A6741] border border-[#4A6741] px-4 py-2 transition-colors hover:bg-[#4A6741] hover:text-white"
          >
            Agendar sessão
          </a>
        </div>
        <a
          href={WA} target="_blank" rel="noopener noreferrer"
          className="md:hidden text-xs font-semibold text-[#4A6741] border border-[#4A6741] px-4 py-2"
        >
          Agendar
        </a>
      </div>
    </nav>
  );
}

/* ─── Sobre ─── */
function Sobre() {
  const formations = [
    "Psicologia — UFAM",
    "Especialização TCC — SP",
    "Mindfulness — UNIFESP",
  ];

  return (
    <section id="sobre" className="bg-[#EDE8E0] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={vp} transition={{ duration: 0.7 }}
            className="relative flex"
          >
            {/* Decorative bar */}
            <div className="hidden sm:block w-2 bg-[#C8DBBB] self-stretch max-h-[60%] my-auto mr-5 flex-shrink-0" />
            <div className="relative w-full">
              <img
                src="/images/Demo 3 — Dra. Camila Rocha (hero principal) .png"
                alt="Dra. Camila Rocha — Psicóloga"
                className="w-full aspect-[3/4] object-cover"
              />
              {/* Credential pill */}
              <span className="absolute bottom-5 left-5 bg-[#F5F2EE] text-[#4A6741] text-xs font-medium px-3 py-1.5">
                CRP 20/00000-0
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.div
              initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
              className="flex items-center gap-3 mb-6"
            >
              <span className="text-xs tracking-[0.2em] text-[#6B6358] font-medium uppercase">
                Sobre
              </span>
              <div className="w-8 h-px bg-[#7A9E6E]" />
            </motion.div>

            <motion.h2
              initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
              className="font-cormorant italic text-3xl sm:text-4xl lg:text-[42px] text-[#1E1A14] leading-[1.15]"
            >
              Olá, sou a Camila.
            </motion.h2>

            <motion.div
              initial="hidden" whileInView="show" viewport={vp} custom={2} variants={fade}
              className="mt-8 space-y-6 text-[#6B6358] text-[15px] leading-[1.9]"
            >
              <p>
                Sou psicóloga formada pela Universidade Federal do Amazonas, com
                especialização em Terapia Cognitivo-Comportamental pelo Instituto de
                Psicologia Aplicada de São Paulo. Ao longo dos anos, fui moldada tanto
                pela teoria quanto pela coragem dos pacientes que confiaram em mim suas
                histórias.
              </p>
              <p>
                Atendo adultos que estão passando por ansiedade, depressão, crises de
                vida, dificuldades nos relacionamentos ou simplesmente querem se conhecer
                melhor. Não tenho pressa. Acredito que o processo terapêutico tem o ritmo
                de cada pessoa — e que forçar esse tempo é desrespeitá-lo.
              </p>
              <p>
                O meu papel não é ter respostas prontas. É caminhar ao seu lado, com
                escuta genuína e sem julgamentos, até que você consiga enxergar em si
                os recursos que sempre estiveram aí. A terapia, no fundo, é um reencontro
                com quem você realmente é.
              </p>
            </motion.div>

            {/* Formations */}
            <motion.div
              initial="hidden" whileInView="show" viewport={vp} custom={3} variants={fade}
              className="mt-10"
            >
              {formations.map((f, i) => (
                <div key={f}>
                  {i === 0 && <div className="h-px bg-[#C8DBBB] mb-4" />}
                  <p className="text-sm text-[#1E1A14] py-3">{f}</p>
                  <div className="h-px bg-[#C8DBBB]" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Abordagem Terapêutica ─── */
function Abordagem() {
  const cards = [
    {
      num: "1",
      title: "Terapia Cognitivo-Comportamental",
      desc: "Abordagem baseada em evidências que ajuda a identificar e transformar padrões de pensamento que geram sofrimento. Trabalhamos juntos em estratégias práticas para o dia a dia.",
    },
    {
      num: "2",
      title: "Mindfulness e Atenção Plena",
      desc: "Técnicas de presença e consciência corporal que reduzem a ansiedade e ampliam a conexão consigo. Um convite para habitar o momento presente com gentileza.",
    },
    {
      num: "3",
      title: "Psicoeducação",
      desc: "Compreender o que acontece com você é parte fundamental da cura. Compartilho conhecimento sobre processos emocionais para que você se torne protagonista da sua saúde mental.",
    },
  ];

  return (
    <section id="psicoterapia" className="bg-[#F5F2EE] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs tracking-[0.2em] text-[#6B6358] font-medium uppercase">
            Como trabalho
          </span>
          <div className="w-8 h-px bg-[#7A9E6E]" />
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
          className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] text-[#1E1A14] leading-[1.15] max-w-2xl"
        >
          Cada processo terapêutico é único como você.
        </motion.h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((c, i) => (
            <motion.div
              key={c.num}
              initial="hidden" whileInView="show" viewport={vp} custom={i + 2} variants={fade}
              className="pt-8"
            >
              <div className="border-t border-[#C8DBBB] pt-6">
                <span className="font-cormorant text-[48px] leading-none text-[#C8DBBB] block mb-4">
                  {c.num}
                </span>
                <h3 className="text-[17px] font-semibold text-[#1E1A14] mb-3">
                  {c.title}
                </h3>
                <p className="text-sm text-[#6B6358] leading-[1.8]">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Como Funciona ─── */
function ComoFunciona() {
  const steps = [
    {
      num: "01",
      title: "Primeiro contato",
      pill: "15 min",
      desc: "Me chame no WhatsApp. Vamos conversar por 15 minutos, sem compromisso, para entender o que você está buscando e se faz sentido seguirmos juntos.",
    },
    {
      num: "02",
      title: "Sessão de acolhimento",
      pill: "50 min",
      desc: "Nosso primeiro encontro. Você me conta sua história no seu ritmo. Eu te apresento como trabalho. Juntos, decidimos se faz sentido continuar.",
    },
    {
      num: "03",
      title: "Início do processo",
      pill: "Semanal",
      desc: "Sessões semanais, mesmo horário, mesmo espaço seguro. Construímos seu processo terapêutico respeitando o seu tempo e as suas necessidades.",
    },
    {
      num: "04",
      title: "Transformação percebida",
      pill: "Contínuo",
      desc: "Com o tempo, você percebe mudanças concretas — nos pensamentos, nas relações, na forma de encarar a vida. A terapia se torna parte de quem você é.",
    },
  ];

  return (
    <section id="como-funciona" className="bg-[#2C2416] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs tracking-[0.2em] text-[#C8DBBB] font-medium uppercase">
            O processo
          </span>
          <div className="w-8 h-px bg-[#7A9E6E]" />
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
          className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] text-white leading-[1.15] mb-16"
        >
          Do primeiro contato à transformação real.
        </motion.h2>

        <div className="relative">
          {/* Dashed connecting line */}
          <div className="absolute left-[27px] top-8 bottom-8 w-px border-l border-dashed border-[#7A9E6E]/40" />

          <div className="space-y-12">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="show" viewport={vp} custom={i + 2} variants={fade}
                className="relative flex gap-8"
              >
                {/* Number */}
                <span className="font-cormorant text-[56px] leading-none text-[#7A9E6E]/40 flex-shrink-0 w-14 text-center relative z-10">
                  {s.num}
                </span>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white text-[16px] font-bold">
                      {s.title}
                    </h3>
                    <span className="bg-[#C8DBBB]/20 text-[#C8DBBB] text-xs px-2 py-0.5">
                      {s.pill}
                    </span>
                  </div>
                  <p className="text-white/60 text-[14px] leading-[1.7]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Depoimentos ─── */
function Depoimentos() {
  const deps = [
    {
      texto:
        "Cheguei na terapia sem acreditar muito que ia funcionar. Depois de 6 meses com a Dra. Camila entendo coisas de mim que nunca tinha parado para olhar. Mudou minha vida de verdade.",
      autor: "M.F. · 29 anos",
    },
    {
      texto:
        "O que me surpreendeu foi a leveza do processo. Eu esperava algo pesado e foi o contrário. A Camila tem uma escuta incrível e me fez sentir seguro desde a primeira sessão.",
      autor: "T.S. · 41 anos",
    },
  ];

  return (
    <section className="bg-[#F5F2EE] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
          className="flex items-center gap-3 mb-6"
        >
          <span className="text-xs tracking-[0.2em] text-[#6B6358] font-medium uppercase">
            Depoimentos
          </span>
          <div className="w-8 h-px bg-[#7A9E6E]" />
        </motion.div>

        <motion.h2
          initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
          className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] text-[#1E1A14] leading-[1.15] mb-4"
        >
          Quem já passou por aqui.
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="show" viewport={vp} custom={2} variants={fade}
          className="text-[#6B6358] text-[11px] italic mb-14"
        >
          Identidades preservadas conforme Código de Ética do CFP.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deps.map((d, i) => (
            <motion.div
              key={d.autor}
              initial="hidden" whileInView="show" viewport={vp} custom={i + 3} variants={fade}
              className="bg-[#EDE8E0] border-l-[3px] border-[#7A9E6E] p-8"
            >
              <span className="font-cormorant text-[60px] leading-none text-[#C8DBBB] block -mb-4">
                &ldquo;
              </span>
              <p className="text-[15px] text-[#1E1A14] leading-[1.8] mt-2">
                {d.texto}
              </p>
              <div className="mt-6">
                <div className="w-8 h-px bg-[#C8DBBB] mb-3" />
                <p className="text-sm text-[#6B6358] font-medium">{d.autor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Final + Footer ─── */
function CTAFinal() {
  return (
    <section id="contato" className="relative bg-[#EDE8E0] py-24 md:py-32 overflow-hidden">
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ width: 0 }} whileInView={{ width: 40 }}
          viewport={vp} transition={{ duration: 0.6 }}
          className="h-[2px] bg-[#7A9E6E] mx-auto mb-8"
        />

        <motion.h2
          initial="hidden" whileInView="show" viewport={vp} custom={0} variants={fade}
          className="font-cormorant text-3xl sm:text-4xl lg:text-[42px] text-[#1E1A14] leading-[1.15]"
        >
          Dar o primeiro passo é a parte mais difícil.
        </motion.h2>

        <motion.p
          initial="hidden" whileInView="show" viewport={vp} custom={1} variants={fade}
          className="mt-5 text-[#6B6358] text-base leading-[1.7]"
        >
          O resto a gente faz juntos. Me chame no WhatsApp e vamos conversar sem compromisso.
        </motion.p>

        <motion.div
          initial="hidden" whileInView="show" viewport={vp} custom={2} variants={fade}
        >
          <a
            href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-8 px-8 py-4 bg-[#4A6741] text-white text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            Quero agendar minha primeira sessão
            <span className="text-base">&#8594;</span>
          </a>
        </motion.div>

        <motion.p
          initial="hidden" whileInView="show" viewport={vp} custom={3} variants={fade}
          className="mt-4 text-[#6B6358] text-xs"
        >
          Atendimento presencial em Manaus &middot; Online para todo o Brasil
        </motion.p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#EDE8E0] border-t border-black/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-1.5">
        <p className="font-cormorant text-lg text-[#1E1A14]">
          Dra. Camila Rocha &mdash; Psicóloga
        </p>
        <p className="text-xs text-[#6B6358]">CRP 20/00000-0</p>
        <p className="text-xs text-[#6B6358]">
          Rua Leonardo Malcher, 726 &mdash; Centro, Manaus &ndash; AM
        </p>
        <p className="text-xs text-[#6B6358]">
          contato@dracamilarocha.com.br &middot; (92) 9 8888-0003
        </p>
        <p className="text-xs text-[#6B6358] pt-4">
          &copy; 2025 Dra. Camila Rocha. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ─── Main ─── */
export default function PsicologiaDemo() {
  return (
    <div className="font-sans bg-[#F5F2EE] text-[#1E1A14]">
      <BannerDemo />
      <Hero />
      <Nav />
      <Sobre />
      <Abordagem />
      <ComoFunciona />
      <Depoimentos />
      <CTAFinal />
      <Footer />
    </div>
  );
}
