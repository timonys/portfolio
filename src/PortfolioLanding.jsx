import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "ETHOS",
    subtitle: "UI",
    img: "/assets/ethos-showcase.png",
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
    <div className="min-h-screen bg-white text-slate-800 antialiased ">
      {/* HERO */}
      <header className="relative mb-12 ">
  <div
    className="relative w-full h-[15vh] sm:h-[18vh] md:h-[22vh] lg:h-[25vh] flex items-center justify-center bg-center bg-cover"
    style={{ backgroundImage: "url('/assets/banner.png')" }}
  >
    {/* Optional overlay for readability */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Hero content */}
    <div className="relative text-center px- md:px-0">
      <h1 className="mt-8 text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg tracking-tight">
        TIMO NYS
      </h1>
      <p className="mt-2 text-xl md:text-2xl font-semibold text-yellow-200">
        UI / TOOLS ENGINEER
      </p>
      <p className="max-w-xl mx-auto mt-4 text-sm md:text-base text-white/90">
        Building high-performance user interfaces and developer tools that make workflows
        smoother and more intuitive.
      </p>
      <a
        href="#projects"
        className="inline-block mt-6 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105"
      >
        EXPLORE MY WORK
      </a>
    </div>
  </div>
</header>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        {/* Projects */}
        <section id="projects" className="bg-white rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">PROJECTS</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {projects.map((p, i) => (
              <article key={i} className="relative bg-white rounded-2xl p-4 border shadow-sm hover:shadow-md transition-shadow" onClick={() => navigate(`/project/${p.title.toLowerCase()}`)}>
                <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[1/1] flex items-center justify-center">
                  <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 text-sm md:text-base">{p.title}</h3>
                <p className="text-xs text-sky-600 mt-1">{p.subtitle}</p>

                {/* Engine icon */}
                <img
                  src={p.engine}
                  alt={`${p.title} engine`}
                  className="absolute bottom-3 right-3 w-8 h-8 md:w-10 md:h-10 rounded bg-white/80 p-1"
                />
              </article>
            ))}
          </div>
        </section>

        {/* Personal Work */}
<section id="personal-work" className="mt-12 bg-white rounded-xl p-8 shadow-xl">
  <h2 className="text-2xl font-extrabold text-slate-900 mb-6">PERSONAL WORK</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[
      {
        title: "VOLUMETRIC CLOUDS",
        subtitle: "Materials / Shaders / VFX",
        img: "/assets/clouds.png",
        engine: "/assets/unreal.png",
      },
    ].map((p, i) => (
      <article key={i} className="relative bg-white rounded-2xl p-4 border shadow-sm hover:shadow-md transition-shadow">
        <div className="rounded-xl overflow-hidden bg-slate-50 aspect-[1/1] flex items-center justify-center">
          <img src={p.img} alt={p.title} className="object-cover w-full h-full" />
        </div>
        <h3 className="mt-4 font-semibold text-slate-900 text-sm md:text-base">{p.title}</h3>
        <p className="text-xs text-sky-600 mt-1">{p.subtitle}</p>

        {/* Engine icon */}
        <img
          src={p.engine}
          alt={`${p.title} engine`}
          className="absolute bottom-3 right-3 w-12 h-12 md:w-10 md:h-10 rounded bg-white/80 p-1"
        />
      </article>
    ))}
  </div>
</section>

        {/* About */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-1">
            <div className="rounded-3xl overflow-hidden">
              <img src="/assets/headshot.png" alt="avatar" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="md:col-span-2 bg-white rounded-xl p-6 shadow-md">
            <h2 className="text-2xl font-extrabold">ABOUT</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I'm Timo, a Game/UI Engineer focused on building performance-critical systems and tools for immersive
              gameplay. I ship polished developer tooling and UI that helps teams move faster.
            </p>
            <a href="#projects" className="inline-block mt-4 px-4 py-2 rounded-full shadow-lg bg-orange-500 text-white font-semibold transform transition-transform hover:-translate-y-1 hover:scale-105">VIEW WORK</a>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-extrabold">SKILLS</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                
                'UI Systems',
                'Slate',
                'Renderer',
                'Tools',
                'Wwise',
                ].map((s) => (
                <span
                  key={s}
                    className="px-8 py-3 rounded-full bg-slate-100 text-base md:text-lg font-semibold shadow-sm"
              >
              {s}
                </span>
    ))}
  </div>
</section>

        {/* Languages */}
        <section className="mt-10 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-extrabold">LANGUAGES</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                'C++',
                'C#',
                ].map((s) => (
                <span
                  key={s}
                    className="px-8 py-3 rounded-full bg-slate-100 text-base md:text-lg font-semibold shadow-sm"
              >
              {s}
                </span>
    ))}
  </div>
</section>

{/* Tools */}
        <section className="mt-10 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-2xl font-extrabold">TOOLS</h2>
            <div className="mt-4 flex flex-wrap gap-4">
              {[
                'Unreal Engine',
                'Unity',
                ].map((s) => (
                <span
                  key={s}
                    className="px-8 py-3 rounded-full bg-slate-100 text-base md:text-lg font-semibold shadow-sm"
              >
              {s}
                </span>
    ))}
  </div>
</section>

        {/* Footer */}
        <footer className="mt-12 pb-12 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Timo Nys — UI / Tools Engineer
        </footer>
      </main>
    </div>
  );
}