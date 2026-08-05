import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ShieldCheck, MessageSquare, Phone, Mail, MapPin, Code2, Heart, GitBranch, Terminal } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-orange-950/60 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity & SENA Box */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">{PERSONAL_INFO.name}</h3>
                <p className="text-xs text-amber-400 font-medium">{PERSONAL_INFO.title}</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Desarrollador WebApp Dev_ enfocado en crear soluciones web interactivas con React 19, TypeScript estricto, infraestructura Cloud en Firebase, pipelines automatizados con GitHub Actions e inteligencia cognitiva con Gemini AI Studio.
            </p>

            {/* Formal SENA Credential Box */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-orange-900/40 space-y-1 max-w-md">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Titulación Profesional Certificada</span>
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {PERSONAL_INFO.senaTitle}
              </div>
              <div className="text-[11px] text-slate-400">
                {PERSONAL_INFO.senaInstitution}
              </div>
            </div>
          </div>

          {/* Quick Direct Contacts */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Contacto Directo</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 text-amber-400" />
                  <span>WhatsApp: {PERSONAL_INFO.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.phoneUrl}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>Celular: {PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.emailUrl}
                  className="hover:text-amber-300 transition-colors flex items-center space-x-2 truncate"
                >
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li className="flex items-center space-x-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PERSONAL_INFO.location}</span>
              </li>
            </ul>
          </div>

          {/* Stack Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Stack Tecnológico Core</h4>
            <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300">React 19</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300">TypeScript</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-orange-400">Firebase Firestore</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-orange-400">Firebase Auth</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-orange-400">Realtime DB</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-orange-400">Firebase Hosting</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300">Gemini AI Studio</span>
              <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-amber-300">GitHub CI/CD</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Todos los derechos reservados.
          </div>
          <div className="flex items-center space-x-2 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span>Diseño Neon Warm Orange • Barranquilla, Colombia</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
