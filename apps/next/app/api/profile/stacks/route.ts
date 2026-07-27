import { NextResponse } from "next/server";
import { getPortfolioData } from "@/data/repository/server";
import cacheOptions from "@/lib/cache";
import { stacksData } from "@graffitoryu/preset-data";

/**
 * 기술 스택 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks
 * @return {Promise<NextResponse<StackAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackAPIDataTypes[]>> {
  const res = await getPortfolioData<StackAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks",
    sourcePath: "/stacks",
    fixtureData: stacksData,
    failureData: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
