import apiLog from "@/util/log.util";
import { NextResponse } from "next/server";

/**
 * 기술 스택 조회 API
 * @api
 * @route /api/profile/stacks
 */
export async function GET() {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const route = `/api/profile/stacks`;

  const url = `${domain}/stacks.json`;
  apiLog({ route, messages: url });

  const res = await (await fetch(url)).json();

  return NextResponse.json(res);
}
