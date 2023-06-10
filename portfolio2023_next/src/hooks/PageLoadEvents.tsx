"use client";

import { useLayoutEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

// state
import { pageState } from "@/states/page";

// type
import { SitemapType } from "@/types/sitemap";
import { pageStateTypes } from "@/types/state";

// data
import { sitemapData } from "@/data/sitemap";

const routeData: SitemapType[] = sitemapData.filter(route => !route.external);

export function PageLoadEvents() {
  const { category } = useParams();
  const pathname = usePathname(); // 현재 루트 수신
  const [savedPathName, setPathname] = useState<string>(
    pathExceptParams(pathname, category)
  ); // 현재 루트 저장
  const setPage = useSetRecoilState<pageStateTypes>(pageState);

  // debug
  const page = useRecoilValue(pageState);

  // 루트 업데이트
  useLayoutEffect(() => {
    console.log(
      `[PageLoadEvent : 루트 업데이트] pathname: ${pathname} / category: ${category}`
    );
    // 동적 경로 제외한 실 페이지 경로
    const newPathName: string = pathExceptParams(pathname, category);
    // 현재 페이지의 코드(페이지 이름) 값
    const newPageName: string = getCurPageName(newPathName, routeData);

    if (savedPathName !== newPathName) {
      console.log(`[PageLoadEvent : 페이지 변경] `, newPageName);

      // 현재 페이지와 저장된 페이지 상태값이 다른 경우, 현재 페이지 정보 업데이트
      const cur = newPageName !== page.cur ? newPageName : page.cur;

      // 페이지 상태 업데이트
      setPage(prev => ({ ...prev, loaded: true, cur }));
      setPathname(newPathName);
    }
  }, [category, page.cur, pathname, savedPathName, setPage]);

  // 페이지 새로고침 또는 첫 진입 체크
  useLayoutEffect(() => {
    if (!page.init) {
      console.log(`[PageLoadEvent : 페이지 최초 로드 완료] `, savedPathName);
      setPage(prev => ({ ...prev, init: true, loaded: true }));
    }
  }, [page.init, savedPathName, setPage]);

  return null;
}

// 경로에서 페이지 이름 찾기
export function getCurPageName(curPath: string, data: SitemapType[]): string {
  return data.filter(d => d.path === curPath)[0]?.code;
}

// 파라미터를 제외한 페이지 경로 추출
export function pathExceptParams(
  path: string,
  category: string | null
): string {
  if (category)
    return path.includes(category) ? path.replace(`/${category}`, "") : path;
  return path;
}
