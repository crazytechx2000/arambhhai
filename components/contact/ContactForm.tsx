"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormValues,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";

const inputClasses =
  "w-full min-h-[48px] rounded-[var(--radius-sm)] border border-border bg-surface px-3.5 py-2.5 text-[15px] text-text placeholder:text-text-muted/60 transition-colors focus-visible:outline-none focus-visible:border-brand-primary focus-visible:ring-2 focus-visible:ring-brand-primary/15";

const labelClasses = "mb-1.5 block text-[14px] font-medium text-text";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("loading");
    setErrorMessage(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-md)] border border-border bg-surface p-8 text-center">
        <CheckCircle2 size={36} className="mx-auto text-brand-primary" />
        <h3 className="mt-4 text-[19px] font-semibold text-text">
          Thanks — your enquiry is in.
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-text-muted">
          We&apos;ve received your details and sent a confirmation to your email.
          We&apos;ll get back to you shortly.
        </p>
        <Button
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
      </div>

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1.5 text-[13px] text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClasses}
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1.5 text-[13px] text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            className={inputClasses}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1.5 text-[13px] text-red-600">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service
        </label>
        <select id="service" className={inputClasses} {...register("service")}>
          <option value="">Select a service</option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-1.5 text-[13px] text-red-600">{errors.service.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClasses}>
            Budget <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <select id="budget" className={inputClasses} {...register("budget")}>
            <option value="">Prefer not to say</option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className={labelClasses}>
            Timeline <span className="text-text-muted font-normal">(optional)</span>
          </label>
          <select id="timeline" className={inputClasses} {...register("timeline")}>
            <option value="">No preference</option>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={inputClasses}
          placeholder="Tell us what you'd like to build..."
          {...register("message")}
        />
        {errors.message && (
          <p className="mt-1.5 text-[13px] text-red-600">{errors.message.message}</p>
        )}
      </div>

      {status === "error" && errorMessage && (
        <div className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-red-200 bg-red-50 p-3.5 text-[14px] text-red-700">
          <AlertCircle size={18} className="mt-0.5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full h-14 rounded-[var(--radius-md)] bg-brand-primary px-8 text-[17px] font-bold text-white shadow-[0_8px_24px_-8px_rgba(0,114,255,0.45)] transition-all duration-200 hover:shadow-[0_14px_32px_-10px_rgba(0,114,255,0.55)] hover:brightness-110 active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 size={20} className="animate-spin" /> Sending...
          </span>
        ) : (
          "Send Project Enquiry"
        )}
      </button>
    </form>
  );
}
