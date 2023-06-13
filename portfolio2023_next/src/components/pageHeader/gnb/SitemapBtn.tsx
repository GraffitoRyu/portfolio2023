"use client";

import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { usePathname, useRouter } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/Gnb";

// type
import { SitemapType } from "@/types/sitemap";
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";

// style
import { transTime } from "@/styles/styled/preset/transTime";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  const router = useRouter();
  // 현재 페이지 경로
  const pathname = usePathname();

  // 페이지 상태 관리
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  // 경로 상태 관리
  const [curPath, setCurPath] = useState<string>("/");

  // 현재 페이지에 맞는 메뉴 하이라이트 상태 관리
  const [now, setNow] = useState<string>(curPath == path ? "now" : "");
  // 마우스오버 인터렉션 상태 관리
  const [hover, setHover] = useState<string>("");

  // 현재 경로 상태 업데이트
  useEffect(() => {
    setCurPath(pathname);
  }, [pathname]);

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
        console.log("페이지 변경 시작: ", code);

        setPageAtom(prev => ({
          ...prev,
          cover: code,
          loaded: false,
        }));

        setTimeout(() => {
          if (container?.current) container.current.scrollTo(0, 0);
          router.push(path);
        }, transTime.common.transCover);
      }}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
