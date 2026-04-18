import FadeUp from "@/components/ui/FadeUp";
import Terminal from "@/components/ui/Terminal";

const BADGES = [
  { name: "Next.js 14", desc: "App Router, RSC, Server Actions" },
  { name: "TypeScript", desc: "tipagem em 100% do código" },
  { name: "Tailwind CSS", desc: "estilo sem CSS custom" },
  { name: "Supabase", desc: "banco, auth e storage" },
  { name: "Vercel", desc: "deploy e edge functions" },
  { name: "Stripe", desc: "pagamentos e assinaturas" },
  { name: "Framer Motion", desc: "animações de produção" },
  { name: "Shadcn/ui", desc: "componentes acessíveis" },
  { name: "Resend", desc: "email transacional" },
  { name: "OpenAI / Gemini", desc: "IA integrada quando faz sentido" },
  { name: "Prisma / Drizzle", desc: "ORM type-safe" },
  { name: "Zod", desc: "validação de dados" },
];

const TERMINAL_LINES = [
  { text: "npx create-next-app@latest meu-projeto", prompt: "$" as const, delay: 200 },
  { text: "TypeScript? Yes", prompt: "✓" as const, color: "dim" as const },
  { text: "Tailwind CSS? Yes", prompt: "✓" as const, color: "dim" as const },
  { text: "App Router? Yes", prompt: "✓" as const, color: "dim" as const },
  { text: " ", prompt: "" as const, delay: 600 },
  { text: "git push && vercel deploy", prompt: "$" as const, delay: 500 },
  { text: "Build completed in 23s", prompt: "✓" as const, color: "green" as const, delay: 600 },
  { text: "Ready: https://meu-projeto.vercel.app", prompt: "✓" as const, color: "green" as const },
];

export default function StackSection() {
  return (
    <section className="bg-dark-bg py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <FadeUp className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Tecnologia
          </p>
          <h2 className="font-display text-3xl leading-[1.1] text-white md:text-[40px]">
            As mesmas ferramentas que
            <br />
            empresas de bilhões usam.
          </h2>
          <p className="mt-4 text-base text-white/50">
            Não porque é moderno. Porque entrega resultado real.
          </p>
        </FadeUp>

        <FadeUp className="mb-16">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {BADGES.map((b) => (
              <span
                key={b.name}
                title={b.desc}
                className="border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] text-white/70 transition-all hover:border-white/30 hover:text-white"
              >
                {b.name}
              </span>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mx-auto max-w-2xl">
          <Terminal title="connectlife.sh" lines={TERMINAL_LINES} />
        </FadeUp>
      </div>
    </section>
  );
}
