import React, { useState } from "react";
import { FileDown, ShieldCheck, CheckCircle2, X, Printer, UserCheck, Sparkles, Building2, Calendar, Mail, Phone, MapPin, Award } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCES, SKILLS_RADAR_DATA } from "../data/portfolioData";

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  // Function to build full printable HTML document for PDF export
  const buildCVHtml = () => {
    return `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>CV_Luis_Alberto_Luzardo_Perez_WebApp_Dev.pdf</title>
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          body {
            font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #0f172a;
            background-color: #ffffff;
            line-height: 1.5;
            margin: 0;
            padding: 0;
            font-size: 11pt;
          }
          .header {
            border-bottom: 3px solid #ea580c;
            padding-bottom: 12px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          .title-name {
            font-size: 22pt;
            font-weight: 800;
            color: #0f172a;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .subtitle {
            font-size: 12pt;
            font-weight: 700;
            color: #ea580c;
            margin-top: 2px;
          }
          .contact-bar {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 8px;
            font-size: 9.5pt;
            color: #334155;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .sena-badge {
            background-color: #fff7ed;
            border: 1px solid #fdba74;
            padding: 6px 12px;
            border-radius: 6px;
            margin-top: 10px;
            font-size: 9pt;
            color: #c2410c;
            font-weight: 600;
          }
          .section-title {
            font-size: 13pt;
            font-weight: 800;
            color: #0f172a;
            border-bottom: 2px solid #cbd5e1;
            padding-bottom: 4px;
            margin-top: 18px;
            margin-bottom: 10px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .summary-box {
            background-color: #f8fafc;
            border-left: 4px solid #ea580c;
            padding: 10px 14px;
            font-size: 10pt;
            color: #334155;
            margin-bottom: 14px;
            border-radius: 0 6px 6px 0;
          }
          .exp-item {
            margin-bottom: 14px;
          }
          .exp-header {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            font-size: 11pt;
            color: #0f172a;
          }
          .exp-company {
            color: #c2410c;
            font-weight: 600;
            font-size: 10pt;
            margin-bottom: 4px;
          }
          .exp-bullets {
            margin: 4px 0 0 16px;
            padding: 0;
            font-size: 9.5pt;
            color: #334155;
          }
          .exp-bullets li {
            margin-bottom: 3px;
          }
          .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
            margin-top: 6px;
          }
          .tag {
            background-color: #f1f5f9;
            border: 1px solid #cbd5e1;
            color: #0f172a;
            font-size: 8pt;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin-top: 8px;
          }
          .skill-card {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            padding: 8px 12px;
            border-radius: 6px;
          }
          .skill-name {
            font-weight: 700;
            font-size: 9.5pt;
            color: #0f172a;
          }
          .footer-note {
            margin-top: 24px;
            text-align: center;
            font-size: 8.5pt;
            color: #64748b;
            border-top: 1px solid #e2e8f0;
            padding-top: 8px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1 class="title-name">${PERSONAL_INFO.name}</h1>
            <div class="subtitle">${PERSONAL_INFO.title}</div>
            <div class="contact-bar">
              <span class="contact-item"><strong>📍 Location:</strong> ${PERSONAL_INFO.location}</span>
              <span class="contact-item"><strong>📱 Phone:</strong> ${PERSONAL_INFO.phone}</span>
              <span class="contact-item"><strong>💬 WhatsApp:</strong> ${PERSONAL_INFO.whatsapp}</span>
              <span class="contact-item"><strong>✉️ Email:</strong> ${PERSONAL_INFO.email}</span>
            </div>
            <div class="sena-badge">
              🎓 Titulación Oficial SENA: ${PERSONAL_INFO.senaTitle} (${PERSONAL_INFO.senaInstitution})
            </div>
          </div>
        </div>

        <div class="section-title">Perfil Profesional</div>
        <div class="summary-box">
          ${PERSONAL_INFO.bio}
        </div>

        <div class="section-title">Competencias Clave & Stack Principal</div>
        <div class="skills-grid">
          ${SKILLS_RADAR_DATA.map(
            (s) => `
            <div class="skill-card">
              <div class="skill-name">${s.skill}</div>
              <div style="font-size: 8.5pt; color: #475569;">Nivel de Dominio: ${s.score}% (Avanzado)</div>
            </div>
          `
          ).join("")}
        </div>

        <div class="section-title">Trayectoria Profesional & Proyectos Destacados</div>
        ${EXPERIENCES.map(
          (exp) => `
          <div class="exp-item">
            <div class="exp-header">
              <span>${exp.role}</span>
              <span>${exp.period}</span>
            </div>
            <div class="exp-company">${exp.company} — ${exp.location}</div>
            <ul class="exp-bullets">
              ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
            </ul>
            <div class="tags">
              ${exp.techStack.map((t) => `<span class="tag">${t}</span>`).join("")}
            </div>
          </div>
        `
        ).join("")}

        <div class="section-title">Formación Académica & Certificaciones</div>
        <div class="exp-item">
          <div class="exp-header">
            <span>${PERSONAL_INFO.senaTitle}</span>
            <span>2017 - 2019</span>
          </div>
          <div class="exp-company">${PERSONAL_INFO.senaInstitution}</div>
          <div style="font-size: 9.5pt; color: #334155;">
            Título oficial acreditado en diseño de arquitectura de software, modelado de bases de datos, desarrollo de WebApps y gestión del ciclo de vida de desarrollo de software.
          </div>
        </div>

        <div class="footer-note">
          Hoja de Vida de Luis Alberto Luzardo Pérez • Generada automáticamente desde el Portafolio WebApp Interactivo
        </div>
      </body>
      </html>
    `;
  };

  const handleDownloadPDF = () => {
    setIsGenerating(true);

    try {
      const cvHtmlContent = buildCVHtml();
      
      // Create a Blob with HTML/Print PDF content
      const blob = new Blob([cvHtmlContent], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      
      // Create temporary download link
      const a = document.createElement("a");
      a.href = url;
      a.download = "Hoja_de_Vida_Luis_Alberto_Luzardo_WebApp_Dev.html";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 4000);
    } catch (err) {
      console.error("Error al descargar CV:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePrintPDF = () => {
    const cvHtmlContent = buildCVHtml();
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(cvHtmlContent);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 300);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Box */}
      <div 
        className="relative w-full max-w-lg bg-slate-900 border-2 border-orange-500/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_40px_rgba(249,115,22,0.3)] space-y-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          title="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-amber-300 text-xs font-semibold">
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Verificación Directa de Reclutador</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100">
            Descargar Hoja de Vida (CV PDF)
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Verifique la información del perfil oficial de <strong className="text-amber-300">Luis Alberto Luzardo Pérez</strong> para generar y descargar su CV completo.
          </p>
        </div>

        {/* Candidate Verification Card */}
        <div className="p-4 rounded-xl bg-slate-950/90 border border-slate-800 space-y-3 font-sans text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400 font-medium">Candidato:</span>
            <span className="font-bold text-slate-100">{PERSONAL_INFO.name}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400 font-medium">Cargo / Especialización:</span>
            <span className="font-semibold text-amber-400">{PERSONAL_INFO.title}</span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400 font-medium">Acreditación SENA:</span>
            <span className="font-semibold text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
              <span>Titulado ADSI Oficial</span>
            </span>
          </div>

          <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
            <span className="text-slate-400 font-medium">Teléfono / WhatsApp:</span>
            <span className="font-semibold text-slate-200">{PERSONAL_INFO.whatsapp}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-slate-400 font-medium">Formato de Salida:</span>
            <span className="px-2 py-0.5 rounded bg-orange-950/60 border border-orange-500/30 text-amber-300 text-xs font-mono font-bold">
              PDF / Impresión Estructurada
            </span>
          </div>
        </div>

        {/* Security & Non-blocking notice */}
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-start space-x-2.5 text-xs text-emerald-300">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong>Verificación segura:</strong> Este diálogo React interactúa directamente con su navegador sin bloqueos de ventanas emergentes (pop-ups).
          </span>
        </div>

        {/* Success Alert */}
        {downloadSuccess && (
          <div className="p-3 rounded-lg bg-amber-500/15 border border-amber-500/40 text-amber-200 text-xs font-semibold flex items-center space-x-2 animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>¡Hoja de Vida procesada exitosamente! Guarde o imprima su archivo en PDF.</span>
          </div>
        )}

        {/* Actions Buttons */}
        <div className="space-y-3 pt-1">
          {/* Main Download Button */}
          <button
            onClick={handlePrintPDF}
            disabled={isGenerating}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 hover:from-red-600 hover:to-amber-300 text-slate-950 font-extrabold text-sm sm:text-base transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50"
          >
            <Printer className="w-5 h-5 text-slate-950" />
            <span>Imprimir / Guardar como PDF Completo</span>
          </button>

          {/* Secondary Download Document Button */}
          <button
            onClick={handleDownloadPDF}
            disabled={isGenerating}
            className="w-full py-3 px-5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-orange-500/40 hover:border-orange-400 font-bold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-amber-400" />
            <span>Descargar Archivo Documento (HTML/PDF)</span>
          </button>

          {/* Cancel button */}
          <button
            onClick={onClose}
            className="w-full py-2 text-center text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            Cancelar y Volver al Portafolio
          </button>
        </div>

      </div>
    </div>
  );
};
