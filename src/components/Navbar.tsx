import React, { useState, useEffect } from "react";
import { MessageSquare, Mail, Menu, X, Code2, Lock } from "lucide-react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "competencias", label: "Competencias" },
    { id: "trayectoria", label: "Trayectoria" },
    { id: "ecosistema", label: "Arquitectura Cloud/IA" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-xl border-b border-orange-500/50 shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
          : "bg-slate-950/90 backdrop-blur-md border-b border-orange-950/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick("inicio")}
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 via-orange-500 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(249,115,22,0.4)] group-hover:shadow-[0_0_25px_rgba(249,115,22,0.7)] transition-all">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Code2 className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div>
              <div className="text-base font-bold text-slate-100 flex items-center gap-1.5">
                <span>Luis Luzardo</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-amber-300 border border-orange-500/40 font-medium flex items-center gap-1 shadow-[0_0_10px_rgba(249,115,22,0.2)]">
                  {isScrolled && <Lock className="w-3 h-3 text-amber-400 animate-pulse" />}
                  <span>Dev_</span>
                </span>
              </div>
              <div className="text-xs text-slate-400 flex items-center gap-1.5">
                <span>WebApp & Cloud Architect</span>
                {isScrolled && (
                  <span className="text-[10px] text-amber-400/90 font-mono hidden sm:inline-block">
                    • Header Fijo Activo
                  </span>
                )}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative flex items-center space-x-1.5 ${
                    isActive
                      ? "text-amber-300 bg-orange-500/15 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)] font-bold"
                      : "text-slate-300 hover:text-amber-300 hover:bg-slate-900/70"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_rgba(251,191,36,0.9)]" />
                  )}
                  {item.isNew && !isActive && (
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Contact & Availability Badge */}
          <div className="hidden lg:flex items-center space-x-3">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Disponible para Proyectos</span>
            </div>

            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-orange-500/15 hover:bg-orange-500/25 text-amber-300 border border-orange-400/40 text-sm font-semibold transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_22px_rgba(249,115,22,0.5)]"
            >
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-orange-500/15 text-amber-400 border border-orange-500/30"
              aria-label="WhatsApp Directo"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dramatic Scroll Progress Bar (Orange-Amber-Yellow Neon Gradient) */}
      <div className="w-full h-[2.5px] bg-slate-900 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-red-500 via-orange-500 to-amber-300 shadow-[0_0_10px_rgba(249,115,22,0.9)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-orange-950/60 px-4 pt-2 pb-6 space-y-2 backdrop-blur-xl">
          <div className="flex items-center justify-between px-3 py-2 text-xs text-slate-400 border-b border-slate-800 mb-2">
            <span>Ubicación: Barranquilla, CO</span>
            <span className="text-emerald-400 font-medium">● Disponible</span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                activeSection === item.id
                  ? "bg-orange-500/15 text-amber-300 border border-orange-500/50 font-bold"
                  : "text-slate-300 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2">
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,1)]" />
                )}
                <span>{item.label}</span>
              </span>
              {item.isNew && (
                <span className="text-xs bg-orange-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-orange-400/30">
                  Gemini IA
                </span>
              )}
            </button>
          ))}

          <div className="pt-4 border-t border-slate-800/80 space-y-2">
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(249,115,22,0.5)]"
            >
              <MessageSquare className="w-5 h-5 text-slate-950" />
              <span>WhatsApp Directo (323 699 2344)</span>
            </a>
            <a
              href={PERSONAL_INFO.emailUrl}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 text-slate-200 border border-slate-700 font-medium"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
