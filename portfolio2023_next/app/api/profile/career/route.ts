import apiLog from "@/util/log.util";
import { NextResponse } from "next/server";

/**
 * 커리어 조회 API
 * @api
 * @route /api/profile/career
 */
export async function GET() {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const route = `/api/profile/career`;

  const url = `${domain}/career.json`;
  apiLog({ route, messages: url });

  const res = await (await fetch(url)).json();

  return NextResponse.json(res);
}
