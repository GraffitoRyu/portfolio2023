import { NextResponse } from "next/server";
import { getFirebaseData } from "@/util/api.util";
import cacheOptions from "@/lib/cache.lib";

/**
 * 프로젝트 목록 데이터 조회 API
 * @api
 * @route /api/projects
 * @return {Promise<NextResponse<ProjectsAPIDataType[]>>}
 */
export async function GET(): Promise<NextResponse<ProjectsAPIDataType[]>> {
  const data = await getFirebaseData<ProjectsAPIDataType[]>({
    routeUrl: "/api/projects",
    queryUrl: "/projects",
    failResponse: [],
  });

  const res =
    (typeof data !== "undefined" &&
      Array.isArray(data) &&
      data.length > 0 &&
      data.map(({ code, summary }) => ({ code, summary }))) ||
    [];

  return NextResponse.json(res, { ...cacheOptions });
}
