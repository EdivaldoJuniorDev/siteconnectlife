import { beforeEach, describe, expect, it } from "vitest";
import { pushConsentUpdate, toGtagConsent } from "../gtag";

describe("toGtagConsent", () => {
  it("mapeia analytics=false para denied em analytics_storage", () => {
    const mapped = toGtagConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    expect(mapped.analytics_storage).toBe("denied");
    expect(mapped.personalization_storage).toBe("denied");
  });

  it("mapeia marketing=true para granted em ad_* storage", () => {
    const mapped = toGtagConsent({
      necessary: true,
      analytics: false,
      marketing: true,
    });
    expect(mapped.ad_storage).toBe("granted");
    expect(mapped.ad_user_data).toBe("granted");
    expect(mapped.ad_personalization).toBe("granted");
  });

  it("mantém functionality e security como granted sempre", () => {
    const mapped = toGtagConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
    expect(mapped.functionality_storage).toBe("granted");
    expect(mapped.security_storage).toBe("granted");
  });
});

describe("pushConsentUpdate", () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it("empurra um update de consent para o dataLayer", () => {
    pushConsentUpdate({ necessary: true, analytics: true, marketing: false });

    expect(window.dataLayer).toHaveLength(1);
    const event = window.dataLayer![0] as [string, string, Record<string, string>];
    expect(event[0]).toBe("consent");
    expect(event[1]).toBe("update");
    expect(event[2].analytics_storage).toBe("granted");
    expect(event[2].ad_storage).toBe("denied");
  });
});
