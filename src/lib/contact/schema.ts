import { z } from "zod";

export const PROJECT_TYPES = [
  { value: "site", label: "Site profissional / LP" },
  { value: "saas", label: "SaaS / Micro-SaaS" },
  { value: "automacao", label: "Automação / Integração" },
  { value: "sistema", label: "Sistema sob medida / ERP" },
  { value: "outro", label: "Outro / Não sei ainda" },
] as const;

export const BUDGET_RANGES = [
  { value: "ate-5k", label: "Até R$ 5.000" },
  { value: "5k-15k", label: "R$ 5.000 – R$ 15.000" },
  { value: "15k-50k", label: "R$ 15.000 – R$ 50.000" },
  { value: "50k-mais", label: "Acima de R$ 50.000" },
  { value: "a-definir", label: "A definir / Preciso de ajuda" },
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  email: z.string().trim().email("E-mail inválido"),
  phone: z
    .string()
    .trim()
    .min(8, "Telefone inválido")
    .max(20, "Telefone inválido"),
  projectType: z.enum(
    PROJECT_TYPES.map((t) => t.value) as [string, ...string[]],
    { message: "Selecione o tipo de projeto" },
  ),
  budget: z
    .enum(BUDGET_RANGES.map((b) => b.value) as [string, ...string[]])
    .optional(),
  message: z
    .string()
    .trim()
    .min(10, "Descreva seu projeto em ao menos 10 caracteres")
    .max(2000, "Mensagem muito longa (máx. 2000 caracteres)"),
  consent: z.literal("on", {
    message: "Você precisa concordar com a política de privacidade",
  }),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function buildWhatsappMessage(input: ContactInput): string {
  const typeLabel =
    PROJECT_TYPES.find((t) => t.value === input.projectType)?.label ??
    input.projectType;
  const budgetLabel = input.budget
    ? BUDGET_RANGES.find((b) => b.value === input.budget)?.label
    : null;

  const lines = [
    `Olá! Vim pelo formulário do site.`,
    ``,
    `*Nome:* ${input.name}`,
    `*E-mail:* ${input.email}`,
    `*Telefone:* ${input.phone}`,
    `*Tipo de projeto:* ${typeLabel}`,
  ];
  if (budgetLabel) lines.push(`*Orçamento:* ${budgetLabel}`);
  lines.push(``, `*Mensagem:*`, input.message);

  return lines.join("\n");
}

export function buildWhatsappUrl(input: ContactInput): string {
  const text = encodeURIComponent(buildWhatsappMessage(input));
  return `https://wa.me/5592982078515?text=${text}`;
}
