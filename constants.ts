import { Project, Experience, Education, SkillCategory, Reference } from './types';

export const PERSONAL_INFO = {
  name: "OUEDRAOGO Alicia Lise Marion",
  shortName: "Alicia Lise",
  title: "Développeuse Full Stack | Fondatrice sociale | Future experte en stratégie digitale",
  location: "Settat, Maroc / Ouagadougou, Burkina Faso",
  email: "liseouedraogo19@gmail.com",
  email2: "ouedraogoalicia22@gmail.com",
  phone: "+212 06 07 68 13 22",
  phone2: "+226 54 79 35 12",
  social: {
    github: "https://github.com/Alicia-Ouedraogo",
    linkedin: "http://linkedin.com/in/alicia-lise-marion-ouedraogo-00aa81326",
    youtube: "https://youtube.com/",
    tiktok: "https://tiktok.com/"
  },
  bio: {
    short: "Jeune développeuse full stack passionnée par le numérique, l’innovation sociale et l’entrepreneuriat.",
    long: "Grâce à un parcours riche en science, tech et impact, je combine compétences techniques pointues et vision stratégique. Actuellement en Master 1 IA & Big Data, je m'investis dans la création de solutions digitales utiles (gestion de déchets, parc automobile) tout en dirigeant des initiatives sociales majeures au Burkina Faso.",
    values: ["Leadership", "Innovation Sociale", "Rigueur", "Partage", "Créativité"]
  }
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Développement Web & Mobile",
    skills: ["React", "Flutter", "PHP", "HTML/CSS", "JavaScript", "Node.js"]
  },
  {
    title: "Design & Outils",
    skills: ["Figma", "Adobe XD", "UI/UX Design", "VS Code", "Git/GitHub"]
  },
  {
    title: "Gestion & Stratégie",
    skills: ["Méthodes Agiles", "Gestion de projet", "Community Management", "Brand Management", "Stratégie Digitale"]
  },
  {
    title: "Data & Soft Skills",
    skills: ["Data Science (Bases)", "Modélisation", "Leadership", "Communication", "Innovation Sociale"]
  }
];

const GITHUB_REPO_URL = "https://github.com/Alicia-Ouedraogo?tab=repositories";

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Application Gestion Parc Automobiles",
    description: "Développée pour l'Agence Urbaine de Settat. Solution complète de gestion et suivi de maintenance des véhicules, incluant géolocalisation et alertes. Projet noté 18/20.",
    tags: ["Flutter", "Laravel/PHP", "Géolocalisation"],
    image: "https://picsum.photos/id/111/800/600",
    links: {
      repo: GITHUB_REPO_URL
    }
  },
  {
    id: "2",
    title: "REM Waste (Site de Réservation)",
    description: "Développement Front-End pour une entreprise au Royaume-Uni. Site de réservation de bennes via API, responsive design.",
    tags: ["React", "API REST", "Tailwind", "Freelance"],
    image: "https://picsum.photos/id/48/800/600",
    links: {
      repo: GITHUB_REPO_URL
    }
  },
  {
    id: "3",
    title: "Lise Group - Humanitaire",
    description: "Conception et développement du site web vitrine pour l'association humanitaire Lise Group, mettant en avant les actions sociales et appels aux dons.",
    tags: ["Web Design", "CMS", "Impact Social"],
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
    links: {
      repo: GITHUB_REPO_URL
    }
  },
  {
    id: "4",
    title: "Lips by Lise",
    description: "Site e-commerce dédié à la vente de produits cosmétiques. Gestion de catalogue, panier et interface client fluide.",
    tags: ["E-commerce", "Web Dev", "UX Design"],
    image: "https://images.unsplash.com/photo-1617325247661-675ab4b64ae8?q=80&w=800&auto=format&fit=crop",
    links: {
      repo: GITHUB_REPO_URL
    }
  },
  {
    id: "5",
    title: "Jeux Vidéo (Snake + Pokémon)",
    description: "Développement de jeux classiques pour renforcer la logique algorithmique et la manipulation du DOM/Canvas.",
    tags: ["JavaScript", "Canvas API", "Game Dev"],
    image: "https://picsum.photos/id/96/800/600",
    links: {
      repo: GITHUB_REPO_URL
    }
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Développeuse Front-End (Freelance)",
    company: "REM Waste (Royaume-Uni)",
    period: "Juillet 2025",
    description: "Développement d'un site de réservation de bennes via API. Travail en remote, respect des contraintes responsive et intégration API.",
    type: "work"
  },
  {
    id: "2",
    role: "Stagiaire Développeuse",
    company: "Agence Urbaine de Settat (Maroc)",
    period: "Avril - Juin 2025",
    description: "Conception et développement d'une application de gestion du parc automobile. Création d'interfaces web professionnelles. Projet validé avec excellence (18/20).",
    type: "work"
  },
  {
    id: "3",
    role: "Fondatrice & Directrice",
    company: "Lise Group (Burkina Faso)",
    period: "2022 - Présent",
    description: "Organisation de +25 activités humanitaires (dons, éducation, aide aux déplacés). Ateliers sur le leadership et l'engagement citoyen. Mise en réseau de jeunes leaders.",
    type: "leadership"
  },
  {
    id: "4",
    role: "Community Manager",
    company: "Le Demarcheur.com",
    period: "2022 - Présent",
    description: "Gestion de communauté, stratégies de visibilité et brand management.",
    type: "work"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master 1 Intelligence Artificielle et Big Data",
    school: "ITSUP (École d'Informatique)",
    period: "En cours",
    details: "Approfondissement en IA, traitement de données et stratégie décisionnelle."
  },
  {
    id: "2",
    degree: "Licence Dév. d'Applications Digitales",
    school: "ESRIM (Settat, Maroc)",
    period: "2024 - 2025",
    details: "Mention Très Bien. Formation solide en ingénierie logicielle et développement web/mobile."
  },
  {
    id: "3",
    degree: "CPGE (Classes Préparatoires)",
    school: "Université Scientifique du Burkina (MENAPLN)",
    period: "2020 - 2022",
    details: "Filière MP (Maths-Physique). Rigueur scientifique et capacité d'abstraction."
  },
  {
    id: "4",
    degree: "Baccalauréat Série D",
    school: "Complexe Scolaire Monseigneur André Dupont",
    period: "2020",
    details: "Mention Bien (15.46/20). Sciences de la vie et de la terre."
  }
];

export const REFERENCES: Reference[] = [
  {
    id: "1",
    name: "AIT SAID Mehdi",
    role: "Professeur ESRIM (Settat, Maroc)",
    phone: "+212 523 40 27 05"
  },
  {
    id: "2",
    name: "GUISSY Abdelaly",
    role: "Directeur ESRIM (Settat, Maroc)",
    phone: "+212 666 85 41 85"
  }
];