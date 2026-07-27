"use client";

import type { SitemapExternalData } from "@graffitoryu/preset-data";
import { useEffect, useRef, useState } from "react";

// components
import Tooltip from "@/components/tooltip/Tooltip";

// style components
import { StyledExtBtn } from "@/styles/styled/components/Gnb";

// style
import { transTime } from "@/styles/styled/preset/transTime";

// SVG
import ExternalIcon from "./BtnIcons";

export default function ExternalBtn({ path, name }: SitemapExternalData) {
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
        <StyledExtBtn
          className={`util-btn ${hover}`}
          href={path}
          target="_blank"
          onMouseEnter={() => setHover("hover")}
          onMouseLeave={() => setHover("")}
          aria-label={`외부 페이지 ${name} 링크로 이동하기`}
        >
          <figure>
            <ExternalIcon menuName={name} />
          </figure>
        </StyledExtBtn>
      </Tooltip>
    </div>
  );
}
