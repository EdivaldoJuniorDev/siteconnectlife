export type ConsentCategory = "necessary" | "analytics" | "marketing";

export type ConsentState = Record<ConsentCategory, boolean>;

export type ConsentRecord = {
  state: ConsentState;
  updatedAt: string;
  version: number;
};

export const CONSENT_STORAGE_KEY = "cl_consent_v1";
export const CONSENT_VERSION = 1;

export const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const ALL_GRANTED: ConsentState = {
  necessary: true,
  analytics: true,
  marketing: true,
};
