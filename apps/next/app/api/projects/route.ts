import { NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { projectsData } from "@graffitoryu/preset-data";

/**
 * 프로젝트 목록 데이터 조회 API
 * @api
 * @method GET
 * @route /api/projects
 * @return {Promise<NextResponse<ProjectsAPIDataType[]>>}
 */
export async function GET() {
  try {
    const data = await getData<ProjectsAPIDataType[]>({
      routeUrl: "/api/projects",
      sourcePath: "/projects",
      localData: projectsData,
      isValid: Array.isArray,
    });

    const res = data.map(({ code, summary }) => ({ code, summary }));

    return NextResponse.json(res, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
