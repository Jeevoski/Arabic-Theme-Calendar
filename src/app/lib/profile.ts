export const PROFILE_NAME_STORAGE_KEY = "curated-ephemera.profile-name";
export const PROFILE_UPDATED_EVENT = "profile-name-updated";

const FALLBACK_PROFILE_NAME = "Julian Thorne";

export function getStoredProfileName(): string {
  if (typeof window === "undefined") {
    return FALLBACK_PROFILE_NAME;
  }

  const stored = window.localStorage.getItem(PROFILE_NAME_STORAGE_KEY)?.trim();
  return stored || FALLBACK_PROFILE_NAME;
}

export function setStoredProfileName(name: string): string {
  const nextName = name.trim() || FALLBACK_PROFILE_NAME;

  if (typeof window !== "undefined") {
    window.localStorage.setItem(PROFILE_NAME_STORAGE_KEY, nextName);
    window.dispatchEvent(new CustomEvent(PROFILE_UPDATED_EVENT, { detail: { name: nextName } }));
  }

  return nextName;
}
