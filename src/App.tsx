import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SkillsDashboard } from "./components/SkillsDashboard";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { CloudArchitectureShowcase } from "./components/CloudArchitectureShowcase";
import { ContactCTA } from "./components/ContactCTA";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("inicio");

  // Scroll listener for updating active navbar link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "competencias", "trayectoria", "ecosistema", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleContactClick = () => {
    setActiveSection("contacto");
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Deep Blue Mesh Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-1/3 left-[-100px] w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-[-100px] w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

        {/* Main Content */}
        <main className="flex-1 pt-16">
          <Hero onContactClick={handleContactClick} />
          <SkillsDashboard />
          <ExperienceTimeline />
          <CloudArchitectureShowcase />
          <ContactCTA />
        </main>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  );
}
