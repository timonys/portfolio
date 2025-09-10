import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Define all projects here (or import from a separate file)
const projects = [
  {
    title: "ETHOS",
    subtitle: "UI",
    overview: "A futuristic interface for immersive experiences.",
    role: "UI Engineering · Tools",
    tech: ["Unreal Engine", "C++", "Slate"],
    screenshots: ["/assets/ethos-1.png", "/assets/ethos-2.png"],
    banner: "/assets/ethos-showcase.png"
  },
  {
    title: "PREDECESSOR",
    subtitle: "UI / GAMEPLAY",
    overview: "Gameplay systems with optimized UI.",
    role: "UI & Gameplay Engineering",
    tech: ["Unreal Engine", "C++", "Wwise"],
    screenshots: ["/assets/pred-map.png", "/assets/pred-menu.png"],
    banner: "/assets/predecessor-showcase.png"
  },
  {
  title: "EVERYWHERE",
  subtitle: "UI",
  overview: "A futuristic interface for immersive experiences.",
  role: "UI Engineering · Tools",
  tech: ["Unreal Engine", "C++", "Slate"],
  screenshots: ["/assets/ethos-1.png", "/assets/ethos-2.png"],
  banner: "/assets/ethos-showcase.png"
  },
  {
    title: "MINDSEYE",
    subtitle: "UI",
    overview: "A futuristic interface for immersive experiences.",
    role: "UI Engineering · Tools",
    tech: ["Unreal Engine", "C++", "Slate"],
    screenshots: ["/assets/mindseye-screenshot-left.jpg", "/assets/ethos-2.png"],
    banner: "/assets/ethos-showcase.png"
    },
];

export default function ProjectPage() {
  const { title } = useParams();
  const navigate = useNavigate();

  // Find project by title from URL
  const project = projects.find(
    (p) => p.title.toLowerCase() === title.toLowerCase()
  );

  if (!project) return <div className="p-6 text-slate-800">Project not found</div>;

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased px-6 py-12">
      {/* Project Banner */}
      <div className="mb-12 rounded-xl overflow-hidden relative shadow-xl">
        <img
          src={project.banner}
          alt={project.title}
          className="w-full h-64 md:h-96 object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-2">
            {project.title.toUpperCase()}
          </h1>
          <p className="text-xl md:text-2xl text-yellow-200 font-semibold mb-1">
            {project.subtitle.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">OVERVIEW</h2>
        <p className="text-slate-700">{project.overview}</p>
      </section>

      {/* My Role */}
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">MY ROLE</h2>
        <p className="text-slate-700">{project.role}</p>
      </section>

      {/* Tech Used */}
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-slate-900 mb-2">TECH USED</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 font-medium text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
  {project.screenshots.map((img, idx) => (
   <div
   key={idx}
   className="w-[900px] h-[500px] rounded-xl overflow-hidden shadow-md"
 >
   <img
     src={img}
     alt={`Screenshot ${idx + 1}`}
     className="w-full h-full object-cover"
   />
 </div>
  ))}
</section>

      {/* Back to Projects */}
      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="inline-block mt-4 px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg transform transition-transform hover:-translate-y-1 hover:scale-105"
        >
          BACK TO PROJECTS
        </button>
      </div>
    </div>
  );
}