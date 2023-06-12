"use client";

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { usePathname } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/Gnb";

// type
import { SitemapType } from "@/types/sitemap";
import { pageStateTypes } from "@/types/state";

// state
import { pageState } from "@/states/page";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  // 현재 페이지 경로
  const pathname = usePathname();

  // 현재 페이지 상태
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);

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
      href={path}
      className={`${now} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        console.log("페이지 변경 시작: ", code);
        setPageAtom(prev => ({
          ...prev,
          cover: code,
          loaded: false,
        }));
      }}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
