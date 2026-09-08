import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation";
import { sendEnquiryNotification, sendCustomerConfirmation } from "@/lib/email";

export const runtime = "nodejs";

// Simple in-memory rate limiter. Good enough to blunt casual abuse for a
// low-traffic marketing site without adding infrastructure; resets on
// redeploy/restart, which is an accepted trade-off for V1.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    // Honeypot: if filled, silently pretend success so bots don't learn
    // the field is being checked.
    if (parsed.data.company) {
      return NextResponse.json({ ok: true });
    }

    await sendEnquiryNotification(parsed.data);
    await sendCustomerConfirmation(parsed.data);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact-api] failed to process enquiry", error);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
