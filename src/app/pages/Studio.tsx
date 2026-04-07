import { motion } from "motion/react";
import { Upload, MessageSquareQuote } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type StudioArtifact = {
  id: string;
  name: string;
  addedAt: string;
};

type StudioThought = {
  id: string;
  text: string;
  createdAt: string;
};

const STUDIO_ARTIFACTS_KEY = "curated-ephemera.studio-artifacts";
const STUDIO_THOUGHTS_KEY = "curated-ephemera.studio-thoughts";

function loadArtifacts(): StudioArtifact[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STUDIO_ARTIFACTS_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as StudioArtifact[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadThoughts(): StudioThought[] {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(STUDIO_THOUGHTS_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as StudioThought[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function Studio() {
  const [artifacts, setArtifacts] = useState<StudioArtifact[]>(() => loadArtifacts());
  const [thoughts, setThoughts] = useState<StudioThought[]>(() => loadThoughts());
  const [thoughtDraft, setThoughtDraft] = useState("");
  const [showThoughtComposer, setShowThoughtComposer] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STUDIO_ARTIFACTS_KEY, JSON.stringify(artifacts));
    }
  }, [artifacts]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STUDIO_THOUGHTS_KEY, JSON.stringify(thoughts));
    }
  }, [thoughts]);

  const handleOpenFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) {
      return;
    }

    const nextArtifacts: StudioArtifact[] = Array.from(files).map((file) => ({
      id: crypto.randomUUID(),
      name: file.name,
      addedAt: new Date().toISOString(),
    }));

    setArtifacts((previous) => [...nextArtifacts, ...previous]);
    event.target.value = "";
  };

  const handleSaveThought = () => {
    if (!thoughtDraft.trim()) {
      return;
    }

    const nextThought: StudioThought = {
      id: crypto.randomUUID(),
      text: thoughtDraft.trim(),
      createdAt: new Date().toISOString(),
    };

    setThoughts((previous) => [nextThought, ...previous]);
    setThoughtDraft("");
    setShowThoughtComposer(false);
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
          className="bg-[#5d6057] rounded-2xl p-8 md:p-12 text-white"
        >
          <p className="text-xs uppercase tracking-widest opacity-75 mb-3">WORKPLACE CONTEXT / SPRING 2024</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Visual Canvas</h1>
          <p className="text-white/80 max-w-2xl">
            A tactile digital environment for mapping ephemeral thoughts and curated inspirations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Canvas Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Featured Image */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              <div className="aspect-video relative">
                <img
                  src="https://images.unsplash.com/photo-1775226236273-b53eff137032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNrJTIwbGFtcCUyMGJyYXNzJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3NTU4NTQ1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Studio workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Grid Content */}
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] overflow-hidden"
                whileHover={{ scale: 1.02, rotate: -1 }}
              >
                <div className="aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1758678527840-12d011853eba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwc2hhZG93JTIwbGlnaHQlMjB3aW5kb3clMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzU1ODU0NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Light study"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-[rgba(166,124,82,0.05)] rounded-2xl p-6 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                <div>
                  <MessageSquareQuote className="w-8 h-8 text-[#a67c52] mb-4" />
                  <p className="text-lg font-serif italic text-[#2d2d2a] leading-relaxed mb-4">
                    "The details are not the details. They make the design."
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#76786f]">— Charles Eames</p>
                </div>
                <div className="mt-6">
                  <div className="w-12 h-12 rounded-full bg-[#d4af89] flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-white font-bold">CE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Drop Content Area */}
            <motion.div
              variants={itemVariants}
              className="border-2 border-dashed border-[rgba(199,199,189,0.3)] rounded-2xl p-12 text-center hover:border-[#a67c52] hover:bg-[rgba(166,124,82,0.02)] transition-all cursor-pointer"
              onClick={handleOpenFilePicker}
              whileHover={{ scale: 1.01 }}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                multiple
                onChange={handleFilesSelected}
              />
              <Upload className="w-12 h-12 text-[#76786f] mx-auto mb-4" />
              <p className="text-sm uppercase tracking-widest text-[#76786f] font-bold">DROP CONTENT</p>
              <p className="text-xs text-[#76786f] mt-2">Add a physical artifact to your board today</p>
              {artifacts.length > 0 && (
                <div className="mt-4 text-xs text-[#76786f] space-y-1">
                  <p className="font-bold">{artifacts.length} artifact(s) added</p>
                  {artifacts.slice(0, 2).map((artifact) => (
                    <p key={artifact.id}>{artifact.name}</p>
                  ))}
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Active Curations */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-[0px_20px_50px_-12px_rgba(0,0,0,0.08)] p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[#a67c52] animate-pulse" />
                <h3 className="text-xs uppercase tracking-widest text-[#2d2d2a] font-bold">
                  Active Curations
                </h3>
              </div>
              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3 group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded bg-[#5d6057] flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1759417506488-71a24cf4fe24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwc3R1ZGlvJTIwbmF0dXJhbCUyMGxpZ2h0JTIwdmFzZXxlbnwxfHx8fDE3NzU1ODU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Collection preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-[#2d2d2a] group-hover:text-[#a67c52]">
                      Light & Shadow Study
                    </p>
                    <p className="text-xs text-[#76786f]">14 Items • Modified 2h ago</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start gap-3 group cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded bg-[#d4af89] flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1737276681996-fb185108a48d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBhcGVyJTIwdGV4dHVyZSUyMGJlaWdlfGVufDF8fHx8MTc3NTQ4OTg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Collection preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-[#2d2d2a] group-hover:text-[#a67c52]">
                      Paper Textures V2
                    </p>
                    <p className="text-xs text-[#76786f]">8 Items • Modified 1d ago</p>
                  </div>
                </motion.div>

                {artifacts.slice(0, 2).map((artifact) => (
                  <motion.div
                    key={artifact.id}
                    className="flex items-start gap-3 group cursor-pointer"
                    whileHover={{ x: 4 }}
                  >
                    <div className="w-12 h-12 rounded bg-[rgba(166,124,82,0.15)] flex-shrink-0 flex items-center justify-center">
                      <Upload className="w-4 h-4 text-[#a67c52]" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm text-[#2d2d2a] group-hover:text-[#a67c52]">
                        {artifact.name}
                      </p>
                      <p className="text-xs text-[#76786f]">Recently added artifact</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                className="w-full mt-6 py-2 border border-[rgba(199,199,189,0.3)] rounded-lg text-xs uppercase tracking-widest text-[#76786f] font-bold hover:bg-[rgba(166,124,82,0.05)] hover:border-[#a67c52] hover:text-[#a67c52] transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View All Collections
              </motion.button>
            </motion.div>

            {/* Studio Prompt */}
            <motion.div
              variants={itemVariants}
              className="bg-[#5d6057] rounded-2xl p-6 text-white"
            >
              <h3 className="text-xs uppercase tracking-widest opacity-75 mb-3">Studio Prompt</h3>
              <p className="text-sm leading-relaxed mb-4">
                How does the morning light affect the hierarchy of your workspace? Add a physical artifact to your board today.
              </p>
              <motion.button
                type="button"
                onClick={() => setShowThoughtComposer((previous) => !previous)}
                className="w-full bg-white/10 backdrop-blur-sm py-3 rounded-lg text-xs uppercase tracking-widest font-bold hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Record Thought
              </motion.button>

              {showThoughtComposer && (
                <div className="mt-4 space-y-3">
                  <textarea
                    value={thoughtDraft}
                    onChange={(event) => setThoughtDraft(event.target.value)}
                    placeholder="Write your studio thought..."
                    className="w-full min-h-[90px] rounded-lg bg-white/10 border border-white/25 p-3 text-sm placeholder:text-white/60 focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleSaveThought}
                    className="w-full bg-white text-[#2d2d2a] py-2 rounded-lg text-xs uppercase tracking-widest font-bold"
                  >
                    Save Thought
                  </button>
                </div>
              )}

              {thoughts.length > 0 && (
                <div className="mt-4 space-y-2">
                  {thoughts.slice(0, 2).map((thought) => (
                    <p key={thought.id} className="text-xs text-white/85 leading-relaxed border-t border-white/20 pt-2">
                      {thought.text}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}