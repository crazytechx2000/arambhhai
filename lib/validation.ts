import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Personal Portfolio",
  "Business Website",
  "School Website",
  "Small Business Website",
  "Landing Page",
  "Custom Website",
  "Website Redesign",
  "UI / Frontend Development",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under ₹15,000",
  "₹15,000 – ₹40,000",
  "₹40,000 – ₹1,00,000",
  "Above ₹1,00,000",
] as const;

export const TIMELINE_OPTIONS = [
  "No specific deadline",
  "Within 2 weeks",
  "Within a month",
  "1–3 months",
  "Flexible",
] as const;

/**
 * Shared contact form schema. Used by React Hook Form on the client
 * (via zodResolver) and re-validated on the server inside the API route —
 * client-side validation is never trusted alone.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your full name")
    .max(100, "Name is too long"),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20, "Phone number is too long")
    .regex(/^[0-9+\-()\s]+$/, "Please use numbers only"),
  service: z.enum(SERVICE_OPTIONS, {
    message: "Please select a service",
  }),
  budget: z.enum(BUDGET_OPTIONS).optional(),
  timeline: z.enum(TIMELINE_OPTIONS).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Please add a few details about your project")
    .max(2000, "Message is too long"),
  // Honeypot field — real users never see or fill this in.
  company: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
