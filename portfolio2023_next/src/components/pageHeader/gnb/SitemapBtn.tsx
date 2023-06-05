"use client";

import { SyntheticEvent, useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useParams, usePathname, useRouter } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/gnb";

// type
import { SitemapType } from "@/types/sitemap";

// util
import { pageState, pageStateTypes } from "@/states/page";
import { pathExceptParams } from "@/hooks/PageLoadEvents";
import navDelay from "@/util/navDelay";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  // 현재 페이지 경로
  const pathname = usePathname();
  const { category } = useParams();
  const router = useRouter();

  // 현재 페이지 상태
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);

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
          delay: 1000,
          e,
          clickEvent: () => {
            console.log("페이지 변경 시작: ", code);
            setPageAtom(prev => ({ ...prev, cover: code, loaded: false }));
          },
          navEvent: () => router.push(path),
        })
      }
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
