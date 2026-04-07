export type EntryCategory = "Reflection" | "Planning" | "Studio" | "Archive";

export interface EntryInput {
  title: string;
  content: string;
  date: string;
  category: EntryCategory;
}

export interface JournalEntry extends EntryInput {
  id: string;
  createdAt: string;
}

const STORAGE_KEY = "curated-ephemera.entries";

export function getStoredEntries(): JournalEntry[] {
  if (typeof window === "undefined") {
    return [];
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw) as JournalEntry[];
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (dateA !== dateB) {
        return dateB - dateA;
      }

      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
  } catch {
    return [];
  }
}

export function saveEntry(input: EntryInput): JournalEntry {
  const entry: JournalEntry = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  };

  const existing = getStoredEntries();
  const next = [entry, ...existing];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  return entry;
}
