import React, { useState } from "react";
import { EXPERIENCES } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredExperiences = selectedCategory === "all"
    ? EXPERIENCES
    : EXPERIENCES.filter((exp) => exp.category === selectedCategory || selectedCategory === "all");

  return (
    <section id="trayectoria" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-semibold">
            <Briefcase className="w-3.5 h-3.5 text-amber-400" />
            <span>Trayectoria Profesional & Proyectos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Evolución Técnica & Proyectos Dev_
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Integración de desarrollo web de alto rendimiento con arquitecturas modernas en la nube, ecosistema Firebase e Inteligencia Artificial.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "Todas las Experiencias" },
              { id: "ai", label: "WebApps + Gemini IA" },
              { id: "webapp", label: "WebApps + Firebase" },
              { id: "cloud", label: "Arquitectura & SENA" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 text-slate-950 shadow-[0_0_12px_rgba(249,115,22,0.4)] font-bold"
                    : "bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-orange-950/60 ml-4 md:ml-32 space-y-8">
          {filteredExperiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 md:pl-8 group">
              
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-amber-400 group-hover:scale-125 group-hover:bg-amber-400 transition-all shadow-[0_0_10px_rgba(249,115,22,0.6)]"></div>

              {/* Date Badge on Desktop */}
              <div className="hidden md:block absolute -left-36 top-1 text-xs font-mono font-semibold text-amber-400 w-28 text-right">
                {exp.period}
              </div>

              {/* Experience Card */}
              <div className="bg-slate-900/80 border border-orange-950/50 hover:border-orange-500/50 rounded-2xl p-6 shadow-xl backdrop-blur-md transition-all duration-300 space-y-4">
                
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                      <span>{exp.role}</span>
                    </h3>
                    <div className="text-sm font-semibold text-amber-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-col items-end text-xs text-slate-400 space-y-1">
                    <span className="md:hidden font-mono text-amber-400 font-bold flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Logros Clave & Aportes Técnicos:</div>
                  <ul className="space-y-2">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {exp.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-md bg-orange-950/40 border border-orange-500/30 text-amber-300 text-xs font-mono font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
