import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import CookieConsent from "../CookieConsent";
import { CONSENT_STORAGE_KEY } from "@/lib/consent/types";

beforeEach(() => {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dataLayer = [];
});

afterEach(() => {
  window.localStorage.removeItem(CONSENT_STORAGE_KEY);
});

describe("CookieConsent", () => {
  it("mostra o banner quando não há consentimento salvo", () => {
    render(<CookieConsent />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /aceitar todos/i })).toBeVisible();
  });

  it("não renderiza o banner quando já existe consentimento salvo", () => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        state: { necessary: true, analytics: true, marketing: true },
        updatedAt: new Date().toISOString(),
        version: 1,
      }),
    );
    render(<CookieConsent />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("aceitar todos persiste tudo granted e esconde o banner", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);

    await user.click(screen.getByRole("button", { name: /aceitar todos/i }));

    const saved = JSON.parse(
      window.localStorage.getItem(CONSENT_STORAGE_KEY) || "{}",
    );
    expect(saved.state).toEqual({
      necessary: true,
      analytics: true,
      marketing: true,
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("rejeitar persiste apenas necessary", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);

    await user.click(screen.getByRole("button", { name: /rejeitar/i }));

    const saved = JSON.parse(
      window.localStorage.getItem(CONSENT_STORAGE_KEY) || "{}",
    );
    expect(saved.state).toEqual({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  });

  it("personalizar permite salvar apenas analytics granted", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);

    await user.click(screen.getByRole("button", { name: /personalizar/i }));
    await user.click(screen.getByLabelText(/cookies de analytics/i));
    await user.click(screen.getByRole("button", { name: /salvar preferências/i }));

    const saved = JSON.parse(
      window.localStorage.getItem(CONSENT_STORAGE_KEY) || "{}",
    );
    expect(saved.state.analytics).toBe(true);
    expect(saved.state.marketing).toBe(false);
  });

  it("empurra consent update para o dataLayer ao decidir", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);

    await user.click(screen.getByRole("button", { name: /aceitar todos/i }));

    const last = window.dataLayer!.at(-1) as [
      string,
      string,
      Record<string, string>,
    ];
    expect(last[0]).toBe("consent");
    expect(last[1]).toBe("update");
    expect(last[2].analytics_storage).toBe("granted");
    expect(last[2].ad_storage).toBe("granted");
  });
});
