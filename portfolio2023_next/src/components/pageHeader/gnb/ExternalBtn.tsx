import { useState } from "react";
import { styled } from "styled-components";

// type
import { SitemapType } from "@/data/sitemap";

// util
import { rem } from "@/util/unit";

// style
import { SvgFill } from "@/styles/styled/preset/mixins";

// SVG
import * as ExtSvg from "./BtnIcons";
function ExtIcon(name: string) {
  switch (name) {
    case "Github":
      return <ExtSvg.Github />;
    case "Notion":
      return <ExtSvg.Notion />;
    default:
      return name;
  }
}

const ExtBtn = styled.a`
  ${({ theme }) => SvgFill(theme.gnbUtilBtn.svg)};
  &.hover {
    background-color: ${({ theme }) => theme.gnbUtilBtn.bg};
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgHover)};
  }
  &:active {
    ${({ theme }) => SvgFill(theme.gnbUtilBtn.svgActive)};
  }
`;

const Tooltip = styled.div`
  padding: 0 ${rem(16)};
  border-radius: ${rem(16)};
  height: ${rem(32)};
  background: #ccc;
  left: 50%;
  transform: translate(-50%, 100%);
  opacity: 0;
  transition: transform 0.4s, opacity 0.4s;
  span {
    font-size: ${rem(16)};
    color: #3a3a3a;
    font-weight: 500;
    letter-spacing: 0;
  }
  &.hover {
    transform: ${`translate(-50%, ${rem(10)})`};
    opacity: 1;
  }
`;

export default function ExternalBtn({ path, name }: SitemapType) {
  const [hover, setHover] = useState<string>("");

  return (
    <div className="util-item">
      <ExtBtn
        className={`util-btn ${hover}`}
        href={path}
        target="_blank"
        onMouseEnter={() => setHover("hover")}
        onMouseLeave={() => setHover("")}
      >
        <figure>{ExtIcon(name)}</figure>
      </ExtBtn>
      <Tooltip className={`util-tooltip absolute top-full ${hover}`}>
        <span>{name}</span>
      </Tooltip>
    </div>
  );
}
