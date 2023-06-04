"use client";

import { useEffect, useRef } from "react";
import { useParams, usePathname } from "next/navigation";
import { useRecoilValue, useSetRecoilState } from "recoil";

// state
import { pageState, pageStateTypes } from "@/states/page";

// type
import { SitemapType } from "@/types/sitemap";

// data
import { sitemapData } from "@/data/sitemap";

const routeData: SitemapType[] = sitemapData.filter(route => !route.external);

export function PageLoadEvents() {
  const { category } = useParams();
  const pathname = usePathname(); // 현재 루트 수신
  const savedPathNameRef = useRef<string>(pathExceptParams(pathname, category)); // 현재 루트 저장
  const setPage = useSetRecoilState<pageStateTypes>(pageState);

  // debug
  const page = useRecoilValue(pageState);

  useEffect(() => {
    if (!page.init) {
      console.log(
        `페이지 최초 로드 완료: `,
        pathExceptParams(pathname, category)
      );
      setPage(prev => ({ ...prev, init: true }));
    }
  }, [category, page.init, pathname, setPage]);

  useEffect(() => {
    // 루트 업데이트
    if (savedPathNameRef.current !== pathExceptParams(pathname, category)) {
      const curPage = getCurPageName(
        pathExceptParams(pathname, category),
        routeData
      );
      console.log(`페이지 변경: `, curPage);
      setPage(prev => ({ ...prev, loaded: true, cur: curPage }));

      savedPathNameRef.current = pathExceptParams(pathname, category);
    }
  }, [category, page.cur, pathname, setPage]);

  return null;
}

// 경로에서 페이지 이름 찾기
export function getCurPageName(curPath: string, data: SitemapType[]) {
  return data.filter(d => d.path === curPath)[0]?.code;
}

export function pathExceptParams(path: string, category: string | null) {
  if (category)
    return path.includes(category) ? path.replace(`/${category}`, "") : path;
  return path;
}
