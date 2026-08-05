import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side Gemini AI setup
  let ai: GoogleGenAI | null = null;
  if (process.env.GEMINI_API_KEY) {
    ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }

  // System Prompt for Luis Alberto Luzardo Pérez AI Twin
  const LUIS_SYSTEM_PROMPT = `Tu nombre es "Luis AI", el asistente virtual inteligente e interactivo de Luis Alberto Luzardo Pérez.
Eres un Desarrollador WebApp Dev_, Arquitecto Cloud y Especialista en Inteligencia Artificial y Firebase.

Información clave de Luis Alberto Luzardo Pérez:
- Rol: Desarrollador WebApp Dev_ | Especialista en Arquitecturas Cloud e IA.
- Ubicación: Barranquilla, Colombia 🇨🇴.
- Teléfono / WhatsApp: +57 323 699 2344 (WhatsApp prioritario).
- Celular: +57 301 978 2076.
- Correo electrónico: devluisluzardo@gmail.com.
- Formación & Titulación Formal: Egresado del SENA (Servicio Nacional de Aprendizaje - Colombia) en Análisis y Desarrollo de Sistemas de Información.

Stack Tecnológico Principal:
1. Frontend: React 19, TypeScript (StrictMode), Tailwind CSS, Vite, Motion, Recharts.
2. Firebase Ecosystem: Firestore Database, Firebase Authentication, Firebase Realtime Database, Firebase Hosting, Firebase Cloud Messaging, Resend Email API.
3. CI/CD & DevOps: GitHub Actions, GitHub Pipelines, Automated Deployments, Docker, Cloud Run.
4. IA & Cognitive Services: Gemini AI Studio, @google/genai SDK, Prompt Engineering, Integración de LLMs en WebApps.

Estilo de respuesta:
- Responde siempre de manera profesional, técnica pero cercana, entusiasta y ejecutiva en español.
- Enfatiza la disponibilidad inmediata para proyectos de alto rendimiento, consultorías cloud/IA o contrataciones senior.
- Mantén las respuestas claras, enfocadas y bien estructuradas con formato markdown limpio.`;

  // API endpoint for AI Virtual Twin Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== "string") {
        return res.status(400).json({ error: "El mensaje es requerido." });
      }

      if (ai) {
        // Format history for chat
        const formattedHistory = Array.isArray(history)
          ? history.map((item: { sender: string; text: string }) => ({
              role: item.sender === "user" ? "user" : "model",
              parts: [{ text: item.text }],
            }))
          : [];

        const chat = ai.chats.create({
          model: "gemini-3.6-flash",
          config: {
            systemInstruction: LUIS_SYSTEM_PROMPT,
            temperature: 0.7,
          },
          history: formattedHistory,
        });

        const response = await chat.sendMessage({ message });
        const textResponse = response.text || "No se pudo obtener respuesta del modelo.";

        return res.json({ reply: textResponse });
      } else {
        // Fallback structured response if GEMINI_API_KEY is not defined
        const lowerMsg = message.toLowerCase();
        let fallbackText = "¡Hola! Soy Luis AI, el gemelo digital de Luis Alberto Luzardo Pérez. Actualmente el servidor está operando en modo offline demostrativo.";

        if (lowerMsg.includes("contacto") || lowerMsg.includes("whatsapp") || lowerMsg.includes("correo") || lowerMsg.includes("telefono")) {
          fallbackText = "Puedes contactar a Luis Alberto directamente a través de:\n- **WhatsApp (Prioritario):** +57 323 699 2344\n- **Celular:** +57 301 978 2076\n- **Correo:** devluisluzardo@gmail.com\n- **Ubicación:** Barranquilla, Colombia.";
        } else if (lowerMsg.includes("sena") || lowerMsg.includes("estudios") || lowerMsg.includes("titulacion")) {
          fallbackText = "Luis Alberto es graduado del **SENA (Servicio Nacional de Aprendizaje)** como Analista y Desarrollador de Sistemas de Información, respaldando su sólida trayectoria técnica con certificación oficial.";
        } else if (lowerMsg.includes("stack") || lowerMsg.includes("tecnologia") || lowerMsg.includes("firebase") || lowerMsg.includes("react")) {
          fallbackText = "El Stack principal de Luis abarca:\n- **Frontend:** React + TypeScript + Tailwind CSS\n- **BaaS / Cloud:** Firebase (Firestore, Auth, Realtime, Hosting, FCM)\n- **IA & Backend:** Gemini AI Studio + Node.js / Express\n- **CI/CD:** GitHub Pipelines y desplegados automatizados.";
        } else {
          fallbackText = `Gracias por tu mensaje. Luis Alberto está disponible para proyectos WebApp Senior, Arquitectura Cloud e Integración de IA. Contáctalo vía WhatsApp al 323 699 2344 o al correo devluisluzardo@gmail.com.`;
        }

        return res.json({ reply: fallbackText });
      }
    } catch (error: any) {
      console.error("Error en /api/chat:", error);
      return res.status(500).json({
        error: "Ocurrió un error al procesar tu solicitud con la IA.",
        details: error?.message || "Unknown error",
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", app: "Luis Luzardo WebApp Senior Portfolio" });
  });

  // Vite middleware in dev, static files in prod
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true, hmr: false },
      appType: "spa",
    });
    app.use(vite.middlewares);

    app.use("*", async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e: any) {
        if (vite) vite.ssrFixStacktrace(e);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server executing on http://localhost:${PORT}`);
  });
}

startServer();
