export interface SkillRadarData {
  skill: string;
  score: number;
  fullMark: number;
}

export interface MetricBarData {
  metric: string;
  valor: number;
  unidad: string;
  descripcion: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: "webapp" | "cloud" | "ai" | "fullstack";
}

export interface CloudServiceItem {
  id: string;
  name: string;
  type: "Firebase" | "GitHub" | "Gemini AI" | "Frontend Core";
  iconName: string;
  description: string;
  keyFeatures: string[];
  badgeColor: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: string;
}
