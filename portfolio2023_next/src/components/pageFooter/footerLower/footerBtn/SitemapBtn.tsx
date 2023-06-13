"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// type
import { SitemapType } from "@/types/sitemap";
import { ScrollRefStateTypes, pageStateTypes } from "@/types/state";

// style component
import { FooterBtn } from "@/styles/styled/components/PageFooter";

// state
import { pageState } from "@/states/page";
import { scrollRefState } from "@/states/scroll";

// style
import { transTime } from "@/styles/styled/preset/transTime";

const FooterMenuBtn = styled(FooterBtn)``;

export default function SitemapBtn({
  code,
  path,
  name,
  external,
}: SitemapType): JSX.Element {
  const router = useRouter();
  const curPath = usePathname();

  // 페이지 상태 관리
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);
  const { container } = useRecoilValue<ScrollRefStateTypes>(scrollRefState);

  const [hover, setHover] = useState<string>("");

  return external ? (
    <FooterMenuBtn
      as="a"
      href={path}
      target="_blank"
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <span>{name}</span>
      <figure>
        <ExternalIcon />
      </figure>
    </FooterMenuBtn>
  ) : (
    <FooterMenuBtn
      type="button"
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        // 페이지 전환 커버 동작 후 이동 시작
        if (curPath == path) return;
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
    </FooterMenuBtn>
  );
}
