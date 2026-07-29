import { NextRequest, NextResponse } from "next/server";
import { dataError, getData } from "@/data/server";
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
) {
  // 프로젝트 상세 코드
  const { detailCode } = await params;

  // 파라미터가 없는 경우
  if (!detailCode) {
    return NextResponse.json({ error: "PROJECT_NOT_FOUND" }, { status: 404 });
  }

  try {
    const data = await getData<ProjectsAPIDataType | undefined>({
      routeUrl: `/api/projects/${detailCode}`,
      sourcePath: "/projects",
      code: detailCode,
      localData: projectsData.find(({ code }) => code === detailCode),
      isValid: (value): value is ProjectsAPIDataType | undefined =>
        typeof value === "undefined" ||
        (typeof value === "object" &&
          value !== null &&
          "code" in value &&
          value.code === detailCode &&
          "summary" in value &&
          typeof value.summary === "object" &&
          value.summary !== null),
    });

    if (typeof data === "undefined") {
      return NextResponse.json({ error: "PROJECT_NOT_FOUND" }, { status: 404 });
    }

    return NextResponse.json(data, { ...cacheOptions });
  } catch {
    return NextResponse.json(dataError, { status: 502 });
  }
}
