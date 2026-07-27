import { NextResponse } from "next/server";
import { getPortfolioData } from "@/data/repository/server";
import cacheOptions from "@/lib/cache";
import { stackKeysData } from "@portfolio/preset-data";

/**
 * 기술 스택 key 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 * @return {Promise<NextResponse<StackKeyAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackKeyAPIDataTypes[]>> {
  const res = await getPortfolioData<StackKeyAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks/key",
    sourcePath: "/stackKeys",
    fixtureData: stackKeysData,
    failureData: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
