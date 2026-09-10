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
      <div style="margin:0;padding:32px 16px;background:#f4f7f8;font-family:Arial,Helvetica,sans-serif;color:#17232b;">
        <table role="presentation" style="width:100%;max-width:600px;margin:0 auto;border-collapse:collapse;">
          <tr>
            <td style="padding:0 0 18px;text-align:center;">
              <img src="https://www.arambhhai.me/icon.svg" width="54" height="54" alt="ArambhHai logo" style="display:inline-block;border:0;outline:none;" />
            </td>
          </tr>
          <tr>
            <td style="padding:0;">
              <table role="presentation" style="width:100%;border-collapse:collapse;background:#ffffff;border:1px solid #dfe7e5;border-radius:12px;">
                <tr>
                  <td style="padding:34px 32px;">
                    <p style="margin:0 0 8px;color:#047857;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Enquiry received</p>
                    <h1 style="margin:0;color:#17232b;font-size:26px;line-height:1.25;">Thanks for reaching out, ${escapeHtml(data.name)}.</h1>
                    <p style="margin:18px 0 0;color:#52616b;font-size:16px;line-height:1.7;">
                      We have received your enquiry about <strong style="color:#17232b;">${escapeHtml(data.service)}</strong>. Our team is reviewing your message and will follow up with the next steps.
                    </p>
                    <table role="presentation" style="width:100%;margin:24px 0 0;border-collapse:collapse;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:8px;">
                      <tr>
                        <td style="padding:14px 16px;color:#166534;font-size:14px;line-height:1.6;">
                          <strong>Your enquiry is on its way to the ArambhHai team.</strong><br />
                          You can reply directly to this email if you would like to add anything.
                        </td>
                      </tr>
                    </table>
                    <p style="margin:26px 0 0;">
                      <a href="https://www.arambhhai.me" style="display:inline-block;padding:12px 18px;border-radius:7px;background:#047857;color:#ffffff;font-size:14px;font-weight:700;text-decoration:none;">Visit ArambhHai</a>
                    </p>
                    <p style="margin:28px 0 0;color:#52616b;font-size:14px;line-height:1.7;">
                      Warm regards,<br /><strong style="color:#17232b;">The ArambhHai Team</strong>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 8px 0;text-align:center;color:#71808a;font-size:12px;line-height:1.6;">
              ArambhHai · Simple, modern websites for growing brands<br />
              <a href="mailto:team@arambhhai.me" style="color:#047857;text-decoration:none;">team@arambhhai.me</a>
            </td>
          </tr>
        </table>
      </div>
    `,
  });
}
