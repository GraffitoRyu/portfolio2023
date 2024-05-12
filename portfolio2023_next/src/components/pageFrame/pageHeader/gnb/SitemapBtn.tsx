"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

// style components
import { SitemapLink } from "@/styles/styled/components/Gnb";

// type
import { SitemapType } from "@/types/sitemap";
import { ScrollRefStateTypes, PageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  const router = useRouter();

  // 현재 페이지 경로
  const pathname = usePathname();
  const { category } = useParams();

  // 페이지 상태 관리
  const setPageAtom = useSetRecoilState<PageStateTypes>(pageState);
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  // 경로 상태 관리
  const [curPath, setCurPath] = useState<string>("/");

  // 현재 페이지에 맞는 메뉴 하이라이트 상태 관리
  const [now, setNow] = useState<string>(curPath == path ? "now" : "");
  // 마우스오버 인터렉션 상태 관리
  const [hover, setHover] = useState<string>("");

  // 현재 경로 상태 업데이트
  useEffect(() => {
    setCurPath(pathname.replace(`/${category}`, ""));
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
      onClick={() => {
        // 페이지 전환 커버 동작 후 이동 시작
        if (pathname === path) return;

        setPageAtom(prev => ({
          ...prev,
          cover: code,
          loaded: false,
        }));

        setTimeout(() => {
          if (container) container.scrollTo(0, 0);
          setPageAtom(prev => ({ ...prev, loadComplete: false }));
          router.push(path);
        }, transTime.common.coverUp);
      }}
      aria-label={`포트폴리오 페이지 ${name}로 이동하기`}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
