import { styled } from "styled-components";

// type
import { SitemapType } from "@/data/sitemap";

// SVG
import * as ExtSvg from "./BtnIcons";
import rem from "@/util/rem";
import { useState } from "react";
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

const ExtItem = styled.div`
  .util-tooltip {
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
  }
  &.hover {
    .util-tooltip {
      transform: translate(-50%, ${rem(10)});
      opacity: 1;
    }
  }
`;

export default function ExternalBtn({ path, name }: SitemapType) {
  const [hover, setHover] = useState<string>("");

  return (
    <ExtItem
      className={`util-item relative ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
    >
      <a className="btn-box util-btn" href={path} target="_blank">
        <figure>{ExtIcon(name)}</figure>
      </a>
      <div className="util-tooltip absolute top-full">
        <span>{name}</span>
      </div>
    </ExtItem>
  );
}
