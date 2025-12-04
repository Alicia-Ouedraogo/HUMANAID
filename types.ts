export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: {
    demo?: string;
    repo?: string;
    pdf?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'leadership';
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Reference {
  id: string;
  name: string;
  role: string;
  phone: string;
}