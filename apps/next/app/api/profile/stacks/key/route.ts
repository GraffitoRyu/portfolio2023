import { NextResponse } from "next/server";
import { getData } from "@/data/server";
import cacheOptions from "@/lib/cache";
import { stackKeysData } from "@graffitoryu/preset-data";

/**
 * 기술 스택 key 조회 API
 * @api
 * @method GET
 * @route /api/profile/stacks/key
 * @return {Promise<NextResponse<StackKeyAPIDataTypes[]>>}
 */
export async function GET(): Promise<NextResponse<StackKeyAPIDataTypes[]>> {
  const res = await getData<StackKeyAPIDataTypes[]>({
    routeUrl: "/api/profile/stacks/key",
    sourcePath: "/stackKeys",
    localData: stackKeysData,
    failResponse: [],
  });

  return NextResponse.json(res, { ...cacheOptions });
}
