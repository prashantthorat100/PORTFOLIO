import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { contactInquiries } from "../../db/schema.js";

const json = (body: unknown, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export default async (request: Request) => {
  if (request.method !== "POST") {
    return json({ success: false, error: "Method not allowed." }, 405);
  }

  try {
    const body = await request.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return json({ success: false, error: "Please fill in name, email, and message." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json({ success: false, error: "Please provide a valid email address." }, 400);
    }

    if (name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000) {
      return json({ success: false, error: "One or more fields exceed the allowed length." }, 400);
    }

    const [inquiry] = await db
      .insert(contactInquiries)
      .values({ name, email, subject: subject || "General Inquiry", message })
      .returning({ id: contactInquiries.id });

    return json({
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully.`,
      inquiryId: inquiry.id,
    }, 201);
  } catch (error) {
    console.error("Unable to save contact inquiry", error instanceof Error ? error.message : "Unknown error");
    return json({ success: false, error: "Your message could not be sent. Please try again." }, 500);
  }
};

export const config: Config = {
  path: "/api/contact",
};
