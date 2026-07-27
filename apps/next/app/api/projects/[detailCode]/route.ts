import { NextRequest, NextResponse } from "next/server";
import { getPortfolioData } from "@/data/repository/server";
import cacheOptions from "@/lib/cache";
import { projectsData } from "@portfolio/preset-data";

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

  const data = await getPortfolioData<ProjectsAPIDataType[]>({
    routeUrl: `/api/projects/${detailCode}`,
    sourcePath: "/projects",
    fixtureData: projectsData,
    failureData: [],
  });

  const res =
    (typeof data !== "undefined" &&
      Array.isArray(data) &&
      data.length > 0 &&
      data.filter(({ code }) => code === detailCode)?.[0]) ||
    undefined;

  return NextResponse.json(res, { ...cacheOptions });
}
