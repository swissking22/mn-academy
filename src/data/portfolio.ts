export type PortfolioCategory = "graphic-design" | "electrical";

export type PortfolioProject = {
  id: string;
  slug: string;
  title: string;
  category: PortfolioCategory;
  subcategory: string;
  client?: string;
  location?: string;
  year?: string;
  description: string;
  coverImage: string;
  images?: string[];
  video?: string;
  beforeImages?: string[];
  duringImages?: string[];
  afterImages?: string[];
  featured?: boolean;
  aspect?: "portrait" | "landscape" | "square" | "wide";
  review?: {
    clientName: string;
    clientPhoto?: string;
    rating: number;
    text: string;
  };
};

export const graphicSubcategories = [
  "All",
  "Flyers",
  "Logos",
  "Branding",
  "Covers",
  "Social Media",
  "Events",
  "Church",
] as const;

export const electricalSubcategories = [
  "All",
  "Wiring",
  "Installation",
  "Lighting",
  "Piping & Copping",
  "AC Installation",
  "CCTV",
  "Troubleshooting",
] as const;

/**
 * Replace these paths with official project photography when available.
 * Current assets live under /public/images/portfolio.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "gd-01",
    slug: "savore-brand-identity",
    title: "Savore Brand Identity",
    category: "graphic-design",
    subcategory: "Branding",
    client: "Savore",
    location: "Yaoundé",
    year: "2024",
    description:
      "A refined brand identity exploring mark, type and visual language for a contemporary food-focused brand.",
    coverImage: "/images/portfolio/graphic/branding-1.jpg",
    images: [
      "/images/portfolio/graphic/branding-1.jpg",
      "/images/portfolio/graphic/branding-2.jpg",
      "/images/portfolio/graphic/logo-1.jpg",
    ],
    featured: true,
    aspect: "portrait",
  },
  {
    id: "gd-02",
    slug: "laws-gadget-promotional",
    title: "LAWS Gadget Promotional Series",
    category: "graphic-design",
    subcategory: "Flyers",
    client: "LAWS Gadget",
    location: "Yaoundé",
    year: "2024",
    description:
      "Promotional design work developed for product visibility campaigns and retail communication.",
    coverImage: "/images/portfolio/graphic/flyer-1.jpg",
    images: [
      "/images/portfolio/graphic/flyer-1.jpg",
      "/images/portfolio/graphic/social-1.jpg",
    ],
    featured: true,
    aspect: "landscape",
  },
  {
    id: "gd-03",
    slug: "light-work-mission-materials",
    title: "Light Work Mission Visual Materials",
    category: "graphic-design",
    subcategory: "Church",
    client: "Light Work Mission International Boarding and College School",
    location: "Cameroon",
    year: "2024",
    description:
      "Visual communication materials supporting institutional messaging with clarity and dignity.",
    coverImage: "/images/portfolio/graphic/church-1.jpg",
    images: ["/images/portfolio/graphic/church-1.jpg"],
    featured: true,
    aspect: "square",
  },
  {
    id: "gd-04",
    slug: "mep-service-corporate",
    title: "MEP Service Corporate Design",
    category: "graphic-design",
    subcategory: "Branding",
    client: "MEP Service",
    location: "Yaoundé",
    year: "2025",
    description:
      "Corporate visual design focused on professional presentation and brand consistency.",
    coverImage: "/images/portfolio/graphic/corporate-1.jpg",
    images: [
      "/images/portfolio/graphic/corporate-1.jpg",
      "/images/portfolio/graphic/branding-2.jpg",
    ],
    featured: true,
    aspect: "wide",
  },
  {
    id: "gd-05",
    slug: "event-poster-series",
    title: "Event Poster Series",
    category: "graphic-design",
    subcategory: "Events",
    year: "2024",
    description:
      "A series of event posters balancing hierarchy, atmosphere and readable information design.",
    coverImage: "/images/portfolio/graphic/poster-1.jpg",
    images: ["/images/portfolio/graphic/poster-1.jpg"],
    aspect: "portrait",
  },
  {
    id: "gd-06",
    slug: "music-cover-design",
    title: "Music Cover Design",
    category: "graphic-design",
    subcategory: "Covers",
    year: "2024",
    description:
      "Cover artwork developed for music releases with strong composition and memorable visual tone.",
    coverImage: "/images/portfolio/graphic/music-1.jpg",
    images: ["/images/portfolio/graphic/music-1.jpg"],
    aspect: "square",
  },
  {
    id: "gd-07",
    slug: "social-campaign-set",
    title: "Social Campaign Set",
    category: "graphic-design",
    subcategory: "Social Media",
    year: "2025",
    description:
      "A coordinated social media design set built for consistency across posts and stories.",
    coverImage: "/images/portfolio/graphic/social-1.jpg",
    images: [
      "/images/portfolio/graphic/social-1.jpg",
      "/images/portfolio/graphic/flyer-1.jpg",
    ],
    aspect: "landscape",
  },
  {
    id: "gd-08",
    slug: "logo-mark-studies",
    title: "Logo Mark Studies",
    category: "graphic-design",
    subcategory: "Logos",
    year: "2024",
    description:
      "Exploratory logo marks and wordmarks developed through iterative composition and typography.",
    coverImage: "/images/portfolio/graphic/logo-1.jpg",
    images: ["/images/portfolio/graphic/logo-1.jpg"],
    aspect: "square",
  },
  {
    id: "el-01",
    slug: "residential-wiring-yaounde",
    title: "Residential Wiring Installation",
    category: "electrical",
    subcategory: "Wiring",
    location: "Yaoundé",
    year: "2024",
    description:
      "Residential wiring installation focused on safe routing, clean finishing and reliable power distribution.",
    coverImage: "/images/portfolio/electrical/wiring-1.jpg",
    images: ["/images/portfolio/electrical/wiring-1.jpg"],
    beforeImages: ["/images/portfolio/electrical/before-1.jpg"],
    duringImages: ["/images/portfolio/electrical/during-1.jpg"],
    afterImages: ["/images/portfolio/electrical/after-1.jpg"],
    featured: true,
    aspect: "landscape",
  },
  {
    id: "el-02",
    slug: "commercial-lighting-install",
    title: "Commercial Lighting Installation",
    category: "electrical",
    subcategory: "Lighting",
    client: "Emperor Communication & Construction Sahal",
    location: "Yaoundé",
    year: "2024",
    description:
      "Lighting installation for a commercial environment, balancing functionality with clean visual presentation.",
    coverImage: "/images/portfolio/electrical/lighting-1.jpg",
    images: ["/images/portfolio/electrical/lighting-1.jpg"],
    beforeImages: ["/images/portfolio/electrical/before-1.jpg"],
    duringImages: ["/images/portfolio/electrical/during-1.jpg"],
    afterImages: ["/images/portfolio/electrical/lighting-1.jpg"],
    featured: true,
    aspect: "wide",
  },
  {
    id: "el-03",
    slug: "cctv-system-setup",
    title: "CCTV System Setup",
    category: "electrical",
    subcategory: "CCTV",
    location: "Yaoundé",
    year: "2025",
    description:
      "CCTV installation planned for coverage, practical camera placement and dependable monitoring.",
    coverImage: "/images/portfolio/electrical/cctv-1.jpg",
    images: ["/images/portfolio/electrical/cctv-1.jpg"],
    duringImages: ["/images/portfolio/electrical/during-1.jpg"],
    afterImages: ["/images/portfolio/electrical/cctv-1.jpg"],
    featured: true,
    aspect: "landscape",
  },
  {
    id: "el-04",
    slug: "electrical-piping-copping",
    title: "Electrical Piping & Copping",
    category: "electrical",
    subcategory: "Piping & Copping",
    year: "2024",
    description:
      "Piping and copping work executed with attention to alignment, protection and finished presentation.",
    coverImage: "/images/portfolio/electrical/piping-1.jpg",
    images: ["/images/portfolio/electrical/piping-1.jpg"],
    duringImages: ["/images/portfolio/electrical/during-1.jpg"],
    afterImages: ["/images/portfolio/electrical/piping-1.jpg"],
    aspect: "portrait",
  },
  {
    id: "el-05",
    slug: "ac-installation-project",
    title: "AC Installation Project",
    category: "electrical",
    subcategory: "AC Installation",
    year: "2025",
    description:
      "Air conditioning installation with careful electrical preparation and neat equipment placement.",
    coverImage: "/images/portfolio/electrical/ac-1.jpg",
    images: ["/images/portfolio/electrical/ac-1.jpg"],
    duringImages: ["/images/portfolio/electrical/during-1.jpg"],
    afterImages: ["/images/portfolio/electrical/ac-1.jpg"],
    aspect: "landscape",
  },
  {
    id: "el-06",
    slug: "troubleshooting-maintenance",
    title: "Troubleshooting & Maintenance",
    category: "electrical",
    subcategory: "Troubleshooting",
    client: "Julius Electrical Solution",
    year: "2023",
    description:
      "Diagnostic and maintenance work addressing faults and restoring dependable electrical performance.",
    coverImage: "/images/portfolio/electrical/troubleshoot-1.jpg",
    images: ["/images/portfolio/electrical/troubleshoot-1.jpg"],
    beforeImages: ["/images/portfolio/electrical/before-1.jpg"],
    afterImages: ["/images/portfolio/electrical/after-1.jpg"],
    aspect: "square",
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return portfolioProjects.filter((project) => project.featured);
}

export function getProjectsByCategory(category?: PortfolioCategory | "all") {
  if (!category || category === "all") return portfolioProjects;
  return portfolioProjects.filter((project) => project.category === category);
}

export function filterProjects(
  category: PortfolioCategory | "all" = "all",
  subcategory = "All",
) {
  return getProjectsByCategory(category).filter((project) => {
    if (subcategory === "All") return true;
    return project.subcategory === subcategory;
  });
}
