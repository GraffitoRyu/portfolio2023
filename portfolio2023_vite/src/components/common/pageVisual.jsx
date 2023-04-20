import React, { useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

import { scrollState } from "../../hooks/state/scroll";
import windowScroll from "../../hooks/util/windowScroll";

export default function pageVisual(props) {
  const { visualRef, borderText, filledText } = props;
  const scrollPos = useRecoilValue(scrollState);
  const [title, setTitle] = useState({
    y: 0,
    opacity: 1,
  });

  const { ref: titleRef, inView, entry } = useInView();

  // 스크롤 애니메이션
  // 1. InView로 화면 내 들어왔는지 체크
  // 2. 들어왔을 떄, offset과 scrollPos로 애니메이션 처리

  useEffect(() => {
    if (inView) {
      setTitle({
        y: scrollPos / 2,
        opacity: 1 - (scrollPos / visualRef.current.clientHeight) * 1.6,
      });
    }
  }, [scrollPos]);
  return (
    // <InView
    //   as="section"
    //   onChange={(inView, entry) => {
    //     console.log(`in view`, inView);
    //   }}
    //   className="page-visual visual-section around-padding w-full flex items-center sm:items-end "
    //   ref={visualRef}
    // >
    <section
      className="page-visual visual-section around-padding w-full flex items-center sm:items-end"
      ref={visualRef}
    >
      <div className="flex items-center sm:items-end around-padding">
        <h1
          className="page-title"
          ref={titleRef}
          style={{
            transform: `translate3d(0,${title.y}px, 0)`,
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
    </section>
    // </InView>
  );
}
