export type ServiceCategory = {
  id: string;
  division: "graphic-design" | "electrical";
  title: string;
  description: string;
  items: string[];
};

/** Flat service lists for division pages */
export const graphicDesignServiceList = [
  "Logo Design",
  "Brand Identity Design",
  "Flyer Design",
  "Social Media Design",
  "Promotional Design",
  "Music Cover Design",
  "Book Cover Design",
  "Concert & Event Designs",
  "Church Designs",
  "Business/Corporate Design",
  "Complete Brand Development",
  "Visual Identity Design",
] as const;

export const electricalServiceList = [
  "Electrical Installation",
  "Residential Wiring",
  "Commercial Wiring",
  "Electrical Piping & Copping",
  "Lighting Installation",
  "AC Installation",
  "CCTV Installation",
  "Electrical Troubleshooting",
  "Electrical Maintenance",
  "Residential Electrical Projects",
  "Commercial Electrical Projects",
] as const;

export const graphicDesignServices: ServiceCategory[] = [
  {
    id: "branding",
    division: "graphic-design",
    title: "Branding & Identity",
    description: "Marks, systems and visual identity for clear brand presence.",
    items: [
      "Logo Design",
      "Brand Identity Design",
      "Visual Identity Design",
      "Complete Brand Development",
      "Business/Corporate Design",
    ],
  },
  {
    id: "print-promotional",
    division: "graphic-design",
    title: "Print & Promotional",
    description: "Campaign visuals built for everyday visibility.",
    items: [
      "Flyer Design",
      "Promotional Design",
      "Concert & Event Designs",
      "Church Designs",
    ],
  },
  {
    id: "digital-social",
    division: "graphic-design",
    title: "Digital & Social",
    description: "Content-ready visuals for platforms and campaigns.",
    items: ["Social Media Design"],
  },
  {
    id: "covers",
    division: "graphic-design",
    title: "Covers",
    description: "Cover art for music and publications.",
    items: ["Music Cover Design", "Book Cover Design"],
  },
];

export const electricalServices: ServiceCategory[] = [
  {
    id: "installation",
    division: "electrical",
    title: "Installation",
    description: "Installation for homes, businesses and institutions.",
    items: [
      "Electrical Installation",
      "Lighting Installation",
      "AC Installation",
      "CCTV Installation",
    ],
  },
  {
    id: "wiring",
    division: "electrical",
    title: "Wiring & Infrastructure",
    description: "Safe residential and commercial wiring with clean finishing.",
    items: [
      "Residential Wiring",
      "Commercial Wiring",
      "Electrical Piping & Copping",
    ],
  },
  {
    id: "projects",
    division: "electrical",
    title: "Projects",
    description: "End-to-end residential and commercial electrical work.",
    items: [
      "Residential Electrical Projects",
      "Commercial Electrical Projects",
    ],
  },
  {
    id: "maintenance",
    division: "electrical",
    title: "Maintenance & Troubleshooting",
    description: "Diagnostics and upkeep for dependable systems.",
    items: ["Electrical Troubleshooting", "Electrical Maintenance"],
  },
];

export const contactServiceOptions = [
  "Graphic Design",
  "Logo / Brand Identity",
  "Flyer / Promotional Design",
  "Social Media Design",
  "Electrical Installation",
  "Residential Wiring",
  "Commercial Wiring",
  "Lighting Installation",
  "AC Installation",
  "CCTV Installation",
  "Electrical Troubleshooting",
  "Other",
] as const;

export const divisions = {
  graphicDesign: {
    id: "graphic-design" as const,
    label: "Graphic Design",
    eyebrow: "Creative",
    title: "Graphic Design",
    description: "Visual design and brand communication.",
    services: [...graphicDesignServiceList],
    cta: "Explore Graphic Design",
    href: "/graphic-design",
    portfolioHref: "/portfolio?category=graphic-design",
  },
  electrical: {
    id: "electrical" as const,
    label: "Electrical Services",
    eyebrow: "Technical",
    title: "Electrical Services",
    description: "Professional electrical and technical solutions.",
    tagline: "Empowering Lives Through Electricity",
    services: [...electricalServiceList],
    cta: "Explore Electrical Services",
    href: "/electrical",
    portfolioHref: "/portfolio?category=electrical",
  },
} as const;
