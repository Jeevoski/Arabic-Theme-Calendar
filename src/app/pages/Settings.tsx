import { motion } from "motion/react";
import { Sun, Moon, Settings as SettingsIcon, Download, Trash2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { getStoredThemePreference, setThemePreference, type ThemePreference } from "../lib/theme";
import { getStoredProfileName, setStoredProfileName } from "../lib/profile";

export default function Settings() {
  const [theme, setTheme] = useState<ThemePreference>("light");
  const [publicName, setPublicName] = useState("Julian Thorne");
  const [profileSaved, setProfileSaved] = useState(false);
  const [actionMessage, setActionMessage] = useState("");
  const [morningReminder, setMorningReminder] = useState(true);
  const [archiveDigest, setArchiveDigest] = useState(false);

  useEffect(() => {
    setTheme(getStoredThemePreference());
    setPublicName(getStoredProfileName());
  }, []);

  const handleThemeChange = (nextTheme: ThemePreference) => {
    setTheme(nextTheme);
    setThemePreference(nextTheme);
  };

  const handleSaveProfile = () => {
    const nextName = setStoredProfileName(publicName);
    setPublicName(nextName);
    setProfileSaved(true);
    window.setTimeout(() => setProfileSaved(false), 1500);
  };

  const getAppStorageEntries = () => {
    if (typeof window === "undefined") {
      return [] as Array<{ key: string; value: string }>;
    }

    const pairs: Array<{ key: string; value: string }> = [];
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index);
      if (!key || !key.startsWith("curated-ephemera.")) {
        continue;
      }

      const value = window.localStorage.getItem(key);
      if (value !== null) {
        pairs.push({ key, value });
      }
    }

    return pairs;
  };

  const handleExportArchives = () => {
    if (typeof window === "undefined") {
      return;
    }

    const payload = {
      exportedAt: new Date().toISOString(),
      app: "The Curated Ephemera",
      profileName: publicName,
      entries: getAppStorageEntries(),
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `curated-ephemera-export-${new Date().toISOString().slice(0, 10)}.json`;
    anchor.click();
    window.URL.revokeObjectURL(url);
    setActionMessage("Archive export downloaded.");
  };

  const handleClearCache = () => {
    if (typeof window === "undefined") {
      return;
    }

    const removableKeys = [
      "curated-ephemera.selected-date",
      "curated-ephemera.calendar-events",
      "curated-ephemera.planner-events",
      "curated-ephemera.studio-thoughts",
      "curated-ephemera.studio-artifacts",
    ];

    removableKeys.forEach((key) => window.localStorage.removeItem(key));
    setActionMessage("Cache cleared.");
  };

  const handleDeactivateAccount = () => {
    if (typeof window === "undefined") {
      return;
    }

    const shouldProceed = window.confirm(
      "Deactivate account? This clears all local data including entries, planner events, and profile.",
    );

    if (!shouldProceed) {
      return;
    }

    getAppStorageEntries().forEach(({ key }) => window.localStorage.removeItem(key));
    setPublicName(setStoredProfileName("Julian Thorne"));
    setTheme("light");
    setThemePreference("light");
    setActionMessage("Account data removed locally.");
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
        <motion.div variants={itemVariants}>
          <div className="inline-block bg-[rgba(199,199,189,0.2)] px-3 py-1 rounded text-xs uppercase tracking-widest text-[#76786f] font-bold mb-4">
            Account Preferences
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2a] mb-4">Settings</h1>
          <p className="text-[#76786f] max-w-2xl">
            Tailor your digital sanctuary. These preferences shape how you interact with your curated collections and daily rhythms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Identity & Profile */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <User className="w-5 h-5 text-[#a67c52]" />
                <h2 className="text-xl font-bold text-[#2d2d2a]">Identity & Profile</h2>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#76786f] mb-2">PUBLIC NAME</label>
                    <input
                      type="text"
                      value={publicName}
                      onChange={(event) => setPublicName(event.target.value)}
                      className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#76786f] mb-2">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      defaultValue="julian@the-studio.com"
                      className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#76786f] mb-2">SHORT BIOGRAPHY</label>
                  <textarea
                    defaultValue="A curator of forgotten moments and silent architecture. Building a digital paper trail."
                    className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 min-h-[100px] resize-none focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20 transition-all"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <motion.button
                    type="button"
                    onClick={handleSaveProfile}
                    className="px-5 py-2 rounded-md bg-[#2d2d2a] text-white text-sm font-bold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Save Profile
                  </motion.button>
                  {profileSaved && <span className="text-sm text-[#a67c52] font-bold">Saved</span>}
                </div>
              </div>
            </motion.div>

            {/* Interface Aesthetics */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <SettingsIcon className="w-5 h-5 text-[#a67c52]" />
                <h2 className="text-xl font-bold text-[#2d2d2a]">Interface Aesthetics</h2>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "light", label: "Oatmeal (Light)", icon: Sun },
                    { value: "dark", label: "Ink (Dark)", icon: Moon },
                    { value: "auto", label: "Cyclical (Auto)", icon: SettingsIcon },
                  ].map((option) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleThemeChange(option.value as ThemePreference)}
                      className={`p-6 rounded-xl border-2 transition-all ${
                        theme === option.value
                          ? "border-[#a67c52] bg-[rgba(166,124,82,0.05)]"
                          : "border-[rgba(199,199,189,0.2)] hover:border-[#a67c52]/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <option.icon className="w-6 h-6 mx-auto mb-2 text-[#2d2d2a]" />
                      <p className="text-xs uppercase tracking-widest font-bold text-[#2d2d2a]">
                        {option.label.split(" ")[0]}
                      </p>
                      <p className="text-xs text-[#76786f]">({option.label.split(" ")[1].replace(/[()]/g, "")})</p>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Ritual Reminders */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8"
            >
              <h2 className="text-xl font-bold text-[#2d2d2a] mb-6">Ritual Reminders</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[rgba(199,199,189,0.05)] rounded-lg">
                  <div>
                    <p className="font-bold text-[#2d2d2a]">Morning Reflection</p>
                    <p className="text-sm text-[#76786f]">Gentle prompt to start your day at 8:00 AM</p>
                  </div>
                  <motion.button
                    onClick={() => setMorningReminder(!morningReminder)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      morningReminder ? "bg-[#a67c52]" : "bg-[rgba(199,199,189,0.3)]"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                      animate={{ left: morningReminder ? "calc(100% - 28px)" : "4px" }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>

                <div className="flex items-center justify-between p-4 bg-[rgba(199,199,189,0.05)] rounded-lg">
                  <div>
                    <p className="font-bold text-[#2d2d2a]">Archive Digest</p>
                    <p className="text-sm text-[#76786f]">Weekly summary of your monthly collections</p>
                  </div>
                  <motion.button
                    onClick={() => setArchiveDigest(!archiveDigest)}
                    className={`relative w-14 h-8 rounded-full transition-colors ${
                      archiveDigest ? "bg-[#a67c52]" : "bg-[rgba(199,199,189,0.3)]"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
                      animate={{ left: archiveDigest ? "calc(100% - 28px)" : "4px" }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upgrade Card */}
            <motion.div
              variants={itemVariants}
              className="bg-[#5d6057] rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-3">The Studio Pro</h3>
              <p className="text-sm text-white/80 mb-6">
                Unlock archival-grade exports, unlimited collections, and artisanal font pairings.
              </p>
              <motion.button
                className="w-full bg-[#f5c396] text-[#2d2d2a] py-3 rounded-lg text-xs uppercase tracking-widest font-bold"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Upgrade Plan
              </motion.button>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
            >
              <h3 className="text-sm font-bold text-[#2d2d2a] mb-4">Quick Actions</h3>
              {actionMessage && <p className="text-sm text-[#a67c52] font-bold mb-3">{actionMessage}</p>}
              <div className="space-y-3">
                <motion.button
                  type="button"
                  onClick={handleExportArchives}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-[rgba(199,199,189,0.05)] hover:bg-[rgba(166,124,82,0.1)] transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <Download className="w-4 h-4 text-[#76786f] group-hover:text-[#a67c52] transition-colors" />
                  <span className="text-sm font-bold text-[#2d2d2a] group-hover:text-[#a67c52] transition-colors">Export Archives</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleClearCache}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-[rgba(199,199,189,0.05)] hover:bg-[rgba(166,124,82,0.1)] transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <SettingsIcon className="w-4 h-4 text-[#76786f] group-hover:text-[#a67c52] transition-colors" />
                  <span className="text-sm font-bold text-[#2d2d2a] group-hover:text-[#a67c52] transition-colors">Clear Cache</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleDeactivateAccount}
                  className="w-full flex items-center gap-3 p-3 rounded-lg bg-[rgba(212,24,61,0.05)] hover:bg-[rgba(212,24,61,0.1)] transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <Trash2 className="w-4 h-4 text-[#d4183d] group-hover:text-[#d4183d]" />
                  <span className="text-sm font-bold text-[#d4183d]">Deactivate Account</span>
                </motion.button>
              </div>
            </motion.div>

            {/* Inspiration Image */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1761446812468-d88eef0d01da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwc2V0dXAlMjBjb21wdXRlciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzU1ODU1NTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 bg-[rgba(199,199,189,0.05)]">
                <p className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-1">
                  Inspiration of the Day
                </p>
                <p className="text-sm italic text-[#2d2d2a]">
                  "True minimalism is not the absence of things, but the perfect presence of only what is necessary."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}