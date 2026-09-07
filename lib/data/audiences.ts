import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Palette,
  Building2,
  Store,
  Rocket,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

export interface Audience {
  label: string;
  icon: LucideIcon;
}

export const audiences: Audience[] = [
  { label: "Professionals", icon: Briefcase },
  { label: "Freelancers & Creators", icon: Palette },
  { label: "Small Businesses", icon: Store },
  { label: "Local Shops", icon: Building2 },
  { label: "Startups", icon: Rocket },
  { label: "Schools", icon: GraduationCap },
  { label: "Consultants", icon: Users },
  { label: "Personal Brands", icon: Sparkles },
];
