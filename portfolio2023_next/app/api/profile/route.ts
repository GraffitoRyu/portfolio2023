import { NextResponse } from "next/server";

const db = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

export async function GET(req: Request) {
  // 프로필 페이지를 위한 데이터 조회
  const { searchParams } = new URL(req.url);
  const item = searchParams.get("item");
  const res = await (await fetch(`${db}/${item}.json`)).json();
  return NextResponse.json({ res });
}
