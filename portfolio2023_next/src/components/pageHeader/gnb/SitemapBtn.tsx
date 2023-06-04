"use client";

import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { useParams, usePathname } from "next/navigation";

// style components
import { SitemapLink } from "@/styles/styled/components/gnb";

// type
import { SitemapType } from "@/types/sitemap";

// util
import { pageState, pageStateTypes } from "@/states/page";
import { pathExceptParams } from "@/hooks/PageLoadEvents";

export default function SitemapBtn({ code, path, name }: SitemapType) {
  const pathname = usePathname();
  const { category } = useParams();
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const [curPath, setCurPath] = useState<string>(
    pathExceptParams(pathname, category)
  );
  const [now, setNow] = useState<string>(curPath == path ? "now" : "");
  const [hover, setHover] = useState<string>("");

  useEffect(() => {
    setCurPath(pathExceptParams(curPath, category));
  }, [category, curPath]);

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
        setPageAtom(prev => ({ ...prev, cur: code, loaded: false }));
      }}
    >
      <span>{name}</span>
    </SitemapLink>
  );
}
