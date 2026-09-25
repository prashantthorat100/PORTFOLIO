CREATE TABLE "contact_inquiries" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "subject" text DEFAULT 'General Inquiry' NOT NULL,
  "message" text NOT NULL,
  "received_at" timestamp with time zone DEFAULT now() NOT NULL
);
