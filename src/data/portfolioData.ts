import { SkillRadarData, MetricBarData, ExperienceItem, CloudServiceItem } from "../types";

export const PERSONAL_INFO = {
  name: "Luis Alberto Luzardo Pérez",
  shortName: "Luis Luzardo",
  title: "Desarrollador WebApp Dev_",
  subtitle: "Especialista en Arquitecturas Cloud, Firebase e Inteligencia Artificial",
  location: "Barranquilla, Colombia 🇨🇴",
  whatsapp: "323 699 2344",
  whatsappUrl: "https://wa.me/573236992344?text=Hola%20Luis%20Alberto,%20vi%20tu%20sitio%20web%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.",
  phone: "301 978 2076",
  phoneUrl: "tel:+573019782076",
  email: "devluisluzardo@gmail.com",
  emailUrl: "mailto:devluisluzardo@gmail.com",
  senaTitle: "Analista y Desarrollador de Sistemas de Información (ADSI)",
  senaInstitution: "SENA - Servicio Nacional de Aprendizaje (Colombia)",
  bio: "Desarrollador WebApp Dev_ con amplia experiencia en el diseño y despliegue de aplicaciones web interactivas, altamente escalables y con integración de Inteligencia Artificial. Dominio completo del ecosistema React + TypeScript, bases de datos en tiempo real con Firebase, pipelines de CI/CD automatizados en GitHub y soluciones avanzadas con Gemini AI Studio.",
  stats: [
    { label: "Años de Experiencia", value: "6+" },
    { label: "Proyectos Deployed", value: "35+" },
    { label: "Uptime Arquitectura", value: "99.9%" },
    { label: "Satisfacción Cliente", value: "100%" },
  ]
};

export const SKILLS_RADAR_DATA: SkillRadarData[] = [
  { skill: "React 19 & TS", score: 98, fullMark: 100 },
  { skill: "Firebase (BaaS)", score: 96, fullMark: 100 },
  { skill: "Gemini AI Studio", score: 92, fullMark: 100 },
  { skill: "GitHub CI/CD", score: 90, fullMark: 100 },
  { skill: "Tailwind CSS UI", score: 95, fullMark: 100 },
  { skill: "Cloud Architecture", score: 93, fullMark: 100 },
];

export const METRICS_BAR_DATA: MetricBarData[] = [
  { metric: "Despliegue CI/CD", valor: 95, unidad: "%", descripcion: "Automatización total de builds en GitHub Actions" },
  { metric: "Velocidad Carga SPA", valor: 98, unidad: "Lighthouse", descripcion: "Optimización de bundle, Vite y carga diferida" },
  { metric: "Tipado Strict TS", valor: 100, unidad: "%", descripcion: "Cero bugs en tiempo de compilación" },
  { metric: "Sincro Realtime DB", valor: 96, unidad: "%", descripcion: "Latencia sub-100ms con Firebase Firestore/Realtime" },
  { metric: "Eficiencia Prompt IA", valor: 92, unidad: "%", descripcion: "Respuestas precisas con Gemini AI Studio" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Dev_ WebApp & Cloud Solutions Architect",
    company: "Consultoría e Innovación Web",
    period: "2022 - Presente",
    location: "Barranquilla, Colombia (Remoto / On-site)",
    description: "Liderazgo en la arquitectura, desarrollo e integración de WebApps complejas para clientes corporativos y plataformas SaaS de alto rendimiento.",
    highlights: [
      "Diseño de arquitecturas frontend reactivas con React 19, TypeScript y Vite, logrando tiempos de interacción iniciales sub-segundo.",
      "Integración completa del ecosistema Firebase: Firestore NoSQL, Firebase Auth (OAuth + Passwordless), Realtime DB y Hosting en CDN global.",
      "Implementación de capacidades cognitivas con Gemini AI Studio (@google/genai SDK) para asistentes inteligentes y automatización de análisis de datos.",
      "Automatización de workflows de integración y despliegue continuo (CI/CD) mediante GitHub Actions hacia Firebase Hosting y Google Cloud Run."
    ],
    techStack: ["React 19", "TypeScript", "Firebase Firestore", "Firebase Auth", "Gemini AI Studio", "GitHub Actions", "Tailwind CSS"],
    category: "ai"
  },
  {
    id: "exp-2",
    role: "Desarrollador WebApp & Full-Stack Cloud",
    company: "Sistemas & Soluciones Digitales",
    period: "2019 - 2022",
    location: "Colombia",
    description: "Desarrollo de módulos interactivos, dashboards analíticos en tiempo real y microservicios transaccionales.",
    highlights: [
      "Construcción de dashboards analíticos utilizando Recharts y Tailwind CSS con alta densidad de datos sin degradación de renderizado.",
      "Configuración de pipelines de correo transaccional y notificaciones con Resend API y Firebase Messaging.",
      "Optimización de rendimiento en motores de búsqueda (SEO/PWA) y refactorización de código legado a TypeScript estricto."
    ],
    techStack: ["React", "TypeScript", "Firebase Realtime DB", "Resend API", "Recharts", "Tailwind CSS", "GitHub"],
    category: "webapp"
  },
  {
    id: "exp-3",
    role: "Analista y Desarrollador de Sistemas de Información",
    company: "Certificación SENA & Proyectos Iniciales",
    period: "2017 - 2019",
    location: "Barranquilla, Colombia",
    description: "Formación profesional intensiva y desarrollo de aplicaciones de gestión de bases de datos y software empresarial.",
    highlights: [
      "Titulado oficial del SENA (Servicio Nacional de Aprendizaje) en Análisis y Desarrollo de Sistemas de Información (ADSI).",
      "Modelado de bases de datos relacionales y NoSQL, desarrollo de APIs RESTful y maquetación de interfaces intuitivas."
    ],
    techStack: ["Análisis de Sistemas", "JavaScript", "SQL", "HTML5/CSS3", "Git"],
    category: "cloud"
  }
];

export const CLOUD_SERVICES: CloudServiceItem[] = [
  {
    id: "fb-firestore",
    name: "Firebase Firestore",
    type: "Firebase",
    iconName: "Database",
    description: "Base de datos NoSQL documental escalable con sincronización en tiempo real y persistencia offline.",
    keyFeatures: ["Indexación automática", "Consultas complejas NoSQL", "Reglas de seguridad avanzadas", "Sincronización multi-dispositivo"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "fb-auth",
    name: "Firebase Auth",
    type: "Firebase",
    iconName: "ShieldCheck",
    description: "Sistema de autenticación seguro de bajo mantenimiento compatible con OAuth y Tokens JWT.",
    keyFeatures: ["Google & Social Logins", "Magic Links / Email", "Manejo de sesiones JWT", "Security Rules integradas"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "fb-realtime",
    name: "Firebase Realtime DB",
    type: "Firebase",
    iconName: "Zap",
    description: "Base de datos alojada en la nube con formato JSON en tiempo real para baja latencia crítica.",
    keyFeatures: ["Latencia sub-100ms", "Presencia de usuarios online", "Sincronización de chats y logs", "Alta eficiencia de ancho de banda"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "fb-hosting",
    name: "Firebase Hosting",
    type: "Firebase",
    iconName: "Globe",
    description: "Alojamiento de grado de producción rápido y seguro para SPA con CDN global SSL automático.",
    keyFeatures: ["SSL gratuito y automático", "Edge CDN global", "Reversión de versiones (Rollbacks)", "Despliegues con un solo comando"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "fb-messaging",
    name: "Firebase Messaging & Resend",
    type: "Firebase",
    iconName: "Mail",
    description: "Infraestructura de notificaciones y correos transaccionales de alta tasa de entregabilidad.",
    keyFeatures: ["Notificaciones Push Web", "Integración Resend API", "Plantillas HTML responsivas", "Métricas de apertura y clics"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    id: "gh-cicd",
    name: "GitHub Repositories & CI/CD",
    type: "GitHub",
    iconName: "GitBranch",
    description: "Control de versiones empresarial con Workflows automatizados de compilación, testeo y despliegue.",
    keyFeatures: ["GitHub Actions Pipelines", "Deploy automático a Firebase", "Linter & Strict Typechecking", "Control de versiones GitFlow"],
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  },
  {
    id: "gemini-ai",
    name: "Gemini AI Studio (Cognitivo)",
    type: "Gemini AI",
    iconName: "Bot",
    description: "Plataforma de inteligencia artificial para sumar habilidades cognitivas de lenguaje natural a la WebApp.",
    keyFeatures: ["Modelos Gemini 3.6 Flash", "Agentes conversacionales", "Extracción de datos inteligente", "SDK @google/genai Server-side"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    id: "react-ts",
    name: "React 19 + TypeScript + Tailwind",
    type: "Frontend Core",
    iconName: "Code2",
    description: "Motor de interfaz con arquitectura por componentes, tipado estricto y diseño futurista Deep Blue Tech.",
    keyFeatures: ["Modo estricto TypeScript", "Vite Ultra-Fast Bundler", "Visualizaciones Recharts", "Diseño Deep Blue con Cyan Neón"],
    badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-400/30"
  }
];

export const SAMPLE_PROMPT_QUESTIONS = [
  "¿Cuál es el stack tecnológico de Luis Alberto?",
  "¿Cómo integra Luis la Inteligencia Artificial con Gemini en sus WebApps?",
  "¿Qué experiencia tiene Luis con el ecosistema de Firebase?",
  "¿Cuáles son los datos de contacto directos de Luis para contratación?",
  "¿Cuál es la titulación de Luis en el SENA y sus áreas de especialidad?"
];
