import apiLog from "@/util/log.util";
import { NextRequest, NextResponse } from "next/server";

/**
 * 프로젝트 상세 데이터 조회 API
 * @api
 * @param {string} params.detailCode 프로젝트 코드
 * @route /api/projects/{detailCode}
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { detailCode: string } },
) {
  const domain = process.env.FIREBASE_DATABASE_URL;
  const detailCode = params.detailCode;
  const route = `/api/projects/${detailCode}`;

  const url = `${domain}/projects.json`;
  apiLog({ route, messages: url });

  const p = await (await fetch(url)).json();

  const res =
    typeof p !== "undefined" &&
    Array.isArray(p) &&
    p.length > 0 &&
    p.filter(({ code }) => code === detailCode)?.[0];

  return NextResponse.json(res);
}
