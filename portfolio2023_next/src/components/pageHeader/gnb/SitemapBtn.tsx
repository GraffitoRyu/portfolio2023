"use client";

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { usePathname } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/gnb";

// data
import { SitemapType } from "@/data/sitemap";

// util
import { pageState, pageStateTypes } from "@/states/page";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  const curPath = usePathname();
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const [curPage, setCurPage] = useState<string>(path == curPath ? "now" : "");
  const [hover, setHover] = useState("");

  useEffect(() => {
    setCurPage(path == curPath ? "now" : "");
  }, [curPath, path]);

  return (
    <SitemapLink
      href={path}
      className={`${curPage} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        console.log("페이지 변경 시작: ", code);
        setPageAtom(prev => ({ ...prev, cur: code, loaded: false }));
      }}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
