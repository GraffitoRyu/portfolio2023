import { NextResponse } from "next/server";
import { getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { projectsData } from "@graffitoryu/preset-data";

/**
 * 프로젝트 목록 데이터 조회 API
 * @api
 * @method GET
 * @route /api/projects
 * @return {Promise<NextResponse<ProjectsAPIDataType[]>>}
 */
export async function GET(): Promise<NextResponse<ProjectsAPIDataType[]>> {
  const data = await getData<ProjectsAPIDataType[]>({
    routeUrl: "/api/projects",
    sourcePath: "/projects",
    localData: projectsData,
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
