"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useParams, usePathname, useRouter } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/Gnb";

// type
import { SitemapType } from "@/types/sitemap";
import { DetailLayoutStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { detailLayoutState } from "@/states/detail";

// hooks
import { pathExceptParams } from "@/hooks/PageLoadEvents";

// util
import navDelay from "@/util/navDelay";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  // 현재 페이지 경로
  const pathname = usePathname();
  const { category } = useParams();
  const router = useRouter();

  // 현재 페이지 상태
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const setDetailLayout =
    useSetRecoilState<DetailLayoutStateTypes>(detailLayoutState);

  // 파라미터 제외한 실제 경로 추출 및 상태 관리
  const [curPath, setCurPath] = useState<string>(
    pathExceptParams(pathname, category)
  );

  // 현재 페이지에 맞는 메뉴 하이라이트 상태 관리
  const [now, setNow] = useState<string>(curPath == path ? "now" : "");
  // 마우스오버 인터렉션 상태 관리
  const [hover, setHover] = useState<string>("");

  // 현재 경로 상태 업데이트
  useEffect(() => {
    setCurPath(pathExceptParams(pathname, category));
  }, [category, pathname]);

  // 현재 페이지에 맞는 메뉴 하이라이트 상태 업데이트
  useEffect(() => {
    setNow(path == curPath ? "now" : "");
  }, [curPath, path]);

  return (
    <SitemapLink
      type="button"
      className={`${now} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={(e: SyntheticEvent) =>
        navDelay({
          delay: category ? 0 : 1000,
          e,
          clickEvent: () => {
            console.log("페이지 변경 시작: ", code);

            if (category) {
              setDetailLayout(prev => ({
                ...prev,
                open: false,
                openComplete: false,
              }));
            } else {
              setPageAtom(prev => ({
                ...prev,
                cover: code,
                loaded: false,
              }));
            }
          },
          navEvent: () => router.push(path),
        })
      }
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
