import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, Linkedin, Github } from "lucide-react";

const projects = [
  {
    title: "ETHOS",
    subtitle: "UI",
    img: "/assets/tba.png",
    engine: "/assets/unreal.png",
  },
  {
    title: "PREDECESSOR",
    subtitle: "UI / GAMEPLAY",
    img: "/assets/predecessor-showcase.png",
    engine: "/assets/unreal.png",
  },
  {
    title: "EVERYWHERE",
    subtitle: "UI / TOOLS / OPTIMISATION",
    img: "/assets/everywhere-showcase.png",
    engine: "/assets/unreal.png",
  },
  {
    title: "MINDSEYE",
    subtitle: "UI / TOOLS / OPTIMISATION",
    img: "/assets/mindseye-showcase.jpg",
    engine: "/assets/unreal.png",
  },
];

export default function PortfolioLanding() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased">
      {/* HERO */}
      <header className="relative mb-16">
        <div
          className="relative w-full h-[22vh] md:h-[32vh] flex flex-col items-center justify-center bg-center bg-cover overflow-hidden"
          style={{ backgroundImage: "url('/assets/banner.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/0"></div>

          {/* Floating Shapes */}
          <motion.div
            className="absolute top-10 left-10 w-24 h-24 rounded-full bg-cyan-400/20 blur-3xl animate-pulse"
            animate={{ y: [0, 15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-32 h-32 rounded-full bg-orange-400/20 blur-3xl animate-pulse"
            animate={{ y: [0, -10, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Contact Icons */}
          <div className="absolute top-6 right-6 flex gap-4">
            <a
              href="mailto:timonys1998@gmail.com"
              target="_blank"
              className="text-white hover:text-cyan-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/timonys"
              target="_blank"
              className="text-white hover:text-cyan-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/timonys"
              target="_blank"
              className="text-white hover:text-cyan-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Hero Text */}
          <div className="relative text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: -30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
              className="mt-8 text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-orange-400 drop-shadow-lg tracking-tight"
            >
              TIMO NYS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-2 text-xl md:text-2xl font-semibold text-cyan-300"
            >
              UI/UX Engineer | Game & Tools
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-xl mx-auto mt-4 text-sm md:text-base text-white/90"
            >
              Building high-performance user interfaces and developer tools that make
              workflows smoother and more intuitive.
            </motion.p>

            <motion.a
              href="#projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 120 }}
              className="inline-block mt-6 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg"
            >
              EXPLORE MY WORK
            </motion.a>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        {/* Projects */}
        <section id="projects" className="bg-slate-50 rounded-2xl p-10 shadow-xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-indigo-600 mb-2"
          >
            Campaign Highlights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-600 mb-6"
          >
            A selection of professional work I’ve contributed to.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, rotateZ: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
                className="relative bg-white rounded-2xl p-4 border shadow-sm cursor-pointer"
                onClick={() => navigate(`/project/${p.title.toLowerCase()}`)}
              >
                <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[1/1] flex items-center justify-center">
                  <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 text-sm md:text-base">
                  {p.title}
                </h3>
                <p className="text-xs text-cyan-600 mt-1">{p.subtitle}</p>
                <img
                  src={p.engine}
                  alt={`${p.title} engine`}
                  className="absolute bottom-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded bg-white/80 p-1"
                />
              </motion.article>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            className="md:col-span-1 rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/assets/headshot.png"
              alt="avatar"
              className="w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div
            className="md:col-span-2 rounded-xl p-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-indigo-600">Character Background</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I'm Timo, a Game/UI Engineer focused on building performance-critical systems and tools for immersive
              gameplay. I ship polished developer tooling and UI that helps teams move faster.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "🎲 Dungeon Master (D&D)", color: "bg-cyan-200 text-cyan-900" },
                { label: "💃 Dancer", color: "bg-violet-200 text-violet-900" },
                { label: "🌍 World Explorer", color: "bg-cyan-200 text-cyan-900" },
                { label: "📚 Reader", color: "bg-violet-200 text-violet-900" },
              ].map(({ label, color }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  className={`px-4 py-2 rounded-full ${color} text-sm md:text-base font-semibold shadow-sm`}
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Personal Work / Side Quests */}
<section
  id="personal-work"
  className="mt-16 bg-slate-50 rounded-2xl p-10 shadow-xl"
>
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-extrabold text-indigo-600 mb-2"
  >
    Side Quests <span className="text-slate-500 text-lg">(Personal Work)</span>
  </motion.h2>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.1 }}
    className="text-slate-600 mb-6"
  >
    Experiments, explorations, and things I build just for fun.
  </motion.p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[{
      title: "VOLUMETRIC CLOUDS",
      subtitle: "Materials / Shaders / VFX",
      img: "/assets/clouds.png",
      engine: "/assets/unreal.png",
    }].map((p, i) => (
      <motion.article
        key={i}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        whileHover={{ scale: 1.05, rotateZ: 1 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
        className="relative bg-white rounded-2xl p-4 border shadow-sm cursor-pointer"
      >
        <div className="rounded-xl overflow-hidden bg-slate-100 aspect-[1/1] flex items-center justify-center">
          <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
        </div>
        <h3 className="mt-4 font-semibold text-slate-900 text-sm md:text-base">
          {p.title}
        </h3>
        <p className="text-xs text-cyan-600 mt-1">{p.subtitle}</p>
        <img
          src={p.engine}
          alt={`${p.title} engine`}
          className="absolute bottom-3 right-3 w-10 h-10 rounded bg-white/80 p-1"
        />
      </motion.article>
    ))}
  </div>
</section>

        {/* Skills Section */}
        <section className="mt-16 bg-slate-50 rounded-2xl p-10 shadow-md">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-extrabold text-indigo-600"
          >
            My Abilities
          </motion.h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "🪄 Superpowers", color: "cyan", items: ["UI Systems", "Slate", "Renderer", "Tools", "Wwise"] },
              { title: "📖 Spellbook", color: "violet", items: ["C++", "C#"] },
              { title: "🛠️ Equipment", color: "orange", items: ["Unreal Engine", "Unity"] },
            ].map((group) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className={`text-lg font-bold text-${group.color}-700 mb-3`}>{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <motion.span
                      key={s}
                      whileHover={{ scale: 1.1 }}
                      className={`px-4 py-2 rounded-full bg-${group.color}-100 text-${group.color}-800 font-semibold text-sm shadow-sm`}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <motion.footer
          className="mt-16 pb-12 text-center text-sm text-slate-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>© {new Date().getFullYear()} Timo Nys — Built with ☕ + 🎮 + ❤️</p>
        </motion.footer>
      </main>
    </div>
  );
}