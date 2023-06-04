"use client";

import { useState } from "react";

// type
import { SitemapType } from "@/types/sitemap";

// style components
import { ExtBtn, Tooltip } from "@/styles/styled/components/gnb";

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
