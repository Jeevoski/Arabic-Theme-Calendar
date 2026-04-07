export type ThemePreference = "light" | "dark" | "auto";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "curated-ephemera.theme";

function isThemePreference(value: string | null): value is ThemePreference {
  return value === "light" || value === "dark" || value === "auto";
}

export function getStoredThemePreference(): ThemePreference {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isThemePreference(stored) ? stored : "light";
}

export function resolveTheme(theme: ThemePreference): ResolvedTheme {
  if (theme !== "auto") {
    return theme;
  }

  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(theme: ThemePreference): ResolvedTheme {
  const resolvedTheme = resolveTheme(theme);

  if (typeof document === "undefined") {
    return resolvedTheme;
  }

  document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  return resolvedTheme;
}

export function setThemePreference(theme: ThemePreference): ResolvedTheme {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }

  return applyTheme(theme);
}
