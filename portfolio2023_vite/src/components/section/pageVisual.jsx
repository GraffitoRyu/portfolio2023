import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";

export default function pageVisual(props) {
  const { borderText, filledText } = props;
  const visualRef = useRef();
  const scrollPos = useRecoilValue(scrollState);
  const [title, setTitle] = useState({
    y: 0,
    opacity: 1,
  });
  const {
    ref: titleRef,
    inView,
    entry,
  } = useInView({
    // onChange: inView => setViewportState(inView),
  });

  const cutRange = (v, min, max) => {
    if (!isNaN(v) && !isNaN(min) && !isNaN(max))
      return v < min ? min : v > max ? max : v;
    else return v;
  };
  const updateTitleParallax = (top = scrollPos.page) => {
    const _vh = visualRef?.current?.clientHeight;
    if (isNaN(_vh) || !_vh) return;

    const scrollRatio = cutRange(top / _vh, 0, 1) * 1.3;
    const _y = top / 6;
    const _op = 1 - cutRange(scrollRatio, 0, 1);
    setTitle({ y: _y, opacity: _op });
  };

  useEffect(() => {
    // initiate
    // console.log(` -+- initiate Visual Section -+-`);
    updateTitleParallax(0);
  }, []);

  useEffect(() => {
    // update scroll
    updateTitleParallax();
  }, [scrollPos.page]);

  return (
    <div
      className="page-visual side-padding w-full flex items-end"
      ref={visualRef}
    >
      <h1
        className="page-title fixed pointer-events-none"
        ref={titleRef}
        viewport={inView ? "in" : "out"}
        style={{
          transform: `translate3d(0,-${title.y}px, 0)`,
          opacity: !isNaN(title.opacity) ? title.opacity : 1,
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
