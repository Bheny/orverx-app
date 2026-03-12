import { NextRequest, NextResponse } from "next/server";
import { saveResponse } from "@/lib/saveResponse";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body || typeof body.answers !== "object") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const entry = saveResponse(body.answers as Record<string, string>);
    return NextResponse.json({ ok: true, id: entry.id }, { status: 201 });
  } catch (err) {
    console.error("[survey/route]", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
