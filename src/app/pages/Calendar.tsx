import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function createDesertHeroSvg(monthIndex: number) {
  const palettes = [
    ["#293447", "#607a92", "#caa06a"],
    ["#3a3d4e", "#7f8b9a", "#d8b07a"],
    ["#5f6a6d", "#9ba39e", "#e1bc87"],
    ["#6f7c6d", "#b9ae8f", "#e4be87"],
    ["#8b7a5a", "#d3a26f", "#ebb97e"],
    ["#a26f4f", "#d58a5f", "#efb57a"],
    ["#8c5f45", "#c97a53", "#ebb07a"],
    ["#7a5b47", "#b68d67", "#e4b57f"],
    ["#6d5f57", "#9d8f7d", "#d8b388"],
    ["#594f55", "#8b7680", "#c7a087"],
    ["#3d3d4e", "#6d6f88", "#b9987e"],
    ["#2f3848", "#617188", "#b7947a"],
  ] as const;

  const [skyTop, skyMid, sand] = palettes[monthIndex % palettes.length];
  const sunX = 160 + monthIndex * 95;
  const sunY = 120 + (monthIndex % 4) * 20;

  const svg = `
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
  <defs>
    <linearGradient id='sky' x1='0' y1='0' x2='0' y2='1'>
      <stop offset='0%' stop-color='${skyTop}' />
      <stop offset='55%' stop-color='${skyMid}' />
      <stop offset='100%' stop-color='${sand}' />
    </linearGradient>
    <linearGradient id='dune1' x1='0' y1='0' x2='1' y2='1'>
      <stop offset='0%' stop-color='#d8b17f' />
      <stop offset='100%' stop-color='#c7925f' />
    </linearGradient>
    <linearGradient id='dune2' x1='0' y1='0' x2='1' y2='0'>
      <stop offset='0%' stop-color='#c58c5d' />
      <stop offset='100%' stop-color='#ad764c' />
    </linearGradient>
  </defs>
  <rect width='1600' height='900' fill='url(#sky)'/>
  <circle cx='${sunX}' cy='${sunY}' r='72' fill='#f8ddac' opacity='0.88'/>
  <path d='M0,640 C240,560 420,620 640,590 C840,562 1080,500 1600,610 L1600,900 L0,900 Z' fill='url(#dune1)'/>
  <path d='M0,730 C260,670 560,760 900,700 C1200,650 1380,700 1600,745 L1600,900 L0,900 Z' fill='url(#dune2)' opacity='0.9'/>
  <path d='M240,760 C450,720 760,770 1100,735' stroke='#efd1a8' stroke-width='3' opacity='0.4' fill='none'/>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const monthHeroImages = [
  "/months/january.jpg",
  "/months/february.jpg",
  "/months/march.jpg",
  "/months/april.jpg",
  "/months/may.jpg",
  "/months/june.jpg",
  "/months/july.jpg",
  "/months/august.jpg",
  "/months/september.jpg",
  "/months/october.jpg",
  "/months/november.jpg",
  "/months/december.jpg",
];

type CalendarCell = {
  date: Date;
  inCurrentMonth: boolean;
};

type ImportantEvent = {
  id: string;
  dateKey: string;
  title: string;
  note: string;
  time: string;
  reminderAt: string | null;
  reminderSent: boolean;
};

const EVENTS_STORAGE_KEY = "curated-ephemera.calendar-events";
const SELECTED_DATE_STORAGE_KEY = "curated-ephemera.selected-date";

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDisplayDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function loadImportantEvents() {
  if (typeof window === "undefined") {
    return [] as ImportantEvent[];
  }

  const raw = window.localStorage.getItem(EVENTS_STORAGE_KEY);
  if (!raw) {
    return [] as ImportantEvent[];
  }

  try {
    const parsed = JSON.parse(raw) as ImportantEvent[];
    if (!Array.isArray(parsed)) {
      return [] as ImportantEvent[];
    }
    return parsed;
  } catch {
    return [] as ImportantEvent[];
  }
}

function saveImportantEvents(events: ImportantEvent[]) {
  if (typeof window === "undefined") {
    return;
  }
  window.localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(events));
}

function buildMonthGrid(baseDate: Date): CalendarCell[] {
  const year = baseDate.getFullYear();
  const month = baseDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1);
  const startDayIndex = firstDayOfMonth.getDay();
  const firstGridDate = new Date(year, month, 1 - startDayIndex);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstGridDate);
    date.setDate(firstGridDate.getDate() + index);
    return {
      date,
      inCurrentMonth: date.getMonth() === month,
    };
  });
}

function isSameDate(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const journalEntries = [
  {
    date: "MAR 21",
    text: "The light shifted today. A clear indication that the season is turning. Focus on the editorial shoot for the spring collection. Paper stock arrived: heavy, textured, perfect.",
  },
  {
    date: "MAR 20",
    text: "Drafting the new collection notes... awaiting inspiration from the morning mist.",
  },
];

export default function Calendar() {
  const navigate = useNavigate();
  const [viewedDate, setViewedDate] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState(() => new Date());
  const [monthDirection, setMonthDirection] = useState(0);
  const [importantEvents, setImportantEvents] = useState<ImportantEvent[]>(() => loadImportantEvents());
  const [eventTitle, setEventTitle] = useState("");
  const [eventNote, setEventNote] = useState("");
  const [eventTime, setEventTime] = useState("09:00");
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [reminderAt, setReminderAt] = useState("");
  const [notificationState, setNotificationState] = useState<"unknown" | "enabled" | "blocked">("unknown");
  const today = new Date();
  const monthCells = buildMonthGrid(viewedDate);
  const selectedDateKey = getDateKey(selectedDate);

  const selectedDateEvents = useMemo(() => {
    return importantEvents
      .filter((item) => item.dateKey === selectedDateKey)
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [importantEvents, selectedDateKey]);

  const eventCountsByDate = useMemo(() => {
    return importantEvents.reduce<Record<string, number>>((counts, item) => {
      counts[item.dateKey] = (counts[item.dateKey] ?? 0) + 1;
      return counts;
    }, {});
  }, [importantEvents]);

  const eventsByDate = useMemo(() => {
    return importantEvents.reduce<Record<string, ImportantEvent[]>>((groups, item) => {
      if (!groups[item.dateKey]) {
        groups[item.dateKey] = [];
      }
      groups[item.dateKey].push(item);
      groups[item.dateKey].sort((a, b) => a.time.localeCompare(b.time));
      return groups;
    }, {});
  }, [importantEvents]);

  const activeMonthLabel = monthNames[viewedDate.getMonth()];
  const activeMonthShortLabel = activeMonthLabel.slice(0, 3).toUpperCase();
  const activeMonthHeroImage = monthHeroImages[viewedDate.getMonth()];
  const activeYearLabel = viewedDate.getFullYear();

  const handlePrevMonth = () => {
    setMonthDirection(-1);
    setViewedDate((previous) => new Date(previous.getFullYear(), previous.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setMonthDirection(1);
    setViewedDate((previous) => new Date(previous.getFullYear(), previous.getMonth() + 1, 1));
  };

  const handleAddImportantEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!eventTitle.trim()) {
      return;
    }

    const nextEvent: ImportantEvent = {
      id: crypto.randomUUID(),
      dateKey: selectedDateKey,
      title: eventTitle.trim(),
      note: eventNote.trim(),
      time: eventTime,
      reminderAt: reminderEnabled && reminderAt ? reminderAt : null,
      reminderSent: false,
    };

    setImportantEvents((previous) => {
      const next = [nextEvent, ...previous];
      saveImportantEvents(next);
      return next;
    });

    setEventTitle("");
    setEventNote("");
    setReminderEnabled(false);
    setReminderAt("");
  };

  const handleNotificationPermission = async () => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setNotificationState("blocked");
      return;
    }

    const result = await Notification.requestPermission();
    setNotificationState(result === "granted" ? "enabled" : "blocked");
  };

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window)) {
      setNotificationState("blocked");
      return;
    }

    setNotificationState(Notification.permission === "granted" ? "enabled" : "unknown");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.localStorage.setItem(SELECTED_DATE_STORAGE_KEY, selectedDateKey);
  }, [selectedDateKey]);

  useEffect(() => {
    if (typeof window === "undefined" || !("Notification" in window) || Notification.permission !== "granted") {
      return;
    }

    const timeouts: number[] = [];
    const now = Date.now();

    importantEvents.forEach((item) => {
      if (!item.reminderAt || item.reminderSent) {
        return;
      }

      const reminderTime = new Date(item.reminderAt).getTime();
      const delay = reminderTime - now;
      if (delay <= 0 || delay > 2147483647) {
        return;
      }

      const timeoutId = window.setTimeout(() => {
        new Notification(`Reminder: ${item.title}`, {
          body: item.note || `Scheduled for ${item.time} on ${item.dateKey}`,
        });

        setImportantEvents((previous) => {
          const next = previous.map((entry) => {
            if (entry.id !== item.id) {
              return entry;
            }
            return { ...entry, reminderSent: true };
          });
          saveImportantEvents(next);
          return next;
        });
      }, delay);

      timeouts.push(timeoutId);
    });

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [importantEvents]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-12 pb-24 lg:pb-12">
      <motion.div
        className="max-w-[1200px] mx-auto space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Image Section */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[21/9] rounded-t-2xl overflow-hidden shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={activeMonthHeroImage}
            alt="Calendar hero"
            className="w-full h-full object-cover grayscale contrast-125 brightness-50 saturate-110"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = createDesertHeroSvg(viewedDate.getMonth());
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              className="-translate-y-4 text-[128px] font-bold text-white/65 [text-shadow:0_8px_24px_rgba(0,0,0,0.25)] tracking-[0.22em] uppercase leading-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              {activeMonthShortLabel}
            </motion.div>
          </div>
        </motion.div>

        {/* Calendar Header */}
        <motion.div variants={itemVariants} className="flex items-end justify-between flex-wrap gap-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-[#2d2d2a] tracking-tight leading-none">
              {activeMonthLabel} {activeYearLabel}
            </h1>
            <p className="text-sm tracking-wide text-[#76786f] font-bold">
              Accurate month and year
            </p>
          </div>

          <div className="flex gap-3">
            <motion.button
              onClick={handlePrevMonth}
              className="w-10 h-10 rounded-full border border-[rgba(199,199,189,0.3)] flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(166,124,82,0.05)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ChevronLeft className="w-4 h-4 text-[#2d2d2a]" />
            </motion.button>
            <motion.button
              onClick={handleNextMonth}
              className="w-10 h-10 rounded-full border border-[rgba(199,199,189,0.3)] flex items-center justify-center"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(166,124,82,0.05)" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ChevronRight className="w-4 h-4 text-[#2d2d2a]" />
            </motion.button>
          </div>
        </motion.div>

        {/* Calendar Grid */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          {/* Weekday Headers */}
          <div className="grid grid-cols-7 bg-[#fcf9f8] border-b border-[rgba(199,199,189,0.1)]">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="py-5 text-center text-xs uppercase tracking-widest text-[#76786f] font-bold"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Days */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${viewedDate.getFullYear()}-${viewedDate.getMonth()}`}
              initial={{ x: monthDirection * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: monthDirection * -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-7"
            >
              {monthCells.map((cell, index) => {
                const day = cell.date.getDate();
                const isOutsideMonth = !cell.inCurrentMonth;
                const isWeekend = cell.date.getDay() === 0 || cell.date.getDay() === 6;
                const isSelected = isSameDate(cell.date, selectedDate);
                const isToday = isSameDate(cell.date, today);
                const dateKey = getDateKey(cell.date);
                const eventCount = eventCountsByDate[dateKey] ?? 0;
                const cellEvents = eventsByDate[dateKey] ?? [];
                const firstEvent = cellEvents[0];

                return (
                <motion.div
                  key={index}
                  className={`min-h-[100px] md:min-h-[120px] p-2 md:p-3 border-b border-r border-[rgba(199,199,189,0.05)] flex flex-col ${
                    isOutsideMonth
                      ? "bg-[rgba(252,249,248,0.42)]"
                      : isWeekend
                      ? "bg-[rgba(252,249,248,0.2)]"
                      : "bg-white"
                  } ${isSelected ? "ring-1 ring-[#a67c52]/50 ring-inset" : ""}`}
                  onClick={() => setSelectedDate(new Date(cell.date))}
                  whileHover={
                    {
                      backgroundColor: "rgba(166,124,82,0.05)",
                      scale: 0.98,
                    }
                  }
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <motion.div
                    className={`text-base font-medium inline-flex items-center justify-center w-8 h-8 rounded-full self-center ${
                      isSelected
                        ? "bg-[rgba(166,124,82,0.14)] text-[#a67c52]"
                        : isToday
                        ? "border border-[#a67c52]/60 text-[#2d2d2a]"
                        : isOutsideMonth
                        ? "text-[rgba(118,120,111,0.36)]"
                        : "text-[#2d2d2a]"
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.005 }}
                  >
                    {day}
                  </motion.div>

                  <div className="mt-2 px-1 min-h-[38px]">
                    {firstEvent && (
                      <p className="text-[10px] leading-3 text-[#76786f] text-center line-clamp-2">
                        {firstEvent.title}
                      </p>
                    )}
                    {eventCount > 1 && (
                      <p className="text-[10px] uppercase tracking-wide text-[#a67c52] font-bold text-center mt-1">
                        +{eventCount - 1} more
                      </p>
                    )}
                  </div>

                  <div className="mt-auto flex items-center justify-center gap-1 pb-1">
                    {eventCount > 0 &&
                      Array.from({ length: Math.min(3, eventCount) }).map((_, dotIndex) => (
                        <span
                          key={`${dateKey}-dot-${dotIndex}`}
                          className="w-1.5 h-1.5 rounded-full bg-[#a67c52]/70"
                        />
                      ))}
                    {eventCount > 3 && (
                      <span className="text-[10px] uppercase tracking-wide text-[#a67c52] font-bold">
                        +{eventCount - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Important Events & Reminders */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-xl font-bold text-[#2d2d2a]">Important Events & Reminders</h2>
              <p className="text-sm text-[#76786f]">{formatDisplayDate(selectedDate)}</p>
            </div>
            <motion.button
              type="button"
              onClick={handleNotificationPermission}
              className="px-4 py-2 rounded-md text-xs tracking-wide font-bold bg-[rgba(166,124,82,0.1)] text-[#a67c52]"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {notificationState === "enabled" ? "Reminders Enabled" : "Enable Reminders"}
            </motion.button>
          </div>

          {selectedDateEvents.length > 0 ? (
            <div className="space-y-3">
              {selectedDateEvents.map((item) => (
                <div key={item.id} className="rounded-lg border border-[rgba(199,199,189,0.2)] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-bold text-[#2d2d2a]">{item.title}</p>
                    <span className="text-xs tracking-wide text-[#76786f] font-bold">{item.time}</span>
                  </div>
                  {item.note && <p className="text-sm text-[#76786f] mt-2">{item.note}</p>}
                  {item.reminderAt && (
                    <p className="text-xs tracking-wide text-[#a67c52] font-bold mt-3">
                      Reminder {item.reminderSent ? "Sent" : "Scheduled"}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-[#76786f]">No important events for this date yet.</p>
          )}

          <form onSubmit={handleAddImportantEvent} className="space-y-4 border-t border-[rgba(199,199,189,0.15)] pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs tracking-wide text-[#76786f] font-bold mb-2">
                  Event Title
                </label>
                <input
                  type="text"
                  value={eventTitle}
                  onChange={(event) => setEventTitle(event.target.value)}
                  placeholder="Ex: Editorial Review"
                  className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                  required
                />
              </div>
              <div>
                <label className="block text-xs tracking-wide text-[#76786f] font-bold mb-2">
                  Time
                </label>
                <input
                  type="time"
                  value={eventTime}
                  onChange={(event) => setEventTime(event.target.value)}
                  className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs tracking-wide text-[#76786f] font-bold mb-2">
                Note
              </label>
              <textarea
                value={eventNote}
                onChange={(event) => setEventNote(event.target.value)}
                placeholder="Add details or context..."
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 min-h-[90px] resize-y focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              />
            </div>

            <div className="space-y-3">
              <label className="inline-flex items-center gap-2 text-sm text-[#2d2d2a] font-medium">
                <input
                  type="checkbox"
                  checked={reminderEnabled}
                  onChange={(event) => setReminderEnabled(event.target.checked)}
                />
                Add Reminder
              </label>

              {reminderEnabled && (
                <div>
                  <label className="block text-xs tracking-wide text-[#76786f] font-bold mb-2">
                    Reminder Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    value={reminderAt}
                    onChange={(event) => setReminderAt(event.target.value)}
                    className="w-full md:w-auto bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                    required
                  />
                </div>
              )}
            </div>

            <motion.button
              type="submit"
              className="px-5 py-3 rounded-md text-xs tracking-wide font-bold bg-[#2d2d2a] text-white"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Add Important Event
            </motion.button>
          </form>
        </motion.div>

        {/* Journal & Intentions Section */}
        <motion.div
          variants={itemVariants}
          className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8 space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#2d2d2a]">Journal & Intentions</h2>
            <span className="text-xs tracking-wide text-[#76786f] font-bold">Recent entries</span>
          </div>

          <div className="space-y-6">
            {journalEntries.map((entry, index) => (
              <motion.div
                key={index}
                className="space-y-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="text-xs tracking-wide text-[#a67c52] font-bold">
                  {entry.date}
                </div>
                <p className="text-[#76786f] leading-relaxed">{entry.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={() => navigate("/entries/new")}
            className="w-full py-3 text-xs tracking-wide text-[#76786f] font-bold border-t border-[rgba(199,199,189,0.1)] pt-6"
            whileHover={{ color: "#a67c52" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            + Add Physical Observation
          </motion.button>
        </motion.div>

      </motion.div>
    </div>
  );
}