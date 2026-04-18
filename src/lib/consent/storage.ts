import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  DEFAULT_CONSENT,
  type ConsentRecord,
  type ConsentState,
} from "./types";

export function readConsent(
  storage: Pick<Storage, "getItem"> | null = typeof window !== "undefined"
    ? window.localStorage
    : null,
): ConsentRecord | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    if (parsed.version !== CONSENT_VERSION) return null;
    if (!parsed.state) return null;
    return {
      state: { ...DEFAULT_CONSENT, ...parsed.state },
      updatedAt: parsed.updatedAt,
      version: parsed.version,
    };
  } catch {
    return null;
  }
}

export function writeConsent(
  state: ConsentState,
  storage: Pick<Storage, "setItem"> | null = typeof window !== "undefined"
    ? window.localStorage
    : null,
): ConsentRecord {
  const record: ConsentRecord = {
    state: { ...state, necessary: true },
    updatedAt: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  if (storage) {
    try {
      storage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // storage quota — fica em memória
    }
  }
  return record;
}
