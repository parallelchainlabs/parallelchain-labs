import { appendFile, mkdir, writeFile } from "fs/promises";
import path from "path";
import { NextRequest } from "next/server";

const LAB_EMAIL = "hiring@parallelchain-lab.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_CV_BYTES = 5 * 1024 * 1024;
const CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

function referenceId() {
  return `PCL-${Date.now().toString(36).toUpperCase()}`;
}

function field(source: Record<string, string>, key: string) {
  return String(source[key] || "").trim();
}

async function readBody(
  request: NextRequest,
): Promise<{ fields: Record<string, string>; cv?: File }> {
  const contentType = request.headers.get("content-type") || "";
  if (contentType.includes("multipart/form-data")) {
    const form = await request.formData();
    const fields: Record<string, string> = {};
    let cv: File | undefined;
    for (const [key, value] of form.entries()) {
      if (key === "cv" && value instanceof File) {
        cv = value;
      } else if (typeof value === "string") {
        fields[key] = value;
      }
    }
    return { fields, cv };
  }

  const json = (await request.json()) as Record<string, unknown>;
  const fields: Record<string, string> = {};
  for (const [key, value] of Object.entries(json)) {
    if (value !== undefined && value !== null) {
      fields[key] = String(value);
    }
  }
  return { fields };
}

export async function POST(request: NextRequest) {
  let parsed: { fields: Record<string, string>; cv?: File };
  try {
    parsed = await readBody(request);
  } catch {
    return Response.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { fields, cv } = parsed;
  const kind = field(fields, "kind") || "contact";
  const name = field(fields, "name");
  const email = field(fields, "email");
  const message = field(fields, "message");

  if (!name || !email || !message) {
    return Response.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
  }

  if (cv && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) {
      return Response.json({ ok: false, error: "cv_too_large" }, { status: 400 });
    }
    if (cv.type && !CV_TYPES.has(cv.type)) {
      return Response.json({ ok: false, error: "cv_type" }, { status: 400 });
    }
  }

  const reference = referenceId();
  let cvName = "";

  if (cv && cv.size > 0) {
    const safeName = cv.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
    cvName = `${reference}-${safeName || "cv.pdf"}`;
    try {
      const dir = path.join(process.cwd(), ".data", "cvs");
      await mkdir(dir, { recursive: true });
      const bytes = Buffer.from(await cv.arrayBuffer());
      await writeFile(path.join(dir, cvName), bytes);
    } catch {
      cvName = cv.name;
    }
  }

  const record = {
    reference,
    receivedAt: new Date().toISOString(),
    kind,
    name,
    email,
    company: field(fields, "company"),
    phone: field(fields, "phone"),
    service: field(fields, "service"),
    engagement: field(fields, "engagement"),
    timeline: field(fields, "timeline"),
    role: field(fields, "role"),
    compensation: field(fields, "compensation"),
    workModel: field(fields, "workModel"),
    employment: field(fields, "employment"),
    city: field(fields, "city"),
    linkedin: field(fields, "linkedin"),
    availability: field(fields, "availability"),
    portfolio: field(fields, "portfolio"),
    notice: field(fields, "notice"),
    cv: cvName,
    message,
  };

  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "inquiries.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
  } catch {
    // Persistence is best-effort on read-only hosts.
  }

  try {
    await fetch(`https://formsubmit.co/ajax/${LAB_EMAIL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `[${record.reference}] ${kind} — ${name}`,
        ...record,
      }),
    });
  } catch {
    // Delivery is best-effort; the confirmation still stands.
  }

  return Response.json({ ok: true, reference: record.reference });
}
