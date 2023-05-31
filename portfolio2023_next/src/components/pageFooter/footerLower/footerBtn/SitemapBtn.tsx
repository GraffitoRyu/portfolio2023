import { useState } from "react";
import Link from "next/link";
import { styled } from "styled-components";

// svg
import ExternalIcon from "@/svg/common/external_icon.svg";

// style
import { FooterBtn } from "@/styles/styled/components/footer";

// data
import { SitemapType } from "@/data/sitemap";

const FooterMenuBtn = styled(FooterBtn)``;

export default function SitemapBtn({
  path,
  name,
  external,
}: SitemapType): JSX.Element {
  const [hover, setHover] = useState<string>("");

  return external ? (
    <FooterMenuBtn
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
      as={Link}
      className={`${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <span>{name}</span>
    </FooterMenuBtn>
  );
}
