import type { ConsentState } from "./types";

type GtagArgs =
  | ["consent", "default" | "update", Record<string, string>]
  | ["event", string, Record<string, unknown>?]
  | ["config", string, Record<string, unknown>?]
  | ["js", Date];

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: GtagArgs) => void;
  }
}

export function toGtagConsent(state: ConsentState): Record<string, string> {
  return {
    ad_storage: state.marketing ? "granted" : "denied",
    ad_user_data: state.marketing ? "granted" : "denied",
    ad_personalization: state.marketing ? "granted" : "denied",
    analytics_storage: state.analytics ? "granted" : "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    personalization_storage: state.analytics ? "granted" : "denied",
  };
}

export function pushConsentUpdate(state: ConsentState): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // push usando tuple para Consent Mode v2
  window.dataLayer.push(["consent", "update", toGtagConsent(state)]);
}
