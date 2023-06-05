import { ProjectsType } from "@/types/projects";
import { NextResponse } from "next/server";

const db = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

export async function GET(req: Request) {
  // 프로젝트 페이지를 위한 데이터 조회
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const detail = searchParams.get("detail");
  const res = await (await fetch(`${db}/projects.json`)).json();

  // 목록 생성을 위한 데이터
  if (typeof type === "string" && type === "list") {
    const listData = res.map((d: ProjectsType) => ({
      code: d.code,
      summary: d.summary,
    }));
    return NextResponse.json({ ...listData });
  }

  // 프로젝트 상세를 위한 데이터
  if (typeof detail === "string") {
    const detailData = res.filter((d: ProjectsType) => d.code === detail)[0];
    return NextResponse.json({ ...detailData });
  }

  return NextResponse.json({ res });
}
