export const company = {
  name: "MN Academy",
  mark: "MN",
  positioning: "Creative & Technical Solutions",
  tagline: "Ideas Designed. Spaces Powered.",
  electricalTagline: "Empowering Lives Through Electricity",
  ceo: "Mezenzouh Marcphason",
  location: "Yaoundé, Cameroon",
  email: "mezenzouhmarcphason@gmail.com",
  phones: ["+237 676 868 767", "+237 679 435 406"],
  preferredContact: "WhatsApp" as const,
  foundedNote: "Operating professionally since 2023",
  about: {
    heading: "Built on Creativity. Grounded in Technical Skill.",
    body: [
      "MN Academy is a professional brand operating across Graphic Design and Electrical Services.",
      "Graphic Design has been a professional part of the brand since late 2023, while professional electrical work began in 2023 following technical education and practical apprenticeship.",
      "MN Academy combines creativity, technical knowledge and hands-on experience to serve businesses, institutions, individuals and organizations.",
      "The brand is driven by a passion for creating clean visual designs, delivering reliable electrical solutions and seeing clients satisfied with the final results.",
    ],
  },
  experience: {
    graphicDesign: {
      since: "Professional since late 2023",
      credentials: [
        "Graphic Design Certificate — Cherub Tech",
        "Graphic Design Certificate — Crystal Studios Academy",
      ],
      additional: [
        "Graphic Design training experience",
        "Brand development",
        "Visual identity development",
      ],
    },
    electrical: {
      practicalSince: "Practical experience since 2022",
      professionalSince: "Professional experience since 2023",
      education: [
        "Technical school education throughout secondary education",
        "CAP",
        "GCE",
        "Apprenticeship/training certificate",
        "Additional professional electrical training",
      ],
      training:
        "Practical training under experienced professionals through Julius Electrical Solution.",
      note: "MN Academy works with professional electricians with relevant certifications and practical experience.",
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
