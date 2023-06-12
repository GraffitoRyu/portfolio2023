import { useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// type
import { SitemapType } from "@/types/sitemap";
import { pageStateTypes } from "@/types/state";

// style component
import { FooterBtn } from "@/styles/styled/components/PageFooter";

// state
import { pageState } from "@/states/page";

const FooterMenuBtn = styled(FooterBtn)``;

export default function SitemapBtn({
  code,
  path,
  name,
  external,
}: SitemapType): JSX.Element {
  const setPageAtom = useSetRecoilState<pageStateTypes>(pageState);

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
      href={path}
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        setPageAtom(prev => ({
          ...prev,
          cover: code,
          loaded: false,
        }));
      }}
    >
      <span>{name}</span>
    </FooterMenuBtn>
  );
}
