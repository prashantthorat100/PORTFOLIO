import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const contactInquiries = pgTable("contact_inquiries", {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  subject: text().notNull().default("General Inquiry"),
  message: text().notNull(),
  receivedAt: timestamp("received_at", { withTimezone: true }).defaultNow().notNull(),
});
