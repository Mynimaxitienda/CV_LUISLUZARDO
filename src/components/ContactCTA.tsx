import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { MessageSquare, Phone, Mail, MapPin, CheckCircle, Copy, Send, Sparkles, Clock, Globe } from "lucide-react";

export const ContactCTA: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    contacto: "",
    mensaje: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombre || !formData.mensaje) return;

    // Construct WhatsApp pre-filled message
    const waText = encodeURIComponent(
      `Hola Luis Alberto, me llamo ${formData.nombre} (${formData.contacto}).\n\n${formData.mensaje}`
    );
    window.open(`https://wa.me/573236992344?text=${waText}`, "_blank");

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ nombre: "", contacto: "", mensaje: "" });
    }, 4000);
  };

  return (
    <section id="contacto" className="py-16 md:py-24 relative bg-slate-950/90 border-t border-orange-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-400/30 text-amber-300 text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.2)]">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Disponibilidad Inmediata • Proyectos Dev_</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            ¿Listo para Impulsar tu WebApp o Solución Cloud/IA?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Ponte en contacto directo con Luis Alberto Luzardo Pérez a través de WhatsApp, llamada o correo. Respuestas en tiempo récord.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards & Glow Buttons */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* WhatsApp High Impact Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-orange-950/30 border border-orange-500/40 shadow-[0_0_25px_rgba(249,115,22,0.2)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-3 rounded-xl bg-orange-500/15 border border-orange-400/30 text-amber-400">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Canal Prioritario</div>
                    <h3 className="text-xl font-bold text-slate-100">WhatsApp Directo</h3>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  Respuesta Inmediata
                </span>
              </div>

              <p className="text-slate-300 text-sm">
                Comunícate instantáneamente al número principal para consultar disponibilidad, requerimientos de proyectos o cotizaciones.
              </p>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 hover:from-red-600 hover:to-amber-300 text-slate-950 font-extrabold text-base transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:shadow-[0_0_30px_rgba(249,115,22,0.8)] flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5 text-slate-950" />
                <span>Iniciar Chat WhatsApp (+57 323 699 2344)</span>
              </a>
            </div>

            {/* Direct Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Phone className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">Celular Directo</span>
                </div>
                <div className="text-lg font-bold text-slate-100">{PERSONAL_INFO.phone}</div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.phoneUrl}
                    className="flex-1 py-2 px-3 rounded-lg bg-orange-950/50 hover:bg-orange-900/60 text-amber-300 text-xs font-bold text-center border border-orange-500/30 transition-all"
                  >
                    Llamar
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-orange-500/30 text-slate-300 text-xs"
                    title="Copiar número"
                  >
                    {copiedPhone ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center space-x-2 text-amber-400">
                  <Mail className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase">Correo Oficial</span>
                </div>
                <div className="text-sm font-bold text-slate-100 truncate">{PERSONAL_INFO.email}</div>
                <div className="flex items-center gap-2">
                  <a
                    href={PERSONAL_INFO.emailUrl}
                    className="flex-1 py-2 px-3 rounded-lg bg-orange-950/50 hover:bg-orange-900/60 text-amber-300 text-xs font-bold text-center border border-orange-500/30 transition-all truncate"
                  >
                    Redactar Correo
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-orange-500/30 text-slate-300 text-xs shrink-0"
                    title="Copiar correo"
                  >
                    {copiedEmail ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

            </div>

            {/* Location & Timezone Card */}
            <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Ubicación: <strong>Barranquilla, Colombia (GMT-5)</strong></span>
              </div>
              <span className="text-emerald-400 font-medium">Trabajo Remoto / On-site</span>
            </div>

          </div>

          {/* Quick Pre-filled Message Generator Form */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-orange-950/50 rounded-2xl p-6 shadow-2xl backdrop-blur-md space-y-4">
            <div className="pb-3 border-b border-slate-800">
              <h3 className="text-xl font-bold text-slate-100 flex items-center space-x-2">
                <Send className="w-5 h-5 text-amber-400" />
                <span>Enviar Mensaje de Proyecto</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Completa tus datos para estructurar un mensaje formateado y enviarlo automáticamente a su WhatsApp.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <div className="font-bold text-base">¡Mensaje Preparado!</div>
                <p className="text-xs text-emerald-200">
                  Se ha redirigido la conversación a WhatsApp con tus datos ingresados.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Tu Nombre / Empresa *</label>
                  <input
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Ej. Carlos Mendoza - Tech Lead"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Teléfono o Email de Contacto</label>
                  <input
                    type="text"
                    value={formData.contacto}
                    onChange={(e) => setFormData({ ...formData, contacto: e.target.value })}
                    placeholder="Ej. +57 300 000 0000 o email@empresa.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Detalle del Proyecto / Requerimiento *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Describe brevemente la WebApp, integración con Firebase, modelo de Gemini o consultoría que requieres..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl px-4 py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-amber-400 hover:from-red-600 hover:to-amber-300 text-slate-950 font-extrabold transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-slate-950" />
                  <span>Enviar Consulta a WhatsApp (+57 323 699 2344)</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
