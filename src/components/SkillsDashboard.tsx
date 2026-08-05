import React, { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { SKILLS_RADAR_DATA, METRICS_BAR_DATA } from "../data/portfolioData";
import { Cpu, BarChart3, PieChart, Sparkles, CheckCircle2 } from "lucide-react";

export const SkillsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"radar" | "bar">("radar");

  return (
    <section id="competencias" className="py-16 md:py-24 relative bg-slate-950/60 border-y border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5 text-amber-400" />
            <span>Métricas & Evaluación Técnica</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Dashboard de Competencias y Eficiencia
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Análisis cuantitativo de habilidades técnicas clave y rendimiento en la entrega de arquitecturas Cloud e Inteligencia Artificial.
          </p>

          {/* Tab Selector Buttons */}
          <div className="inline-flex p-1.5 rounded-xl bg-slate-900 border border-slate-800 space-x-2 pt-2">
            <button
              onClick={() => setActiveTab("radar")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === "radar"
                  ? "bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span>Gráfico Radar (Habilidades)</span>
            </button>
            <button
              onClick={() => setActiveTab("bar")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center space-x-2 ${
                activeTab === "bar"
                  ? "bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(249,115,22,0.5)]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Eficiencia & Impacto (%)</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Chart Display Container */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-orange-950/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="text-sm font-bold text-slate-200 flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
                <span>{activeTab === "radar" ? "Matriz Radar de Competencias Core" : "Indicadores de Rendimiento y Calidad"}</span>
              </div>
              <span className="text-xs text-amber-400 font-mono bg-orange-500/15 px-2.5 py-1 rounded-md border border-orange-500/30">
                Luzardo Engine v3.0
              </span>
            </div>

            <div className="h-[360px] sm:h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                {activeTab === "radar" ? (
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={SKILLS_RADAR_DATA}>
                    <defs>
                      <radialGradient id="radarOrangeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity={0.8} />
                        <stop offset="70%" stopColor="#ea580c" stopOpacity={0.45} />
                        <stop offset="100%" stopColor="#dc2626" stopOpacity={0.25} />
                      </radialGradient>
                    </defs>
                    <PolarGrid stroke="#334155" />
                    <PolarAngleAxis
                      dataKey="skill"
                      tick={{ fill: "#e2e8f0", fontSize: 12, fontWeight: 600 }}
                    />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#475569" tick={{ fill: "#94a3b8", fontSize: 10 }} />
                    <Radar
                      name="Luis Luzardo"
                      dataKey="score"
                      stroke="#fbbf24"
                      fill="url(#radarOrangeGradient)"
                      strokeWidth={3}
                    />
                  </RadarChart>
                ) : (
                  <BarChart data={METRICS_BAR_DATA} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <defs>
                      <linearGradient id="barOrangeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                      <linearGradient id="barRedGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#dc2626" />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="metric"
                      stroke="#64748b"
                      tick={{ fill: "#cbd5e1", fontSize: 11 }}
                      interval={0}
                    />
                    <YAxis domain={[0, 100]} stroke="#64748b" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        borderColor: "#ea580c",
                        borderRadius: "0.75rem",
                        color: "#f8fafc",
                        boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.3)",
                      }}
                      formatter={(value: any) => [`${value}%`, "Puntuación"]}
                    />
                    <Bar dataKey="valor" radius={[8, 8, 0, 0]}>
                      {METRICS_BAR_DATA.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "url(#barOrangeGradient)" : "url(#barRedGradient)"} />
                      ))}
                    </Bar>
                  </BarChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Skill Cards Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Aspectos Destacados de la Arquitectura</span>
            </h3>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-200 text-sm">React 19 + TypeScript (Strict)</span>
                  <span className="text-amber-400 font-mono text-xs font-bold">98% Master</span>
                </div>
                <p className="text-xs text-slate-400">
                  Arquitecturas de componentes reutilizables, control riguroso de tipos, Hooks avanzados y rendimiento optimizado con Vite.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-200 text-sm">Firebase Backend as a Service (BaaS)</span>
                  <span className="text-amber-400 font-mono text-xs font-bold">96% Senior</span>
                </div>
                <p className="text-xs text-slate-400">
                  Firestore NoSQL, Realtime DB, Auth con reglas de seguridad estrictas, Hosting CDN y notificaciones transaccionales.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-200 text-sm">Gemini AI Studio (Cognitive)</span>
                  <span className="text-orange-400 font-mono text-xs font-bold">92% Especialista</span>
                </div>
                <p className="text-xs text-slate-400">
                  Implementación de soluciones conversacionales, agentes multitarea y procesamiento seguro server-side con @google/genai SDK.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-all">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-200 text-sm">GitHub Actions & CI/CD Pipelines</span>
                  <span className="text-emerald-400 font-mono text-xs font-bold">90% Automatizado</span>
                </div>
                <p className="text-xs text-slate-400">
                  Workflows para pruebas de compilación, validación de linter y despliegues automáticos sin interrupción de servicio.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
