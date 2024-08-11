import { NextRequest, NextResponse } from "next/server";
import { getFirebaseData } from "@/utils/data/api.util";
import cacheOptions from "@/lib/cache.lib";

/**
 * 프로젝트 상세 데이터 조회 API
 * @api
 * @param {string} params.detailCode 프로젝트 코드
 * @route /api/projects/{detailCode}
 * @return {Promise<NextResponse<ProjectsAPIDataType | undefined>>}
 */
export async function GET(
  req: NextRequest,
  { params }: { params: { detailCode: string } },
): Promise<NextResponse<ProjectsAPIDataType | undefined>> {
  // 프로젝트 상세 코드
  const detailCode = params?.detailCode || undefined;

  // 파라미터가 없는 경우
  if (!detailCode) return NextResponse.json(undefined);

  const data = await getFirebaseData<ProjectsAPIDataType[]>({
    routeUrl: `/api/projects/${detailCode}`,
    queryUrl: "/projects",
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
