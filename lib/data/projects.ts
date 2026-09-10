export interface Project {
  id: string;
  title: string;
  category: "Personal Portfolio" | "Business" | "Education" | "Landing Page" | "Small Business";
  description: string;
  image?: string;
  liveUrl?: string;
  tech?: string;
  isConcept: boolean; // true = demo/concept project, not a paid client engagement
}

// NOTE: Replace with real client projects as they become available.
// Every entry here is explicitly labeled as a concept project in the UI —
// never presented as paid client work.
export const projects: Project[] = [
  {
    id: "concept-studio-portfolio",
    title: "Adarsh Shukla Portfolio",
    category: "Personal Portfolio",
    description:
      "A minimal portfolio concept for an independent designer, built around large project imagery.",
    image: "https://res.cloudinary.com/usxchg35/image/upload/v1789054580/Screenshot_2026-09-10_201754.png",
    liveUrl: "https://adarshshukla0001.vercel.app/",
    isConcept: true,
  },
  {
    id: "concept-northview-consulting",
    title: "Northview Consulting",
    category: "Business",
    description:
      "A concept business site for a consulting firm, focused on credibility and a clear enquiry path.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=95",
    liveUrl: "",
    isConcept: true,
  },
  {
    id: "concept-greenfield-school",
    title: "Greenfield School",
    category: "Education",
    description:
      "A concept promotional site for a school — admissions info, programs, and campus updates.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=95",
    liveUrl: "",
    isConcept: true,
  },
  {
    id: "concept-launch-page",
    title: "Product Launch Page",
    category: "Landing Page",
    description:
      "A focused single-page concept built to convert traffic from a single marketing campaign.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=95",
    liveUrl: "",
    isConcept: true,
  },
  {
    id: "concept-corner-cafe",
    title: "Corner Café",
    category: "Small Business",
    description:
      "A concept site for a local café — menu, hours, and location front and center.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=95",
    liveUrl: "",
    isConcept: true,
  },
];
