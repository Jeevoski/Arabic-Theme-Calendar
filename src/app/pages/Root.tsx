import { Outlet, Link, useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Calendar, BookOpen, Layers, Box, Settings as SettingsIcon } from "lucide-react";
import { applyTheme, getStoredThemePreference, THEME_STORAGE_KEY } from "../lib/theme";
import { getStoredProfileName, PROFILE_NAME_STORAGE_KEY, PROFILE_UPDATED_EVENT } from "../lib/profile";

export default function Root() {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileName, setProfileName] = useState("Julian Thorne");
  const profileInitial = profileName.trim().charAt(0).toUpperCase();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pointer, setPointer] = useState({ x: 50, y: 42 });
  const [flowTime, setFlowTime] = useState(0);

  const autoX = Math.sin(flowTime * 0.62) * 6;
  const autoY = Math.cos(flowTime * 0.56) * 5;
  const waveX = Math.sin(flowTime * 1.15) * 20;
  const waveY = Math.cos(flowTime * 0.95) * 16;
  const waveX2 = Math.sin(flowTime * 0.78 + 1.1) * 14;
  const waveY2 = Math.cos(flowTime * 1.02 + 0.7) * 12;

  const interactiveX = pointer.x + autoX;
  const interactiveY = pointer.y + autoY;

  const driftX = (interactiveX - 50) * 0.75;
  const driftY = (interactiveY - 50) * 0.75;
  const tiltX = (50 - interactiveY) * 0.14;
  const tiltY = (interactiveX - 50) * 0.14;

  useEffect(() => {
    applyTheme(getStoredThemePreference());

    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleStorage = (event: StorageEvent) => {
      if (event.key === THEME_STORAGE_KEY) {
        applyTheme(getStoredThemePreference());
      }
    };

    const handleSystemThemeChange = () => {
      if (getStoredThemePreference() === "auto") {
        applyTheme("auto");
      }
    };

    window.addEventListener("storage", handleStorage);
    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorage);
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  useEffect(() => {
    setProfileName(getStoredProfileName());

    if (typeof window === "undefined") {
      return;
    }

    const handleStorage = (event: StorageEvent) => {
      if (event.key === PROFILE_NAME_STORAGE_KEY) {
        setProfileName(getStoredProfileName());
      }
    };

    const handleProfileUpdate = () => {
      setProfileName(getStoredProfileName());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdate);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener(PROFILE_UPDATED_EVENT, handleProfileUpdate);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId = 0;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setPointer({ x, y });
        frameId = 0;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let frameId = 0;

    const tick = (now: number) => {
      setFlowTime(now / 1000);
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, []);

  const navigationItems = [
    { path: "/", label: "Calendar", icon: Calendar },
    { path: "/planner", label: "Planner", icon: BookOpen },
    { path: "/collections", label: "Collections", icon: Layers },
    { path: "/studio", label: "Studio", icon: Box },
  ];

  const topNavItems = [
    { path: "/", label: "Monthly" },
    { path: "/yearly", label: "Yearly" },
    { path: "/archives", label: "Archives" },
    { path: "/settings", label: "Settings" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAF7] flex flex-col">
      {/* Interactive 3D cream silk background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ perspective: "1200px" }}>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fffdf8_0%,#f8f0e2_60%,#f2e7d8_100%)] dark:opacity-20" />

        <motion.div
          className="absolute -top-[42vh] -left-[28vw] w-[160vw] h-[120vh] rounded-[50%] bg-[radial-gradient(ellipse_at_50%_40%,rgba(255,255,246,0.98)_0%,rgba(252,242,224,0.92)_35%,rgba(238,222,193,0.68)_72%,rgba(232,213,183,0.2)_100%)] blur-[1px]"
          style={{
            transform: `translate3d(${driftX * 0.4 + waveX * 0.25}px, ${driftY * 0.28 + waveY * 0.2}px, 0) rotateX(${tiltX * 1.2}deg) rotateY(${tiltY * 1.2}deg)`,
            transformStyle: "preserve-3d",
          }}
          animate={{
            x: [0, 26, -22, 0],
            y: [0, 18, -14, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -top-[18vh] -left-[18vw] w-[145vw] h-[92vh] rounded-[46%] bg-[conic-gradient(from_208deg_at_50%_56%,rgba(255,248,231,0.02)_0deg,rgba(123,95,56,0.18)_64deg,rgba(255,250,239,0.95)_138deg,rgba(194,156,97,0.17)_206deg,rgba(255,247,228,0.88)_266deg,rgba(122,92,48,0.16)_320deg,rgba(255,248,231,0.02)_360deg)] mix-blend-multiply blur-[7px] dark:opacity-25"
          style={{
            transform: `translate3d(${driftX * 0.62 + waveX2 * 0.4}px, ${driftY * 0.46 + waveY2 * 0.35}px, 0) rotateX(${tiltX * 1.8}deg) rotateY(${tiltY * 1.8}deg)`,
          }}
          animate={{ rotate: [0, 6, -4, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[22%] left-[4%] w-[108vw] h-[40vh] rounded-[50%] bg-[radial-gradient(ellipse_at_40%_50%,rgba(255,255,249,0.9)_0%,rgba(255,247,232,0.42)_44%,rgba(255,240,214,0)_80%)] blur-[2px]"
          style={{
            transform: `translate3d(${driftX * 0.3 + waveX * 0.2}px, ${driftY * 0.34 + waveY2 * 0.2}px, 0) rotateX(${tiltX * 0.9}deg) rotateY(${tiltY * 0.9}deg)`,
          }}
          animate={{ opacity: [0.55, 0.95, 0.62, 0.55] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute top-[38%] -left-[5%] w-[112vw] h-[36vh] rounded-[50%] bg-[radial-gradient(ellipse_at_58%_45%,rgba(115,86,45,0.22)_0%,rgba(124,96,53,0.14)_32%,rgba(138,110,66,0.08)_55%,rgba(255,244,222,0)_76%)] mix-blend-multiply dark:opacity-22"
          style={{
            transform: `translate3d(${driftX * 0.52 + waveX2 * 0.35}px, ${driftY * 0.54 + waveY * 0.24}px, 0) rotateX(${tiltX * 1.25}deg) rotateY(${tiltY * 1.25}deg)`,
          }}
          animate={{ opacity: [0.08, 0.34, 0.1, 0.08] }}
          transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Top Navigation Bar */}
      <motion.header
        className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(247,238,222,0.72)] border-b border-[rgba(186,160,119,0.22)]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-[1536px] mx-auto px-8 py-5 relative flex items-center justify-center">
          <Link to="/" className="absolute left-8">
            <motion.h1
              className="text-xl font-bold text-[#2d2d2a]"
              style={{ fontFamily: "var(--font-family-signature)", wordSpacing: "0.22em", letterSpacing: "0.01em" }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              The Curated Ephemera
            </motion.h1>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {topNavItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <motion.span
                  className={`text-sm tracking-wide font-bold ${
                    isActive(item.path) ? "text-[#a67c52]" : "text-[#76786f]"
                  } relative`}
                  style={{ fontFamily: "var(--font-family-dashboard)" }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="topNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#a67c52]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.span>
              </Link>
            ))}
          </nav>

          <motion.button
            type="button"
            onClick={() => navigate("/settings")}
            className={`absolute right-8 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
              isActive("/settings")
                ? "bg-[rgba(166,124,82,0.16)] border-[rgba(166,124,82,0.45)] text-[#a67c52]"
                : "bg-[rgba(250,243,231,0.75)] border-[rgba(186,160,119,0.32)] text-[#76786f]"
            }`}
            whileHover={{ scale: 1.06, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className="text-base leading-none"
              style={{ fontFamily: "var(--font-family-heading)" }}
            >
              {profileInitial}
            </span>
          </motion.button>

        </div>
      </motion.header>

      <div className="flex flex-1 relative">
        {!isSidebarOpen && (
          <motion.button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="hidden lg:flex fixed left-0 top-1/2 -translate-y-1/2 z-40 bg-[#2d2d2a] text-white px-3 py-4 rounded-r-xl text-xs uppercase tracking-widest font-bold [writing-mode:vertical-rl] shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
            whileHover={{ x: 4 }}
            whileTap={{ x: 2 }}
          >
            Dashboard
          </motion.button>
        )}

        {isSidebarOpen && (
          <>
            <div
              className="hidden lg:block fixed inset-0 z-40 bg-black/20"
              onClick={() => setIsSidebarOpen(false)}
            />

            <motion.aside
              className="hidden lg:flex fixed left-0 top-[73px] h-[calc(100vh-73px)] w-72 z-50 bg-[#f5f1ef] border-r border-[rgba(166,124,82,0.05)] flex-col justify-between p-8"
              initial={{ x: -280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
            >
              <div>
                <div className="flex items-start justify-between mb-12">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <h2 className="text-base font-bold text-[#2d2d2a] mb-1" style={{ fontFamily: "var(--font-family-dashboard)" }}>
                      Editorial View
                    </h2>
                    <p className="text-xs tracking-wide text-[#76786f] font-bold" style={{ fontFamily: "var(--font-family-dashboard)" }}>
                      April 2026
                    </p>
                  </motion.div>

                  <motion.button
                    type="button"
                    onClick={() => setIsSidebarOpen(false)}
                    className="text-xs uppercase tracking-widest text-[#76786f] font-bold"
                    whileHover={{ color: "#a67c52" }}
                  >
                    Close
                  </motion.button>
                </div>

                <nav className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <Link key={item.path} to={item.path} onClick={() => setIsSidebarOpen(false)}>
                      <motion.div
                        className={`flex items-center gap-4 px-4 py-3 rounded-md transition-colors ${
                          isActive(item.path)
                            ? "bg-white shadow-sm text-[#a67c52]"
                            : "text-[#76786f] hover:bg-white/50"
                        }`}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.22 + index * 0.04 }}
                        whileHover={{ x: 4 }}
                      >
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm font-bold" style={{ fontFamily: "var(--font-family-dashboard)" }}>
                          {item.label}
                        </span>
                      </motion.div>
                    </Link>
                  ))}
                </nav>
              </div>

              <motion.button
                onClick={() => {
                  setIsSidebarOpen(false);
                  navigate("/entries/new");
                }}
                className="w-full bg-[#a67c52] text-white py-4 rounded-md text-sm tracking-wide font-bold shadow-md"
                style={{ fontFamily: "var(--font-family-dashboard)" }}
                whileHover={{ scale: 1.03, y: -2, boxShadow: "0 8px 16px rgba(166, 124, 82, 0.25)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Create Entry
              </motion.button>
            </motion.aside>
          </>
        )}

        {/* Main Content */}
        <main className="flex-1 relative">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <motion.nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[rgba(199,199,189,0.2)] shadow-lg"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <div className="flex items-center justify-around px-4 py-3">
          {[...navigationItems, { path: "/settings", label: "Settings", icon: SettingsIcon }].map((item) => (
            <Link key={item.path} to={item.path}>
              <motion.div
                className={`flex flex-col items-center gap-1 px-4 py-2 ${
                  isActive(item.path) ? "text-[#a67c52]" : "text-[#76786f]"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-family-dashboard)" }}>
                  {item.label}
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
