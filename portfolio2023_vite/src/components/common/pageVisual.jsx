import React, { useEffect, useRef } from "react";
import windowScroll from "../../hooks/util/windowScroll";
import { InView } from "react-intersection-observer";

export default function pageVisual(props) {
  const { visualRef, borderText, filledText } = props;
  const titleRef = useRef();

  const _fadeInUp = scrollPos => {
    // 1. InView로 화면 내 들어왔는지 체크
    // 2. 들어왔을 떄, offset과 scrollPos로 애니메이션 처리
    if (titleRef?.current && !isNaN(scrollPos)) {
      // 스크롤 애니메이션
    }
  };

  useEffect(() => {
    const _scrollArea = document.querySelector(".scroll-container");

    windowScroll(_scrollArea, () => {
      console.log(_scrollArea.scrollTop);
    });
  }, []);
  return (
    <section
      className="page-visual visual-section around-padding w-full flex items-center sm:items-end "
      ref={visualRef}
    >
      <div className="flex items-center sm:items-end around-padding">
        <h1 className="page-title" ref={titleRef}>
          <span className="page-title-text page-title-border-text flex items-center">
            {borderText}
          </span>
          <span className="page-title-text page-title-filled-text flex items-center">
            {filledText}
          </span>
        </h1>
      </div>
    </section>
  );
}
