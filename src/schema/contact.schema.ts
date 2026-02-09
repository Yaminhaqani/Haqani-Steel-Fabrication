import { z } from "zod";

export const serviceOptions = [
  "Main Gates",
  "Bridges & Structural Steel",
  "Welding Trusses",
  "Iron Window Frames",
  "Tractor Trolleys",
  "PEB & Roofing Installation",
] as const;
//as const` is IMPORTANT: Makes these literal types instead of `string[]`. Enables full type safety

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { error: "Name must be at least 2 characters" })
    .max(15, { error: "Name must be less than 15 characters" }),

  //If you don't need to trim whitespace or check for empty strings with a custom message, you can use it just like z.string()
  //const emailSchema = z.email({ error: "Invalid email" });
  //.pipe() to pass the result of one schema (like a trimmed string) into the email validator
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .max(100, "Email is too long")
    .pipe(z.email({ error: "Please enter a valid email address" })),

  phone: z
    .string()
    .trim()
    .regex(/^[0-9]{10,15}$/, {
      error: "Enter a valid 10-digit phone number",
    }),

  service: z.enum(serviceOptions, {
    error: "Please select a service",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
