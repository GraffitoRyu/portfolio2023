import { NextResponse } from "next/server";
import { getData } from "@/data/server";
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
  const res = await getData<ExperienceAPIDataTypes[]>({
    routeUrl: "/api/profile/experience",
    sourcePath: "/experience",
    localData: experienceData,
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
