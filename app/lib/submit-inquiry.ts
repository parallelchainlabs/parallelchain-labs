export type InquiryKind = "contact" | "consult" | "updates" | "career";

export type InquiryPayload = {
  kind: InquiryKind;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  service?: string;
  engagement?: string;
  timeline?: string;
  role?: string;
  message: string;
  compensation?: string;
  workModel?: string;
  employment?: string;
  city?: string;
  linkedin?: string;
  availability?: string;
  portfolio?: string;
  notice?: string;
};

export type InquiryResult = {
  ok: boolean;
  reference?: string;
  error?: string;
};

export async function submitInquiry(
  payload: InquiryPayload,
  file?: File | null,
): Promise<InquiryResult> {
  const form = new FormData();
  for (const [key, value] of Object.entries(payload)) {
    if (value !== undefined && value !== "") {
      form.append(key, value);
    }
  }
  if (file && file.size > 0) {
    form.append("cv", file);
  }

  const res = await fetch("/api/contact", {
    method: "POST",
    body: form,
  });

  const data = (await res.json().catch(() => ({}))) as InquiryResult;
  if (!res.ok || !data.ok || !data.reference) {
    return { ok: false, error: data.error || "request_failed" };
  }
  return { ok: true, reference: data.reference };
}
