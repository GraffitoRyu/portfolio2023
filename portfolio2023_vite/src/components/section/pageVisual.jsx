import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";
import { pageState } from "../../hooks/state/page";

export default function pageVisual(props) {
  const { borderText, filledText } = props;
  const visualRef = useRef();
  const page = useRecoilValue(pageState);
  const scrollPos = useRecoilValue(scrollState);
  const [loadTitle, setLoadTitle] = useState("");
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
    setLoadTitle("loaded");
  }, []);

  useEffect(() => {
    console.log(` -+- initiate Visual Section -+-`, page.transStep);
    // enter -> exit => entering -> exiting -> entered -> exited
    if (page.transStep == "exiting") {
      setLoadTitle("");
    } else if (page.transStep == "exited") {
      updateTitleParallax(0);
      setTimeout(() => {
        setLoadTitle("loaded");
      }, page.transDelay + 100); // trans/cover.jsx 참조
    }
  }, [page.transStep]);

  useEffect(() => {
    // update scroll
    if (page.transStep == "entered") updateTitleParallax();
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
        <div
          className={`page-title-text page-title-border-text flex items-center`}
        >
          <span className={`${loadTitle}`}>{borderText}</span>
        </div>
        <div
          className={`page-title-text page-title-filled-text flex items-center`}
        >
          <span className={`${loadTitle}`}>{filledText}</span>
        </div>
      </h1>
    </div>
  );
}
