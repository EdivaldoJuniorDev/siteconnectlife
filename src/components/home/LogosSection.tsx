import Marquee from "@/components/ui/Marquee";

const TECHS = [
  "Next.js",
  "Vercel",
  "Supabase",
  "Stripe",
  "Tailwind CSS",
  "Framer Motion",
  "OpenAI",
  "TypeScript",
  "Prisma",
  "Resend",
  "Shadcn/ui",
  "PostgreSQL",
];

export default function LogosSection() {
  return (
    <section className="bg-surface-light border-b border-black/[0.06] py-14">
      <p className="text-center text-[10px] uppercase tracking-[0.2em] text-text-secondary mb-8">
        Tecnologias que dominamos em cada projeto
      </p>
      <Marquee>
        {TECHS.map((tech) => (
          <span
            key={tech}
            className="text-xl md:text-2xl font-display tracking-tight text-[#B4B2A9] hover:text-text-primary transition-colors"
          >
            {tech}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
