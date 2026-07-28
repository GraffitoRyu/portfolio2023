import { NextRequest, NextResponse } from "next/server";
import { getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { projectsData } from "@graffitoryu/preset-data";

/**
 * 프로젝트 상세 데이터 조회 API
 * @api
 * @method GET
 * @param {string} params.detailCode 프로젝트 코드
 * @route /api/projects/{detailCode}
 * @return {Promise<NextResponse<ProjectsAPIDataType | undefined>>}
 */
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ detailCode: string }> },
): Promise<NextResponse<ProjectsAPIDataType | undefined>> {
  // 프로젝트 상세 코드
  const { detailCode } = await params;

  // 파라미터가 없는 경우
  if (!detailCode) return NextResponse.json(undefined);

  const data = await getData<ProjectsAPIDataType[]>({
    routeUrl: `/api/projects/${detailCode}`,
    sourcePath: "/projects",
    localData: projectsData,
    failResponse: [],
  });

  const res =
    (typeof data !== "undefined" &&
      Array.isArray(data) &&
      data.length > 0 &&
      data.filter(({ code }) => code === detailCode)?.[0]) ||
    undefined;

  return NextResponse.json(res, { ...cacheOptions });
}
