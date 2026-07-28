"use client";

import { useParams, usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useAtom, useSetAtom } from "jotai";

// state
import { pageDetailLoadState, pageLoadState } from "@/jotai/load.state";

// data
// style
import { transTime } from "@/styles/styled/preset/transTime";
import useProjectCategoryDetailData from "@/hooks/data/useProjectCategoryDetailData";
import { getRouteCode } from "@/hooks/navigation/useNavigation";

/**
 * Root/Library; 페이지 변경 이벤트 감지를 위한 컴포넌트
 * @component
 * @see https://nextjs.org/docs/app/api-reference/functions/use-router#router-events
 * @desc
 * - 페이지 변경 시, 변경 이벤트 감지에 따라 필요한 처리를 적용하기 위한 컴포넌트
 * - middleware.ts로 구성을 뺄 수 있는 부분은 리팩토링할 예정
 */
export default function PageLoadEvents() {
  const pathname = usePathname(); // 현재 루트 수신
  const { category } = useParams<{ category: string }>();
  const [savedPathName, setPathname] = useState<string>("/"); // 현재 루트 저장
  const [{ init, initComplete, currentPage }, setPage] =
    useAtom<PageLoadStateTypes>(pageLoadState);

  // 프로젝트 상세에 대한 열림/닫힘 상태 업데이트
  const setDetailState = useSetAtom(pageDetailLoadState);
  const { data: existCategoryDetailData } = useProjectCategoryDetailData();

  // 루트 업데이트
  useLayoutEffect(() => {
    // 동적 경로 제외한 실 페이지 경로
    const newPathName: string = pathname;
    // 현재 페이지의 코드(페이지 이름) 값
    const newPageName = getRouteCode(newPathName);

    if (savedPathName === newPathName) return;

    // 페이지 상태 업데이트
    setPage(prev => ({
      ...prev,
      loaded: true,
      currentPage: newPageName !== currentPage ? newPageName : currentPage,
    }));
    setPathname(newPathName);
  }, [currentPage, pathname, savedPathName, setPage]);

  // 페이지 새로고침 또는 첫 진입 체크
  useLayoutEffect(() => {
    if (init) return;

    // console.log(`[PageLoadEvent : 페이지 최초 로드 완료] `, savedPathName);
    setTimeout(() => {
      setPage(prev => ({ ...prev, init: true, loaded: true }));
    }, transTime.common.initComplete);
  }, [init, savedPathName, setPage]);

  // 프로젝트 상세 카테고리 업데이트
  useLayoutEffect(() => {
    if (!initComplete) return;

    setDetailState(prev => ({
      ...prev,
      category: typeof category === "string" ? category : "",
      open: existCategoryDetailData ? true : false,
    }));
  }, [category, initComplete, existCategoryDetailData, setDetailState]);

  return null;
}
