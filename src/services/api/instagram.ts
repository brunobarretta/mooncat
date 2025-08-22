import { NextResponse } from "next/server";

export async function GET() {
  const IG_USER_ID = process.env.INSTAGRAM_USER_ID;
  const TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!IG_USER_ID || !TOKEN) {
    return NextResponse.json({ items: [] }, { status: 200 });
  }

  const url = `https://graph.facebook.com/v19.0/${IG_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${TOKEN}&limit=6`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();

    const items = (json?.data || []).map((m: any) => ({
      id: m.id,
      caption: m.caption,
      media_type: m.media_type,
      media_url: m.media_url,
      permalink: m.permalink,
      thumbnail_url: m.thumbnail_url,
      timestamp: m.timestamp,
    }));

    return NextResponse.json({ items }, { status: 200 });
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 });
  }
}