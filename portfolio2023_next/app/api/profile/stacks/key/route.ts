import apiLog from "@/util/log.util";
import { NextResponse } from "next/server";

/**
 * 기술 스택 key 조회 API
 * @api
 * @route /api/profile/stacks/key
 */
export async function GET() {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const route = `/api/profile/stacks/key`;

  const url = `${domain}/stackKeys.json`;
  apiLog({ route, messages: url });

  const res = await (await fetch(url)).json();

  return NextResponse.json(res);
}
