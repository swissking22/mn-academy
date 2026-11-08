export const company = {
  name: "MN Academy",
  mark: "MN",
  positioning: "Creative & Technical Solutions",
  tagline: "Ideas Designed. Spaces Powered.",
  electricalTagline: "Empowering Lives Through Electricity",
  ceo: {
    name: "Mezenzouh Marcphason",
    title: "Chief Executive Officer (CEO)",
    portrait: undefined as string | undefined,
    summary:
      "Mezenzouh Marcphason leads MN Academy with a clear focus on professional delivery across Graphic Design and Electrical Services — combining creative direction, technical understanding and client-centred service.",
  },
  location: "Yaoundé, Cameroon",
  email: "mezenzouhmarcphason@gmail.com",
  phones: ["+237 676 868 767", "+237 679 435 406"],
  preferredContact: "WhatsApp" as const,
  about: {
    heading: "Two professional areas. One standard of delivery.",
    body: [
      "MN Academy is a professional company providing creative and technical solutions through Graphic Design and Electrical Services.",
      "Graphic Design has been a professional part of the brand since late 2023. Electrical Services follow technical education and practical training beginning in 2022, with professional electrical work since 2023.",
      "The company combines creativity, technical knowledge, practical experience, professional service and client satisfaction — serving businesses, institutions, individuals and organizations.",
    ],
    pillars: [
      "Creativity",
      "Technical knowledge",
      "Practical experience",
      "Professional service",
      "Client satisfaction",
    ],
  },
  experience: {
    graphicDesign: {
      since: "Professional work since late 2023",
      credentials: [
        "Graphic Design Certificate — Cherub Tech",
        "Graphic Design Certificate — Crystal Studios Academy",
      ],
      additional: [
        "Brand development",
        "Visual identity development",
      ],
    },
    electrical: {
      trainingSince: "Electrical practice and training beginning in 2022",
      professionalSince: "Professional electrical work since 2023",
      education: [
        "Technical-school background",
        "CAP",
        "GCE",
        "Electrical apprenticeship / training",
        "Practical training under Julius Electrical Solution",
      ],
      note: "MN Academy delivers electrical work through trained practitioners with relevant certifications and practical experience. Titles such as Electrical Engineer are used only when specifically supported by the relevant qualification.",
    },
  },
  clients: [
    "Emperor Communication & Construction Sahal",
    "Light Work Mission International Boarding and College School",
    "Julius Electrical Solution",
    "Savore",
    "LAWS Gadget",
    "MEP Service",
    "MN Academy",
  ],
  social: [] as { label: string; href: string }[],
  siteUrl: "https://mnacademy.cm",
} as const;

export type Company = typeof company;
