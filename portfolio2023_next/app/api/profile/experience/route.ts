import apiLog from "@/util/log.util";
import { NextResponse } from "next/server";

/**
 * 경험 내용 조회 API
 * @api
 * @route /api/profile/experience
 */
export async function GET() {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const route = `/api/profile/experience`;

  const url = `${domain}/experience.json`;
  apiLog({ route, messages: url });

  const res = await (await fetch(url)).json();

  return NextResponse.json(res);
}
