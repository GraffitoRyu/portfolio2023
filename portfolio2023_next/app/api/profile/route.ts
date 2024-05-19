import { NextRequest, NextResponse } from "next/server";

const db = process.env.FIREBASE_DATABASE_URL;

export const revalidate = 0;

export async function GET(req: NextRequest) {
  // 프로필 페이지를 위한 데이터 조회
  const { searchParams } = new URL(req.url);
  const item = searchParams.get("item");
  const res = await (await fetch(`${db}/${item}.json`)).json();
  return NextResponse.json({ res });
}
