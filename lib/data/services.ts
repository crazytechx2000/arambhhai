import type { LucideIcon } from "lucide-react";
import {
  UserRound,
  Building2,
  GraduationCap,
  Store,
  Rocket,
  Wand2,
  Code2,
  RefreshCw,
} from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "personal-portfolio",
    icon: UserRound,
    name: "Personal Portfolio",
    description:
      "A focused site that shows your skills and work clearly, built to make a strong first impression.",
  },
  {
    id: "business-website",
    icon: Building2,
    name: "Business Website",
    description:
      "A credible presence with clear service pages, so visitors know what you do and how to reach you.",
  },
  {
    id: "school-website",
    icon: GraduationCap,
    name: "School Website",
    description:
      "An informational site for admissions, programs, and updates — public-facing, not a management system.",
  },
  {
    id: "small-business-website",
    icon: Store,
    name: "Small Business Website",
    description:
      "A simple site for shops and local services that needs to load fast and be found on search and maps.",
  },
  {
    id: "landing-page",
    icon: Rocket,
    name: "Landing Page",
    description:
      "A single, focused page built around one goal — a launch, a campaign, or a specific offer.",
  },
  {
    id: "custom-website",
    icon: Wand2,
    name: "Custom Website",
    description:
      "A layout built entirely around your content and goals, not squeezed into a pre-made template.",
  },
  {
    id: "website-redesign",
    icon: RefreshCw,
    name: "Website Redesign",
    description:
      "A modern rebuild of an existing site — cleaner interface, better usability, fully responsive.",
  },
  {
    id: "ui-frontend-development",
    icon: Code2,
    name: "UI / Frontend Development",
    description:
      "Interface and frontend work on an existing product — pages, components, and interactions built to spec.",
  },
];
