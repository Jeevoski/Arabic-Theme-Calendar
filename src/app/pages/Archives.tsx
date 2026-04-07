import { motion } from "motion/react";
import { ExternalLink, Star, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { getStoredEntries, type JournalEntry } from "../lib/entries";

const archives = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1677064061401-f77f966ff8a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbGVhdGhlciUyMGpvdXJuYWwlMjBub3RlYm9va3xlbnwxfHx8fDE3NzU1ODU1MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Autumn Observations: Volume III",
    category: "SEASONAL HIGHLIGHT",
    description: "A deep dive into the changing textures of the forest floor, recorded through cyanotypes and brief prose during the...",
    entries: "14 Entries",
    date: "Oct 2024",
    featured: true,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1662304729380-3a7ffb361e63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFja2VkJTIwYm9va3MlMjBuZXV0cmFsJTIwdG9uZXN8ZW58MXx8fHwxNzc1NTg1NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "On the Permanence of Ephemera",
    category: "ESSAY",
    date: "Aug 28",
    description: "Reflecting on the tactile nature of digital storage and the loss of physical artifacts.",
    featured: false,
  },
];

const dailyRecord = {
  title: "The Quiet Morning Routine",
  category: "DAILY RECORD",
  date: "Sep 12",
  quote: "The light hit the kettle, just right today, a momentary gleam of brass and steam...",
};

export default function Archives() {
  const [savedEntries, setSavedEntries] = useState<JournalEntry[]>([]);

  useEffect(() => {
    setSavedEntries(getStoredEntries());
  }, []);

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
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2a] mb-4">Library of Records</h1>
          <p className="text-[#76786f] max-w-2xl">
            A curated repository of your past reflections, digital ephemera, and seasonal collections. Every entry preserved with intentionality.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Archive */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden group"
            whileHover={{ y: -4 }}
          >
            <div className="aspect-video relative">
              <img
                src={archives[0].image}
                alt={archives[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#a67c52] text-white px-3 py-1 rounded text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                <Star className="w-3 h-3 fill-current" />
                {archives[0].category}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-[#2d2d2a] mb-3 group-hover:text-[#a67c52] transition-colors">
                {archives[0].title}
              </h2>
              <p className="text-[#76786f] mb-6">{archives[0].description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-xs text-[#76786f]">
                  <span>{archives[0].entries}</span>
                  <span>•</span>
                  <span>{archives[0].date}</span>
                </div>
                <motion.button
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#a67c52] font-bold"
                  whileHover={{ x: 4 }}
                >
                  Open Collection
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#a67c52]" />
                <h3 className="text-xs uppercase tracking-widest text-[#2d2d2a] font-bold">
                  {dailyRecord.category}
                </h3>
              </div>
              <p className="text-sm text-[#76786f] mb-2">{dailyRecord.date}</p>
              <h4 className="font-bold text-[#2d2d2a] mb-3">{dailyRecord.title}</h4>
              <p className="text-sm italic text-[#76786f] leading-relaxed">"{dailyRecord.quote}"</p>
              <div className="flex gap-3 mt-6">
                <motion.button
                  className="p-2 rounded-lg bg-[rgba(199,199,189,0.1)] hover:bg-[rgba(166,124,82,0.1)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="w-4 h-4 text-[#76786f]" />
                </motion.button>
                <motion.button
                  className="p-2 rounded-lg bg-[rgba(199,199,189,0.1)] hover:bg-[rgba(166,124,82,0.1)]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BookOpen className="w-4 h-4 text-[#76786f]" />
                </motion.button>
                <motion.button
                  className="flex-1 p-2 rounded-lg bg-[rgba(199,199,189,0.1)] hover:bg-[rgba(166,124,82,0.1)] flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Star className="w-4 h-4 text-[#a67c52]" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Saved Entries */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between gap-3 mb-6">
            <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold">Your Entries</h3>
            <span className="text-xs uppercase tracking-widest text-[#a67c52] font-bold">
              {savedEntries.length} Total
            </span>
          </div>

          {savedEntries.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-8 text-center">
              <p className="text-[#76786f]">No entries yet. Use Create Entry to add your first archive note.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {savedEntries.map((entry) => (
                <motion.div
                  key={entry.id}
                  className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-widest text-[#a67c52] font-bold">{entry.category}</span>
                    <span className="text-xs uppercase tracking-widest text-[#76786f] font-bold">{entry.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#2d2d2a] mb-2">{entry.title}</h4>
                  <p className="text-sm text-[#76786f] leading-relaxed line-clamp-4">{entry.content}</p>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        {/* More Archives */}
        <motion.div variants={itemVariants}>
          <h3 className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-6">Previous Years</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Year-End Retrospective", date: "DEC 2023", description: "Curated collection of the year's best moments" },
              { title: "Winter Collection Drafts", date: "NOV 2023", description: "Unpublished thoughts on the solstice" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 group cursor-pointer"
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">{item.date}</p>
                    <h4 className="font-bold text-[#2d2d2a] group-hover:text-[#a67c52] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <ExternalLink className="w-4 h-4 text-[#76786f] group-hover:text-[#a67c52]" />
                  </motion.div>
                </div>
                <p className="text-sm text-[#76786f]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          variants={itemVariants}
          className="text-center py-12 border-t border-[rgba(199,199,189,0.2)]"
        >
          <p className="text-sm text-[#76786f] mb-2">
            The Curated Ephemera is your personal space for mindful digital preservation.
          </p>
          <p className="text-xs text-[#76786f]">
            All entries are stored locally and synced with intention.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6">
            <motion.button
              className="text-xs uppercase tracking-widest text-[#76786f] font-bold hover:text-[#a67c52]"
              whileHover={{ scale: 1.05 }}
            >
              Export Library
            </motion.button>
            <motion.button
              className="text-xs uppercase tracking-widest text-[#76786f] font-bold hover:text-[#a67c52]"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.button>
            <motion.button
              className="text-xs uppercase tracking-widest text-[#76786f] font-bold hover:text-[#a67c52]"
              whileHover={{ scale: 1.05 }}
            >
              Support
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}