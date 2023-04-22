import React, { useEffect, useRef, useState } from "react";
import { InView, useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";

// util
import windowScroll from "../../hooks/util/windowScroll";
import { easeOutSine } from "../../hooks/util/cubicBezier";

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

  useEffect(() => {
    if (visualRef?.current) {
      const _vh = visualRef.current.clientHeight;
      const scrollRatio =
        (scrollPos / _vh < 0 ? 0 : scrollPos / _vh > 1 ? 1 : scrollPos / _vh) *
        1.3;
      const _y = scrollPos / 6;
      const _op = 1 - (scrollRatio < 0 ? 0 : scrollRatio > 1 ? 1 : scrollRatio);
      setTitle({
        y: _y,
        opacity: _op,
      });
    }
  }, [scrollPos]);

  return (
    <div
      className="page-visual side-padding w-full flex items-end"
      ref={visualRef}
    >
      <h1
        className="page-title fixed"
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
