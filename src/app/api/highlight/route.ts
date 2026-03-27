import { NextRequest, NextResponse } from "next/server";
import { highlightCode } from "@/lib/shiki";

export async function POST(request: NextRequest) {
  const { code, lang = "choreo", theme = "github-dark" } = await request.json();
  const html = await highlightCode(code, lang, theme);
  return NextResponse.json(
    { html },
    {
      headers: {
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    }
  );
}
