import { NextResponse } from "next/server";
import { getPortfolioData } from "@/data/repository/server";
import cacheOptions from "@/lib/cache";
import { careerData } from "@portfolio/preset-data";

/**
 * 커리어 조회 API
 * @api
 * @method GET
 * @route /api/profile/career
 * @return {Promise<NextResponse<CareerAPIDataType[]>>}
 */
export async function GET(): Promise<NextResponse<CareerAPIDataType[]>> {
  const res = await getPortfolioData<CareerAPIDataType[]>({
    routeUrl: "/api/profile/career",
    sourcePath: "/career",
    fixtureData: careerData,
    failureData: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
