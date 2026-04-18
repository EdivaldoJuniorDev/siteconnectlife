"use server";

import { buildWhatsappUrl, contactSchema } from "@/lib/contact/schema";

export type ContactActionResult =
  | {
      status: "success";
      whatsappUrl: string;
    }
  | {
      status: "error";
      fieldErrors: Record<string, string[]>;
      formError?: string;
    };

export async function submitContact(
  _prev: ContactActionResult | null,
  formData: FormData,
): Promise<ContactActionResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    projectType: formData.get("projectType"),
    budget: formData.get("budget") || undefined,
    message: formData.get("message"),
    consent: formData.get("consent"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as string;
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    }
    return { status: "error", fieldErrors };
  }

  return {
    status: "success",
    whatsappUrl: buildWhatsappUrl(parsed.data),
  };
}
