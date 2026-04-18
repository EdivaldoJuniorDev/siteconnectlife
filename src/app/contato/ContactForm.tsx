"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import Link from "next/link";
import { submitContact } from "./actions";
import {
  BUDGET_RANGES,
  PROJECT_TYPES,
} from "@/lib/contact/schema";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
    >
      {pending ? "Enviando…" : "Enviar e abrir WhatsApp"}
    </button>
  );
}

function FieldError({ errors }: { errors?: string[] }) {
  if (!errors || errors.length === 0) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-red-600">
      {errors[0]}
    </p>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.status === "success") {
      window.open(state.whatsappUrl, "_blank", "noopener,noreferrer");
      formRef.current?.reset();
    }
  }, [state]);

  const fieldErrors =
    state?.status === "error" ? state.fieldErrors : undefined;

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="space-y-6"
      aria-label="Formulário de contato"
    >
      {state?.status === "success" && (
        <div
          role="status"
          className="border border-accent/40 bg-accent/5 p-4 text-sm text-text-primary"
        >
          Recebemos seu contato. Estamos te redirecionando para o WhatsApp — se
          o navegador bloqueou a nova aba,{" "}
          <a
            href={state.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-accent underline"
          >
            clique aqui
          </a>
          .
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Nome completo *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!fieldErrors?.name}
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
          />
          <FieldError errors={fieldErrors?.name} />
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            E-mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={!!fieldErrors?.email}
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
          />
          <FieldError errors={fieldErrors?.email} />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
        >
          Telefone / WhatsApp *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(92) 98207-8515"
          required
          aria-invalid={!!fieldErrors?.phone}
          className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
        <FieldError errors={fieldErrors?.phone} />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label
            htmlFor="projectType"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Tipo de projeto *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            aria-invalid={!!fieldErrors?.projectType}
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {PROJECT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <FieldError errors={fieldErrors?.projectType} />
        </div>

        <div>
          <label
            htmlFor="budget"
            className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
          >
            Orçamento estimado
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue=""
            className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
          >
            <option value="">Prefiro não informar</option>
            {BUDGET_RANGES.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-text-secondary"
        >
          Conte sobre seu projeto *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={!!fieldErrors?.message}
          className="w-full border border-black/15 bg-white px-4 py-3 text-sm text-text-primary outline-none transition-colors focus:border-accent"
        />
        <FieldError errors={fieldErrors?.message} />
      </div>

      <label className="flex items-start gap-3 text-xs text-text-secondary">
        <input
          name="consent"
          type="checkbox"
          required
          aria-invalid={!!fieldErrors?.consent}
          className="mt-0.5 h-4 w-4 accent-[#C8501A]"
        />
        <span>
          Concordo com o tratamento dos meus dados conforme a{" "}
          <Link
            href="/legal/politica-de-privacidade"
            className="underline hover:text-text-primary"
          >
            Política de Privacidade
          </Link>
          . Seus dados só serão usados para responder este contato.
        </span>
      </label>
      <FieldError errors={fieldErrors?.consent} />

      <SubmitButton />
    </form>
  );
}
