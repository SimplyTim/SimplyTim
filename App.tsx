import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { TabNavigation } from "./components/TabNavigation";
import { HeroTab } from "./components/HeroTab";
import { SkillsTab } from "./components/SkillsTab";
import { ProjectsTab } from "./components/ProjectsTab";
import { ContactTab } from "./components/ContactTab";

export type TabType = "home" | "skills" | "projects" | "contact";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  return (
    <div className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-indigo-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-pink-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === "home" && <HeroTab key="home" />}
            {activeTab === "skills" && <SkillsTab key="skills" />}
            {activeTab === "projects" && <ProjectsTab key="projects" />}
            {activeTab === "contact" && <ContactTab key="contact" />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
