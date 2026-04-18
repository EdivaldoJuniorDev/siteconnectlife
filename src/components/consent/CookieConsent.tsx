"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { pushConsentUpdate } from "@/lib/consent/gtag";
import { readConsent, writeConsent } from "@/lib/consent/storage";
import {
  ALL_GRANTED,
  DEFAULT_CONSENT,
  type ConsentState,
} from "@/lib/consent/types";

type View = "hidden" | "banner" | "customize";

export default function CookieConsent() {
  const [view, setView] = useState<View>("hidden");
  const [draft, setDraft] = useState<ConsentState>(DEFAULT_CONSENT);

  useEffect(() => {
    const existing = readConsent();
    if (!existing) {
      setView("banner");
      return;
    }
    setDraft(existing.state);
    pushConsentUpdate(existing.state);
  }, []);

  const persist = (state: ConsentState) => {
    writeConsent(state);
    pushConsentUpdate(state);
    setDraft(state);
    setView("hidden");
  };

  if (view === "hidden") return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-black/[0.08] bg-white/95 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        {view === "banner" ? (
          <>
            <div className="text-sm text-text-secondary max-w-2xl">
              Usamos cookies para melhorar sua experiência, medir audiência e
              personalizar conteúdo. Você pode aceitar todos ou escolher as
              categorias. Saiba mais na nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline underline-offset-2 text-text-primary"
              >
                Política de Privacidade
              </Link>
              .
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => persist(DEFAULT_CONSENT)}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary"
              >
                Rejeitar
              </button>
              <button
                type="button"
                onClick={() => setView("customize")}
                className="border border-black/[0.12] px-4 py-2 text-sm"
              >
                Personalizar
              </button>
              <button
                type="button"
                onClick={() => persist(ALL_GRANTED)}
                className="bg-text-primary px-4 py-2 text-sm text-white"
              >
                Aceitar todos
              </button>
            </div>
          </>
        ) : (
          <div className="w-full">
            <h2 className="mb-3 text-sm font-medium">Preferências de cookies</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Necessários</p>
                  <p className="text-text-secondary">
                    Essenciais para o funcionamento do site. Sempre ativos.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Cookies necessários (sempre ativo)"
                />
              </li>
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Analytics</p>
                  <p className="text-text-secondary">
                    Medem o uso do site para melhorarmos navegação e conteúdo.
                  </p>
                </div>
                <input
                  type="checkbox"
                  aria-label="Cookies de analytics"
                  checked={draft.analytics}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, analytics: e.target.checked }))
                  }
                />
              </li>
              <li className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium">Marketing</p>
                  <p className="text-text-secondary">
                    Personalizam anúncios e medem campanhas em outros sites.
                  </p>
                </div>
                <input
                  type="checkbox"
                  aria-label="Cookies de marketing"
                  checked={draft.marketing}
                  onChange={(e) =>
                    setDraft((d) => ({ ...d, marketing: e.target.checked }))
                  }
                />
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => setView("banner")}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary"
              >
                Voltar
              </button>
              <button
                type="button"
                onClick={() => persist(draft)}
                className="bg-text-primary px-4 py-2 text-sm text-white"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
