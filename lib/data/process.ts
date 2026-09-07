export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discuss",
    description:
      "We understand your business, goals, and what the website needs to achieve.",
  },
  {
    step: "02",
    title: "Plan",
    description:
      "We define the structure, pages, content, and overall visual direction.",
  },
  {
    step: "03",
    title: "Design",
    description:
      "We design the interface and full website experience for mobile and desktop.",
  },
  {
    step: "04",
    title: "Develop",
    description:
      "We build the responsive website using modern, well-tested technologies.",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "We test, optimize, and deploy the site — and stay reachable after launch.",
  },
];
