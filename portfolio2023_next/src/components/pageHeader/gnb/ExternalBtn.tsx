"use client";

import { useEffect, useRef, useState } from "react";

// type
import { SitemapType } from "@/types/sitemap";

// style components
import { ExtBtn } from "@/styles/styled/components/Gnb";

// SVG
import * as ExtSvg from "./BtnIcons";
import Tooltip from "@/components/tooltip/Tooltip";
import { transTime } from "@/styles/styled/preset/transTime";
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
  const [active, setActive] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const showTimer = useRef<NodeJS.Timeout | null>(null);
  const activeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hover !== "") {
      setActive(true);
    } else {
      setShow(false);
    }
  }, [hover]);

  useEffect(() => {
    if (activeTimer.current !== null) {
      clearTimeout(activeTimer.current);
      activeTimer.current = null;
    }
    if (showTimer.current !== null) {
      clearTimeout(showTimer.current);
      showTimer.current = null;
    }
    if (hover) {
      showTimer.current = setTimeout(() => {
        if (showTimer.current !== null) {
          clearTimeout(showTimer.current);
          showTimer.current = null;
        }
        setShow(true);
      }, 100);
    } else {
      activeTimer.current = setTimeout(() => {
        if (activeTimer.current !== null) {
          clearTimeout(activeTimer.current);
          activeTimer.current = null;
        }
        setActive(false);
      }, transTime.tooltip);
    }
  }, [hover]);

  return (
    <div className="util-item">
      <Tooltip
        contents={name}
        pos={["bottom", "center"]}
        section="gnbUtilBtn"
        active={active}
        show={show}
      >
        <ExtBtn
          className={`util-btn ${hover}`}
          href={path}
          target="_blank"
          onMouseEnter={() => setHover("hover")}
          onMouseLeave={() => setHover("")}
        >
          <figure>{ExtIcon(name)}</figure>
        </ExtBtn>
      </Tooltip>
    </div>
  );
}
