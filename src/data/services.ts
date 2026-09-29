export type ServiceCategory = {
  id: string;
  division: "graphic-design" | "electrical";
  title: string;
  description: string;
  items: string[];
};

export const graphicDesignServices: ServiceCategory[] = [
  {
    id: "branding",
    division: "graphic-design",
    title: "Branding",
    description: "Identity systems that give businesses a clear visual voice.",
    items: ["Logo Design", "Brand Identity", "Complete Brand Development", "Corporate Design"],
  },
  {
    id: "print-promotional",
    division: "graphic-design",
    title: "Print & Promotional",
    description: "Print-ready designs built for campaigns and everyday visibility.",
    items: ["Flyers", "Promotional Design", "Event Designs", "Church Designs"],
  },
  {
    id: "digital-social",
    division: "graphic-design",
    title: "Digital & Social",
    description: "Content-ready visuals for platforms and digital communication.",
    items: ["Social Media Design"],
  },
  {
    id: "events-publications",
    division: "graphic-design",
    title: "Events & Publications",
    description: "Cover art and editorial design for music, books and events.",
    items: ["Music Covers", "Book Covers"],
  },
];

export const electricalServices: ServiceCategory[] = [
  {
    id: "installation",
    division: "electrical",
    title: "Installation",
    description: "Professional installation for homes, businesses and institutions.",
    items: ["Electrical Installation", "Lighting Installation", "AC Installation"],
  },
  {
    id: "wiring",
    division: "electrical",
    title: "Wiring",
    description: "Safe residential and commercial wiring with clean finishing.",
    items: ["Residential Wiring", "Commercial Wiring", "Electrical Piping & Copping"],
  },
  {
    id: "security-systems",
    division: "electrical",
    title: "Security & Systems",
    description: "Surveillance and system work that supports safer spaces.",
    items: ["CCTV Installation"],
  },
  {
    id: "maintenance",
    division: "electrical",
    title: "Maintenance & Troubleshooting",
    description: "Diagnostics and maintenance to keep systems running reliably.",
    items: ["Troubleshooting", "Maintenance"],
  },
];

export const contactServiceOptions = [
  "Graphic Design",
  "Branding",
  "Flyer / Promotional Design",
  "Social Media Design",
  "Electrical Installation",
  "Residential Wiring",
  "Commercial Wiring",
  "Lighting",
  "AC Installation",
  "CCTV",
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
    services: [
      "Logo Design",
      "Brand Identity",
      "Flyers",
      "Social Media Design",
      "Promotional Design",
      "Music Covers",
      "Book Covers",
      "Event Designs",
      "Church Designs",
      "Corporate Design",
      "Complete Brand Development",
    ],
    cta: "Explore Graphic Design",
    href: "/portfolio?category=graphic-design",
  },
  electrical: {
    id: "electrical" as const,
    label: "Electrical",
    eyebrow: "Technical",
    title: "Electrical",
    description: "Professional electrical and technical solutions.",
    tagline: "Empowering Lives Through Electricity",
    services: [
      "Electrical Installation",
      "Residential Wiring",
      "Commercial Wiring",
      "Electrical Piping & Copping",
      "Lighting Installation",
      "AC Installation",
      "CCTV Installation",
      "Troubleshooting",
      "Maintenance",
    ],
    cta: "Explore Electrical",
    href: "/portfolio?category=electrical",
  },
} as const;
