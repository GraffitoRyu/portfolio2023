import { NextResponse } from "next/server";
import { getPortfolioData } from "@/data/repository/server";
import cacheOptions from "@/lib/cache";
import { experienceData } from "@graffitoryu/preset-data";

/**
 * 경험 내용 조회 API
 * @api
 * @method GET
 * @route /api/profile/experience
 * @return {Promise<NextResponse<ExperienceAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<ExperienceAPIDataTypes[]>> {
  const res = await getPortfolioData<ExperienceAPIDataTypes[]>({
    routeUrl: "/api/profile/experience",
    sourcePath: "/experience",
    fixtureData: experienceData,
    failureData: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
