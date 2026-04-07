import { motion } from "motion/react";
import { Check, Circle } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

const dailyTasks = [
  {
    title: "Finalize the creative direction for the Q4 campaign",
    subtitle: "Focus on the tactile paper grain effects and typography pairings.",
    completed: false,
  },
  {
    title: "Curate the weekly collection of textures",
    subtitle: "Scan the high-thread linen and handmade paper samples.",
    completed: false,
  },
];

const deepWorkTasks = [
  { title: "Editorial layout for Studio", completed: false },
  { title: "Brand identity refinement", completed: false },
  { title: "Review print proofs", completed: true },
];

const logisticsTasks = [
  { title: "Reply to studio inquiries", completed: false },
  { title: "Update project timelines", completed: false },
  { title: "Schedule mail courier", completed: false },
];

type PlannerEvent = {
  id: string;
  dateKey: string;
  title: string;
  time: string;
  done: boolean;
};

type PlannerProject = {
  id: string;
  name: string;
  phase: string;
  progress: number;
};

const SELECTED_DATE_STORAGE_KEY = "curated-ephemera.selected-date";
const PLANNER_EVENTS_STORAGE_KEY = "curated-ephemera.planner-events";

const plannerProjects: PlannerProject[] = [
  { id: "archive", name: "2024 Archive Strategy", phase: "Active Project", progress: 64 },
  { id: "campaign", name: "Q4 Campaign Direction", phase: "In Review", progress: 48 },
  { id: "studio", name: "Studio Systems Refresh", phase: "Execution", progress: 72 },
  { id: "collection", name: "Texture Collection Curation", phase: "Planning", progress: 31 },
];

function getDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getInitialPlannerDate() {
  if (typeof window === "undefined") {
    return new Date();
  }

  const raw = window.localStorage.getItem(SELECTED_DATE_STORAGE_KEY);
  if (!raw) {
    return new Date();
  }

  const parsed = new Date(`${raw}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return new Date();
  }

  return parsed;
}

function loadPlannerEvents() {
  if (typeof window === "undefined") {
    return [] as PlannerEvent[];
  }

  const raw = window.localStorage.getItem(PLANNER_EVENTS_STORAGE_KEY);
  if (!raw) {
    return [] as PlannerEvent[];
  }

  try {
    const parsed = JSON.parse(raw) as PlannerEvent[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [] as PlannerEvent[];
  }
}

function savePlannerEvents(events: PlannerEvent[]) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(PLANNER_EVENTS_STORAGE_KEY, JSON.stringify(events));
}

export default function Planner() {
  const [plannerDate, setPlannerDate] = useState<Date>(() => getInitialPlannerDate());
  const [tasks, setTasks] = useState(dailyTasks);
  const [deepWork, setDeepWork] = useState(deepWorkTasks);
  const [logistics, setLogistics] = useState(logisticsTasks);
  const [plannerEvents, setPlannerEvents] = useState<PlannerEvent[]>(() => loadPlannerEvents());
  const [newEventTitle, setNewEventTitle] = useState("");
  const [newEventTime, setNewEventTime] = useState("09:00");
  const [activeProjectId, setActiveProjectId] = useState(plannerProjects[0].id);

  const plannerDateKey = getDateKey(plannerDate);

  const plannerDayLabel = useMemo(
    () => new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(plannerDate),
    [plannerDate],
  );

  const plannerMonthDayLabel = useMemo(
    () =>
      new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
      }).format(plannerDate),
    [plannerDate],
  );

  const weeklyGlimpse = useMemo(() => {
    return Array.from({ length: 4 }, (_, index) => {
      const date = new Date(plannerDate);
      date.setDate(plannerDate.getDate() + index);
      return {
        day: new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date).toUpperCase(),
        date: `${date.getDate()}`,
        active: index === 0,
      };
    });
  }, [plannerDate]);

  const eventsForSelectedDate = useMemo(() => {
    return plannerEvents
      .filter((event) => event.dateKey === plannerDateKey)
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [plannerEvents, plannerDateKey]);

  const activeProject = useMemo(() => {
    return plannerProjects.find((project) => project.id === activeProjectId) ?? plannerProjects[0];
  }, [activeProjectId]);

  const toggleTask = (index: number, type: 'daily' | 'deep' | 'logistics') => {
    if (type === 'daily') {
      const newTasks = [...tasks];
      newTasks[index].completed = !newTasks[index].completed;
      setTasks(newTasks);
    } else if (type === 'deep') {
      const newTasks = [...deepWork];
      newTasks[index].completed = !newTasks[index].completed;
      setDeepWork(newTasks);
    } else {
      const newTasks = [...logistics];
      newTasks[index].completed = !newTasks[index].completed;
      setLogistics(newTasks);
    }
  };

  const shiftPlannerDate = (days: number) => {
    setPlannerDate((previous) => {
      const next = new Date(previous);
      next.setDate(previous.getDate() + days);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(SELECTED_DATE_STORAGE_KEY, getDateKey(next));
      }

      return next;
    });
  };

  const handleAddPlannerEvent = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newEventTitle.trim()) {
      return;
    }

    const newEvent: PlannerEvent = {
      id: crypto.randomUUID(),
      dateKey: plannerDateKey,
      title: newEventTitle.trim(),
      time: newEventTime,
      done: false,
    };

    setPlannerEvents((previous) => {
      const next = [newEvent, ...previous];
      savePlannerEvents(next);
      return next;
    });

    setNewEventTitle("");
    setNewEventTime("09:00");
  };

  const togglePlannerEventDone = (eventId: string) => {
    setPlannerEvents((previous) => {
      const next = previous.map((event) => {
        if (event.id !== eventId) {
          return event;
        }
        return { ...event, done: !event.done };
      });
      savePlannerEvents(next);
      return next;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-5xl md:text-7xl font-bold text-[#2d2d2a] leading-none">{plannerDayLabel},</h1>
            <h1 className="text-5xl md:text-7xl font-bold text-[#a67c52] leading-none">{plannerMonthDayLabel}</h1>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => shiftPlannerDate(-1)}
                className="px-3 py-1 rounded border border-[rgba(199,199,189,0.3)] text-xs text-[#76786f]"
              >
                Prev Day
              </button>
              <button
                type="button"
                onClick={() => shiftPlannerDate(1)}
                className="px-3 py-1 rounded border border-[rgba(199,199,189,0.3)] text-xs text-[#76786f]"
              >
                Next Day
              </button>
            </div>
            <div className="pt-2 max-w-sm">
              <label className="block text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
                Active Project
              </label>
              <select
                value={activeProjectId}
                onChange={(event) => setActiveProjectId(event.target.value)}
                className="w-full bg-white border border-[rgba(199,199,189,0.3)] rounded-md px-3 py-2 text-sm text-[#2d2d2a] focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              >
                {plannerProjects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="text-[#76786f] max-w-2xl leading-relaxed">
            The secret to clarity is not doing more, but doing what matters with intention. Current focus: {activeProject.name}.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2 space-y-6">
            {/* Daily Intentions */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#a67c52] font-bold mb-6">
                Daily Intentions
              </h3>
              <div className="space-y-6">
                {tasks.map((task, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 items-start group cursor-pointer"
                    onClick={() => toggleTask(index, 'daily')}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <motion.div
                      className={`mt-1 flex-shrink-0 w-5 h-5 rounded border-2 ${
                        task.completed
                          ? "bg-[#a67c52] border-[#a67c52]"
                          : "border-[rgba(199,199,189,0.3)] group-hover:border-[#a67c52]"
                      } flex items-center justify-center transition-colors`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {task.completed && <Check className="w-3 h-3 text-white" />}
                    </motion.div>
                    <div className="flex-1">
                      <p className={`font-bold ${task.completed ? "line-through text-[#76786f]" : "text-[#2d2d2a]"}`}>
                        {task.title}
                      </p>
                      <p className="text-sm text-[#76786f] mt-1">{task.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-[rgba(199,199,189,0.2)] mt-8 pt-6">
                <h4 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-4">
                  Event Intentions
                </h4>

                <form onSubmit={handleAddPlannerEvent} className="grid grid-cols-1 md:grid-cols-[1fr_140px_auto] gap-3 mb-5">
                  <input
                    type="text"
                    value={newEventTitle}
                    onChange={(event) => setNewEventTitle(event.target.value)}
                    placeholder="Add an event intention..."
                    className="bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                    required
                  />
                  <input
                    type="time"
                    value={newEventTime}
                    onChange={(event) => setNewEventTime(event.target.value)}
                    className="bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#2d2d2a] text-white text-xs uppercase tracking-widest font-bold"
                  >
                    Add
                  </button>
                </form>

                <div className="space-y-3">
                  {eventsForSelectedDate.length === 0 && (
                    <p className="text-sm text-[#76786f]">No event intentions for this date yet.</p>
                  )}
                  {eventsForSelectedDate.map((event) => (
                    <motion.div
                      key={event.id}
                      className="flex items-center gap-3 group cursor-pointer"
                      onClick={() => togglePlannerEventDone(event.id)}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          event.done
                            ? "bg-[#a67c52] border-[#a67c52]"
                            : "border-[rgba(199,199,189,0.3)] group-hover:border-[#a67c52]"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {event.done ? <Check className="w-3 h-3 text-white" /> : <Circle className="w-3 h-3 text-transparent" />}
                      </motion.div>
                      <div className="flex-1">
                        <p className={`${event.done ? "line-through text-[#76786f]" : "text-[#2d2d2a]"}`}>{event.title}</p>
                      </div>
                      <span className="text-xs text-[#76786f] font-bold">{event.time}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Deep Work & Logistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
              >
                <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-4">
                  Deep Work
                </h3>
                <div className="space-y-3">
                  {deepWork.map((task, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 group cursor-pointer"
                      onClick={() => toggleTask(index, 'deep')}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        className={`w-4 h-4 rounded-full border-2 ${
                          task.completed
                            ? "bg-[#a67c52] border-[#a67c52]"
                            : "border-[rgba(199,199,189,0.3)] group-hover:border-[#a67c52]"
                        } flex-shrink-0`}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                      />
                      <span className={`text-sm ${task.completed ? "line-through text-[#76786f]" : "text-[#2d2d2a]"}`}>
                        {task.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
              >
                <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-4">
                  Logistics
                </h3>
                <div className="space-y-3">
                  {logistics.map((task, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 group cursor-pointer"
                      onClick={() => toggleTask(index, 'logistics')}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        className={`w-4 h-4 rounded-full border-2 ${
                          task.completed
                            ? "bg-[#a67c52] border-[#a67c52]"
                            : "border-[rgba(199,199,189,0.3)] group-hover:border-[#a67c52]"
                        } flex-shrink-0`}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.85 }}
                      />
                      <span className={`text-sm ${task.completed ? "line-through text-[#76786f]" : "text-[#2d2d2a]"}`}>
                        {task.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Evening Reflection */}
            <motion.div
              variants={itemVariants}
              className="bg-[rgba(118,120,111,0.05)] rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#a67c52] font-bold mb-4">
                Evening Reflection
              </h3>
              <textarea
                className="w-full bg-white/50 border border-[rgba(199,199,189,0.2)] rounded-lg p-4 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20 placeholder-[#76786f]/50"
                placeholder="What brought you stillness today?"
              />
              <p className="text-xs text-[#76786f] mt-2">LAST EDITED 2H AGO</p>
            </motion.div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-4">
                Active Project Status
              </h3>
              <p className="text-lg font-bold text-[#2d2d2a] mb-1">{activeProject.name}</p>
              <p className="text-xs uppercase tracking-widest text-[#a67c52] font-bold mb-4">{activeProject.phase}</p>
              <div className="w-full bg-[rgba(199,199,189,0.2)] rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-[#a67c52] rounded-full"
                  animate={{ width: `${activeProject.progress}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <p className="text-xs text-[#76786f] mt-2">{activeProject.progress}% complete</p>
            </motion.div>

            {/* Weekly Glimpse */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
            >
              <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-6">
                Weekly Glimpse
              </h3>
              <div className="space-y-4">
                {weeklyGlimpse.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center justify-between p-3 rounded-lg ${
                      item.active ? "bg-[rgba(166,124,82,0.05)]" : ""
                    }`}
                    whileHover={{ x: 4, backgroundColor: "rgba(166,124,82,0.05)" }}
                  >
                    <div>
                      <p className="text-xs text-[#76786f]">{item.day}</p>
                      <p className={`text-2xl font-bold ${item.active ? "text-[#a67c52]" : "text-[#2d2d2a]"}`}>
                        {item.date}
                      </p>
                    </div>
                    <div className="w-16 h-1 bg-[#a67c52] rounded-full" />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quote Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#5d6057] rounded-2xl p-6 md:p-8 text-white"
            >
              <p className="text-lg italic leading-relaxed mb-4">
                "Simplicity is the ultimate sophistication."
              </p>
              <p className="text-xs uppercase tracking-widest opacity-75">— Leonardo da Vinci</p>
            </motion.div>

            {/* Archive Assets */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1775226236273-b53eff137032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwd29ya3NwYWNlJTIwZGVzayUyMG1vcm5pbmclMjBsaWdodHxlbnwxfHx8fDE3NzU1ODUzNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Linen texture"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-[#2d2d2a]">Linen Texture Pack</p>
                <p className="text-xs text-[#76786f]">9 Items • Updated Today</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}