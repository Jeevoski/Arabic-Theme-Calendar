import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { saveEntry, type EntryCategory } from "../lib/entries";

const categories: EntryCategory[] = ["Reflection", "Planning", "Studio", "Archive"];

function getTodayISODate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  const day = `${now.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function NewEntry() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(getTodayISODate());
  const [category, setCategory] = useState<EntryCategory>("Reflection");
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim() || !content.trim()) {
      return;
    }

    setIsSaving(true);
    saveEntry({
      title: title.trim(),
      content: content.trim(),
      date,
      category,
    });
    navigate("/archives");
  };

  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-12 pb-24 lg:pb-12">
      <motion.div
        className="max-w-[900px] mx-auto space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <div>
          <div className="inline-block bg-[rgba(166,124,82,0.1)] px-3 py-1 rounded text-xs uppercase tracking-widest text-[#a67c52] font-bold mb-4">
            Studio Journal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d2d2a] mb-3">Create Entry</h1>
          <p className="text-[#76786f] max-w-2xl">
            Capture a reflection, plan, or studio note. Once saved, your entry appears in Archives.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 md:p-8 space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
                Entry Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                required
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as EntryCategory)}
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Ex: Evening Notes on the Solstice Draft"
              className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              required
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
              Content
            </label>
            <textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Write your entry..."
              className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-4 py-3 min-h-[220px] resize-y focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
            <motion.button
              type="button"
              onClick={() => navigate("/archives")}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold border border-[rgba(199,199,189,0.3)] text-[#76786f]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-bold bg-[#a67c52] text-white disabled:opacity-70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSaving ? "Saving..." : "Save Entry"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
