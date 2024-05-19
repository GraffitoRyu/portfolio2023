import apiLog from "@/util/log.util";
import { NextResponse } from "next/server";

/**
 * 프로젝트 목록 데이터 조회 API
 * @api
 * @route /api/projects
 */
export async function GET() {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const route = `/api/projects`;

  const url = `${domain}/projects.json`;
  apiLog({ route, messages: url });

  const p = await (await fetch(url)).json();

  const res =
    typeof p !== "undefined" &&
    Array.isArray(p) &&
    p.length > 0 &&
    p.map(({ code, summary }) => ({ code, summary }));

  return NextResponse.json(res);
}
