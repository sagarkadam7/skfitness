import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/data";
import { formatLeadEmailBody, type LeadPayload } from "@/lib/lead";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (accessKey) {
      const isNewsletter = body.type === "newsletter";
      const subject = isNewsletter
        ? `Newsletter signup — ${body.email}`
        : `New lead — ${body.name} (${body.goal})`;

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: isNewsletter ? "SK Fitness Newsletter" : body.name,
          email: body.email || siteConfig.email,
          phone: body.phone || "",
          message: formatLeadEmailBody(body),
        }),
      });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
