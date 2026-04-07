import { motion } from "motion/react";
import { Grid3x3, List } from "lucide-react";
import { FormEvent, useState } from "react";

type CollectionItem = {
  id: number;
  image: string;
  title: string;
  category: string;
  date: string;
  items: string;
  resources: string[];
};

const initialCollections: CollectionItem[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1759417506488-71a24cf4fe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwbmF0dXJhbCUyMGxpZ2h0JTIwdmFzZXxlbnwxfHx8fDE3NzU1ODU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "The Serene Studio",
    category: "VISUAL MOODS",
    date: "UPDATED 2 DAYS AGO",
    items: "+12",
    resources: ["Morning window studies", "Soft light board", "Neutral vase references"],
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1737276681996-fb185108a48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJlaWdlfGVufDF8fHx8MTc3NTQ4OTg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Typography Lab",
    category: "VISUAL STUDIES",
    date: "12 RESOURCES",
    items: "+12",
    resources: ["Serif pairing sheet", "Poster grid trials", "Headline spacing notes"],
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1561387543-fdfaf21e4194?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3R0ZXJ5JTIwY3JhZnRzJTIwaGFuZHMlMjBjZXJhbWljfGVufDF8fHx8MTc3NTU4NTQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Tactile Craft",
    category: "PHYSICAL STUDIES",
    date: "10 RESOURCES",
    items: "+10",
    resources: ["Clay texture snapshots", "Wheel-form references", "Glaze test archive"],
  },
];

const featuredProject = {
  title: "2024 Archive Strategy",
  subtitle: "ACTIVE PROJECT",
  description: "Structuring the physical and digital owner for the upcoming year's planning cycles.",
  progress: 64,
};

export default function Collections() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [collections, setCollections] = useState<CollectionItem[]>(initialCollections);
  const [newTitle, setNewTitle] = useState("");
  const [newCategory, setNewCategory] = useState("VISUAL MOODS");
  const [newImage, setNewImage] = useState("");
  const [newResources, setNewResources] = useState("");
  const [featuredProgress, setFeaturedProgress] = useState(featuredProject.progress);
  const [progressInput, setProgressInput] = useState(`${featuredProject.progress}`);

  const handleAddCollection = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newTitle.trim() || !newImage.trim()) {
      return;
    }

    const resources = newResources
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    const nextCollection: CollectionItem = {
      id: Date.now(),
      title: newTitle.trim(),
      category: newCategory.trim() || "VISUAL MOODS",
      image: newImage.trim(),
      date: "UPDATED JUST NOW",
      items: `+${Math.max(resources.length, 1)}`,
      resources: resources.length > 0 ? resources : ["First resource added"],
    };

    setCollections((previous) => [nextCollection, ...previous]);
    setNewTitle("");
    setNewCategory("VISUAL MOODS");
    setNewImage("");
    setNewResources("");
  };

  const handleUpdateProgress = () => {
    const parsed = Number(progressInput);
    if (Number.isNaN(parsed)) {
      return;
    }

    const clamped = Math.max(0, Math.min(100, parsed));
    setFeaturedProgress(clamped);
    setProgressInput(`${clamped}`);
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
        {/* Header Banner */}
        <motion.div
          variants={itemVariants}
          className="bg-[#5d6057] rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-xs uppercase tracking-widest opacity-75 mb-3">ARCHIVE OVERVIEW</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Collections</h1>
            <p className="text-white/80 max-w-2xl">
              A tactile repository of your digital ephemera. Curated thoughts, visual moods, and evolving projects, gathered with intention.
            </p>
          </div>
        </motion.div>

        {/* Featured Project */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden">
            <div className="aspect-[16/9] relative">
              <img
                src="https://images.unsplash.com/photo-1737276681996-fb185108a48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJlaWdlfGVufDF8fHx8MTc3NTQ4OTg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#a67c52] text-white px-3 py-1 rounded text-xs uppercase tracking-widest font-bold">
                {featuredProject.subtitle}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-[#2d2d2a] mb-2">{featuredProject.title}</h3>
              <p className="text-[#76786f] mb-6">{featuredProject.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-xs uppercase tracking-widest text-[#76786f] font-bold">PROGRESS</span>
                  <span className="font-bold text-[#a67c52]">{featuredProgress}%</span>
                </div>
                <div className="w-full bg-[rgba(199,199,189,0.2)] rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-[#a67c52] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${featuredProgress}%` }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="bg-[rgba(166,124,82,0.05)] rounded-2xl p-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-full bg-[#f5c396] flex items-center justify-center mb-4">
                <span className="text-xl">📓</span>
              </div>
              <h4 className="font-bold text-[#2d2d2a] mb-2">Poetry & Prose</h4>
              <p className="text-sm text-[#76786f]">54 Drafts • 3 Published</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-bold text-[#2d2d2a] mb-4">Progress % Entry</h4>
              <div className="flex gap-2">
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={progressInput}
                  onChange={(event) => setProgressInput(event.target.value)}
                  className="flex-1 bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                />
                <motion.button
                  type="button"
                  onClick={handleUpdateProgress}
                  className="bg-[#a67c52] text-white px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-bold"
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Update
                </motion.button>
              </div>
            </motion.div>

            <motion.form
              variants={itemVariants}
              onSubmit={handleAddCollection}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6 space-y-3"
            >
              <h4 className="font-bold text-[#2d2d2a]">Add Collection</h4>
              <input
                type="text"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}
                placeholder="Collection title"
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                required
              />
              <input
                type="text"
                value={newCategory}
                onChange={(event) => setNewCategory(event.target.value)}
                placeholder="Category"
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              />
              <input
                type="url"
                value={newImage}
                onChange={(event) => setNewImage(event.target.value)}
                placeholder="Header image URL"
                className="w-full bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
                required
              />
              <textarea
                value={newResources}
                onChange={(event) => setNewResources(event.target.value)}
                placeholder="Resources (comma separated)"
                className="w-full min-h-[80px] bg-[rgba(199,199,189,0.1)] border border-[rgba(199,199,189,0.2)] rounded-lg px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-[#a67c52]/20"
              />
              <motion.button
                type="submit"
                className="w-full bg-[#2d2d2a] text-white py-3 rounded-lg text-xs uppercase tracking-widest font-bold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Add Collection
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Personal Library Header */}
        <motion.div variants={itemVariants} className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#2d2d2a]">Personal Library</h2>
            <div className="h-1 w-12 bg-[#a67c52] mt-2 rounded-full" />
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-[#a67c52] text-white" : "bg-white text-[#76786f]"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Grid3x3 className="w-5 h-5" />
            </motion.button>
            <motion.button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${viewMode === "list" ? "bg-[#a67c52] text-white" : "bg-white text-[#76786f]"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <List className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Collections Grid */}
        <motion.div
          variants={containerVariants}
          className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden group cursor-pointer"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {collection.items && (
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#2d2d2a]">
                    {collection.items}
                  </div>
                )}
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-[#76786f] font-bold mb-2">
                  {collection.category}
                </p>
                <h3 className="text-xl font-bold text-[#2d2d2a] mb-2 group-hover:text-[#a67c52] transition-colors">
                  {collection.title}
                </h3>
                <p className="text-xs text-[#76786f]">{collection.date}</p>
                <div className="mt-4 space-y-1">
                  {collection.resources.slice(0, 3).map((resource) => (
                    <p key={resource} className="text-xs text-[#76786f] leading-relaxed">
                      • {resource}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
