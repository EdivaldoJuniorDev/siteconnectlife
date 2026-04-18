import { beforeEach, describe, expect, it } from "vitest";
import { readConsent, writeConsent } from "../storage";
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  DEFAULT_CONSENT,
} from "../types";

function makeStorage(): Storage {
  const map = new Map<string, string>();
  return {
    getItem: (k) => map.get(k) ?? null,
    setItem: (k, v) => void map.set(k, v),
    removeItem: (k) => void map.delete(k),
    clear: () => map.clear(),
    key: (i) => Array.from(map.keys())[i] ?? null,
    get length() {
      return map.size;
    },
  } as Storage;
}

describe("consent storage", () => {
  let storage: Storage;

  beforeEach(() => {
    storage = makeStorage();
  });

  it("retorna null quando não há consentimento salvo", () => {
    expect(readConsent(storage)).toBeNull();
  });

  it("persiste o estado e retorna record válido", () => {
    const state = { necessary: true, analytics: true, marketing: false };
    const record = writeConsent(state, storage);

    expect(record.version).toBe(CONSENT_VERSION);
    expect(record.state).toEqual(state);
    expect(new Date(record.updatedAt).toString()).not.toBe("Invalid Date");
  });

  it("força necessary=true mesmo quando chamador tenta desativar", () => {
    const record = writeConsent(
      { necessary: false, analytics: false, marketing: false } as never,
      storage,
    );
    expect(record.state.necessary).toBe(true);
  });

  it("readConsent lê o que writeConsent gravou", () => {
    const state = { necessary: true, analytics: true, marketing: true };
    writeConsent(state, storage);

    const loaded = readConsent(storage);
    expect(loaded?.state).toEqual(state);
  });

  it("descarta valores de versão antiga", () => {
    storage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({
        state: { necessary: true, analytics: true, marketing: true },
        updatedAt: new Date().toISOString(),
        version: 0,
      }),
    );
    expect(readConsent(storage)).toBeNull();
  });

  it("descarta JSON inválido sem estourar", () => {
    storage.setItem(CONSENT_STORAGE_KEY, "not-json");
    expect(readConsent(storage)).toBeNull();
  });

  it("default consent é opt-out para analytics e marketing", () => {
    expect(DEFAULT_CONSENT.necessary).toBe(true);
    expect(DEFAULT_CONSENT.analytics).toBe(false);
    expect(DEFAULT_CONSENT.marketing).toBe(false);
  });
});
