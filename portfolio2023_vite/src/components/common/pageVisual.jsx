import React, { useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

import { scrollState } from "../../hooks/state/scroll";
import windowScroll from "../../hooks/util/windowScroll";

export default function pageVisual(props) {
  const { borderText, filledText } = props;
  const visualRef = useRef();
  const scrollPos = useRecoilValue(scrollState);
  const [title, setTitle] = useState({
    y: 0,
    opacity: 1,
  });
  const [viewportState, setViewportState] = useState(false);
  const {
    ref: titleRef,
    inView,
    entry,
  } = useInView({
    onChange: inView => setViewportState(inView),
  });

  // 스크롤 애니메이션
  // 1. InView로 화면 내 들어왔는지 체크
  // 2. 들어왔을 떄, offset과 scrollPos로 애니메이션 처리
  //  --> 깔끔하게 움직이지 않음,
  //  --> react-scroll-motion 병행

  useEffect(() => {
    if (visualRef?.current) {
      const _y = scrollPos / 6;
      const _op = 1 - (scrollPos / visualRef.current.clientHeight) * 1.2;
      setTitle({
        y: _y,
        opacity: _op < 0 ? 0 : _op > 1 ? 1 : _op,
      });
    }
  }, [scrollPos]);

  /**
   *
   * 인트로 섹션 구조 변경
   *  [visual]
   *  [description]
   *
   */

  return (
    <div
      className="page-visual around-padding w-full flex items-center sm:items-end"
      ref={visualRef}
    >
      <h1
        className="page-title fixed"
        ref={titleRef}
        viewport={inView ? "in" : "out"}
        style={{
          transform: `translate3d(0,-${title.y}px, 0)`,
          opacity: title.opacity,
        }}
      >
        <span className="page-title-text page-title-border-text flex items-center">
          {borderText}
        </span>
        <span className="page-title-text page-title-filled-text flex items-center">
          {filledText}
        </span>
      </h1>
    </div>
  );
}
