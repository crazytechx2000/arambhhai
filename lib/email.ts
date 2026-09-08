import { Resend } from "resend";
import type { ContactFormValues } from "./validation";

const FROM_ADDRESS = "ArambhHai <team@arambhhai.me>";

// Instantiated lazily so a missing key doesn't crash the build —
// it only surfaces when the API route actually tries to send.
function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

async function sendEmail(
  resend: Resend,
  options: Parameters<Resend["emails"]["send"]>[0]
) {
  const { error } = await resend.emails.send(options);
  if (error) {
    throw new Error(`Resend rejected the email: ${error.message}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends the internal enquiry notification to ArambhHai's inbox.
 */
export async function sendEnquiryNotification(data: ContactFormValues) {
  const resend = getResendClient();
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL is not configured");
  }

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const rows: Array<[string, string | undefined]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Budget", data.budget],
    ["Timeline", data.timeline],
    ["Submitted", submittedAt],
  ];

  const rowsHtml = rows
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px;color:#5b6270;font-weight:600;">${label}</td><td style="padding:6px 12px;">${escapeHtml(
          String(value)
        )}</td></tr>`
    )
    .join("");

  await sendEmail(resend, {
    from: FROM_ADDRESS,
    to,
    replyTo: data.email,
    subject: "New Enquiry – ArambhHai",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#0072ff;">New Enquiry – ArambhHai</h2>
        <table style="border-collapse:collapse;width:100%;">${rowsHtml}</table>
        <p style="margin-top:16px;color:#5b6270;font-weight:600;">Message</p>
        <p style="white-space:pre-wrap;">${escapeHtml(data.message)}</p>
      </div>
    `,
  });
}

/**
 * Sends the automatic confirmation email to the customer.
 */
export async function sendCustomerConfirmation(data: ContactFormValues) {
  const resend = getResendClient();

  await sendEmail(resend, {
    from: FROM_ADDRESS,
    to: data.email,
    subject: "Thank you for contacting ArambhHai",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <h2 style="color:#0072ff;">Thanks for connecting with ArambhHai</h2>
        <p>Hi ${escapeHtml(data.name)},</p>
        <p>
          We've received your enquiry about a <strong>${escapeHtml(data.service)}
          </strong>. Our team is reviewing your message and will follow up with
          next steps.
        </p>
        <p style="color:#5b6270;">
          In the meantime, if you'd like to share anything else about your
          project, just reply directly to this email.
        </p>
        <p><a href="https://www.arambhhai.me">www.arambhhai.me</a></p>
        <p style="margin-top:24px;">— The ArambhHai Team</p>
      </div>
    `,
  });
}
