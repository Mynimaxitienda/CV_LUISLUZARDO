import React from "react";
import { MessageSquare, Phone, Mail, MapPin, Sparkles, ArrowRight, ShieldCheck, Cpu, Database, GitBranch, Terminal } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface HeroProps {
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Deep Blue Radial Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none z-0">
        <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-orange-600/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-amber-500/15 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] bg-red-600/10 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Status & Location Pills */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/40 text-amber-300 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(249,115,22,0.25)]">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
                <span>Especialista en WebApps, Cloud e IA</span>
              </div>

              <div className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Barranquilla, Colombia</span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-none">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-orange-400 to-amber-300 bg-clip-text text-transparent">
                {PERSONAL_INFO.title}
              </p>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
              <span className="px-3 py-1 rounded-md bg-orange-950/40 text-amber-300 border border-orange-500/30 text-xs font-mono font-medium flex items-center space-x-1">
                <Cpu className="w-3.5 h-3.5 text-orange-400" />
                <span>React 19 + TS</span>
              </span>
              <span className="px-3 py-1 rounded-md bg-orange-950/40 text-amber-300 border border-amber-500/30 text-xs font-mono font-medium flex items-center space-x-1">
                <Database className="w-3.5 h-3.5 text-amber-400" />
                <span>Firebase (Firestore/Auth/Realtime)</span>
              </span>
              <span className="px-3 py-1 rounded-md bg-orange-950/40 text-orange-300 border border-orange-500/30 text-xs font-mono font-medium flex items-center space-x-1">
                <Sparkles className="w-3.5 h-3.5 text-orange-400" />
                <span>Gemini AI Studio</span>
              </span>
              <span className="px-3 py-1 rounded-md bg-orange-950/40 text-amber-300 border border-orange-500/30 text-xs font-mono font-medium flex items-center space-x-1">
                <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub CI/CD Pipelines</span>
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              {/* WhatsApp Glow CTA */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 hover:from-red-600 hover:to-amber-300 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] flex items-center justify-center space-x-2 group cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-slate-950 group-hover:scale-110 transition-transform" />
                <span>WhatsApp Directo (323 699 2344)</span>
              </a>

              {/* Direct Contact CTA */}
              <button
                onClick={onContactClick}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-amber-300 border border-orange-500/40 hover:border-orange-400 font-bold text-base transition-all duration-300 flex items-center justify-center space-x-2 shadow-[0_0_15px_rgba(249,115,22,0.2)] group"
              >
                <span>Ver Contacto Directo</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Direct Contact Phone & Email Bar */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <a
                href={PERSONAL_INFO.phoneUrl}
                className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/40 transition-all hover:bg-slate-800/50"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/30 text-amber-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-400">Llamada / Celular</div>
                  <div className="font-semibold text-slate-200">{PERSONAL_INFO.phone}</div>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.emailUrl}
                className="flex items-center space-x-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/40 transition-all hover:bg-slate-800/50"
              >
                <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/30 text-amber-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left truncate">
                  <div className="text-xs text-slate-400">Correo Electrónico</div>
                  <div className="font-semibold text-slate-200 truncate">{PERSONAL_INFO.email}</div>
                </div>
              </a>
            </div>

          </div>

          {/* Terminal / Technical Card Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Glowing aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Terminal Box */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-orange-900/40 p-5 md:p-6 shadow-2xl backdrop-blur-md space-y-4">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center space-x-1">
                    <Terminal className="w-3.5 h-3.5 text-amber-400" />
                    <span>luis-luzardo-architecture.ts</span>
                  </div>
                </div>

                {/* Code Snippet Display */}
                <div className="font-mono text-xs space-y-2 text-slate-300 overflow-x-auto p-3 rounded-lg bg-slate-950/80 border border-slate-800/60">
                  <div>
                    <span className="text-purple-400">interface</span>{" "}
                    <span className="text-amber-300">DeveloperProfile</span> {"{"}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">nombre:</span>{" "}
                    <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">rol:</span>{" "}
                    <span className="text-emerald-300">"{PERSONAL_INFO.title}"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">ubicacion:</span>{" "}
                    <span className="text-emerald-300">"{PERSONAL_INFO.location}"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">whatsapp:</span>{" "}
                    <span className="text-amber-300">"{PERSONAL_INFO.whatsapp}"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">sena_titulacion:</span>{" "}
                    <span className="text-emerald-300">"ADSI - Certificado Oficial"</span>;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">coreStack:</span> [
                  </div>
                  <div className="pl-8 text-amber-400">
                    "React 19", "TypeScript Strict", "Firebase", "Gemini AI", "GitHub CI/CD"
                  </div>
                  <div className="pl-4">];</div>
                  <div>{"}"}</div>
                </div>

                {/* SENA Verified Badge */}
                <div className="p-3.5 rounded-xl bg-orange-950/30 border border-orange-800/40 flex items-center space-x-3 text-xs text-slate-300">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-amber-400 border border-orange-500/30 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-200">Acreditación Profesional SENA</div>
                    <div className="text-slate-400 text-[11px]">
                      Analista y Desarrollador de Sistemas de Información (Colombia)
                    </div>
                  </div>
                </div>

                {/* Quick Impact Stats Grid */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {PERSONAL_INFO.stats.map((stat, index) => (
                    <div key={index} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 text-center">
                      <div className="text-xl font-extrabold text-amber-400">{stat.value}</div>
                      <div className="text-[11px] text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
