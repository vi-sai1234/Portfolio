
export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
