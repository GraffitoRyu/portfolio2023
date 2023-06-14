"use client";

import { useLayoutEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";

// state
import { pageState } from "@/states/page";

// type
import { SitemapType } from "@/types/sitemap";
import { pageStateTypes } from "@/types/state";

// data
import { sitemapData } from "@/data/sitemap";
import { transTime } from "@/styles/styled/preset/transTime";

const routeData: SitemapType[] = sitemapData.filter(route => !route.external);

export function PageLoadEvents() {
  const pathname: string = usePathname(); // 현재 루트 수신
  const params = useSearchParams();
  const queryCode = params.get("code");
  const [savedPathName, setPathname] = useState<string>("/"); // 현재 루트 저장
  const [{ init, cur }, setPage] = useRecoilState<pageStateTypes>(pageState);

  useLayoutEffect(() => {
    if (init)
      console.log(
        `[PageLoadEvent : 루트 업데이트] pathname: ${pathname} / detail code: ${queryCode}`
      );
  }, [init, pathname, queryCode]);

  // 루트 업데이트
  useLayoutEffect(() => {
    // 동적 경로 제외한 실 페이지 경로
    const newPathName: string = pathname;
    // 현재 페이지의 코드(페이지 이름) 값
    const newPageName: string = getCurPageName(newPathName, routeData);

    if (savedPathName !== newPathName) {
      console.log(`[PageLoadEvent : 페이지 변경] `, newPageName);

      // 현재 페이지와 저장된 페이지 상태값이 다른 경우, 현재 페이지 정보 업데이트

      // 페이지 상태 업데이트
      setPage(prev => ({
        ...prev,
        loaded: true,
        cur: newPageName !== cur ? newPageName : cur,
      }));
      setPathname(newPathName);
    }
  }, [cur, pathname, savedPathName, setPage]);

  // 페이지 새로고침 또는 첫 진입 체크
  useLayoutEffect(() => {
    if (!init) {
      console.log(`[PageLoadEvent : 페이지 최초 로드 완료] `, savedPathName);
      setTimeout(() => {
        setPage(prev => ({ ...prev, init: true, loaded: true }));
      }, transTime.common.initComplete);
    }
  }, [init, savedPathName, setPage]);

  return null;
}

// 경로에서 페이지 이름 찾기
export function getCurPageName(curPath: string, data: SitemapType[]): string {
  return data.filter(d => d.path === curPath)[0]?.code;
}
