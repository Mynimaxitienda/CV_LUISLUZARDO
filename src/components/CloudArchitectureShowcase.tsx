import React, { useState } from "react";
import { CLOUD_SERVICES } from "../data/portfolioData";
import { CloudServiceItem } from "../types";
import {
  Database,
  ShieldCheck,
  Zap,
  Globe,
  Mail,
  GitBranch,
  Bot,
  Code2,
  Server,
  Layers,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";

export const CloudArchitectureShowcase: React.FC = () => {
  const [selectedService, setSelectedService] = useState<CloudServiceItem>(CLOUD_SERVICES[0]);
  const [activeDiagramStep, setActiveDiagramStep] = useState<number>(0);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Database":
        return <Database className="w-6 h-6 text-amber-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-yellow-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-cyan-400" />;
      case "Mail":
        return <Mail className="w-6 h-6 text-rose-400" />;
      case "GitBranch":
        return <GitBranch className="w-6 h-6 text-cyan-300" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-blue-400" />;
      default:
        return <Code2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  const architectureDiagramSteps = [
    {
      step: 1,
      title: "1. Usuario & Frontend SPA",
      desc: "React 19 + TypeScript en Vite alojado en Firebase Hosting CDN global para una respuesta ultrarrápida.",
      badge: "Client Layer",
    },
    {
      step: 2,
      title: "2. Autenticación & Persistencia",
      desc: "Firebase Auth verifica identidades mientras Firestore & Realtime DB sincronizan documentos sin latencia.",
      badge: "Firebase BaaS",
    },
    {
      step: 3,
      title: "3. Motor Cognitivo IA",
      desc: "Express Server procesa solicitudes seguras con Gemini AI Studio (@google/genai SDK) evitando exposición de API Keys.",
      badge: "Gemini AI Node Server",
    },
    {
      step: 4,
      title: "4. CI/CD & Deploy Automático",
      desc: "Cada push a la rama main de GitHub activa GitHub Actions que compilan y despliegan a producción de forma autónoma.",
      badge: "GitHub Actions Workflow",
    },
  ];

  return (
    <section id="ecosistema" className="py-16 md:py-24 relative bg-slate-950/70 border-y border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-300 text-xs font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Arquitectura Cloud e IA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Ecosistema Tecnológico de Alto Rendimiento
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Infraestructura completa basada en Firebase, GitHub CI/CD, React 19 Strict TypeScript y Gemini AI Studio.
          </p>
        </div>

        {/* Interactive Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CLOUD_SERVICES.map((service) => {
            const isSelected = selectedService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service)}
                className={`p-5 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? "bg-slate-900 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.25)]"
                    : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    {getIcon(service.iconName)}
                  </div>
                  <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full border ${service.badgeColor}`}>
                    {service.type}
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-100 text-base">{service.name}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{service.description}</p>
                </div>

                <div className="text-xs font-semibold text-amber-400 flex items-center space-x-1 pt-1">
                  <span>Ver Especificación</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Detail Panel & Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Selected Service Detail */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-orange-500/40 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-5">
            <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-full border ${selectedService.badgeColor}`}>
                  {selectedService.type}
                </span>
                <h3 className="text-xl font-bold text-slate-100 mt-1">{selectedService.name}</h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Capacidades Implementadas:</div>
              <div className="grid grid-cols-1 gap-2">
                {selectedService.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300 p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Architecture Flow Diagram */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-orange-950/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="text-base font-bold text-slate-200 flex items-center space-x-2">
                <Server className="w-5 h-5 text-amber-400" />
                <span>Flujo Integrado de Arquitectura WebApp</span>
              </div>
              <span className="text-xs text-emerald-400 font-mono bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                Full Continuous Sync
              </span>
            </div>

            {/* Interactive Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {architectureDiagramSteps.map((item, index) => {
                const isActive = activeDiagramStep === index;
                return (
                  <div
                    key={index}
                    onClick={() => setActiveDiagramStep(index)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                      isActive
                        ? "bg-slate-950 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
                        : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-amber-400">{item.badge}</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    </div>
                    <h5 className="font-bold text-slate-100 text-sm">{item.title}</h5>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Visual Pipeline Bar */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-amber-400 font-bold border-b border-slate-800 pb-2">
                <span>GitHub main</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
                <span>GitHub Actions</span>
                <ArrowRight className="w-4 h-4 text-orange-400" />
                <span>Firebase Hosting / Cloud Run</span>
              </div>
              <div className="text-slate-400 text-[11px] pt-1">
                ✓ Compilación TypeScript en Strict Mode sin errores <br />
                ✓ Verificación de variables en .env.example sin exponer secrets <br />
                ✓ Despliegue automatizado con tiempo medio de pipeline: 2m 45s
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
