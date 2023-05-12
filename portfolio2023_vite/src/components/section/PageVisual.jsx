import React, { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";
import { pageState } from "../../hooks/state/page";

// util
import useRange from "../../hooks/util/useRange";

export default function PageVisual(props) {
  const { borderText, filledText } = props;
  const visualRef = useRef();
  // const titleRef = useRef();
  const page = useRecoilValue(pageState);
  const scrollPos = useRecoilValue(scrollState);
  const [loadTitle, setLoadTitle] = useState("");
  const [title, setTitle] = useState({
    y: 0,
    opacity: 1,
  });
  const { ref: sectionViewRef, inView } = useInView();

  const visualViewRef = useCallback(
    node => {
      visualRef.current = node;
      sectionViewRef(node);
    },
    [sectionViewRef]
  );

  const updateTitleParallax = (top = scrollPos.page) => {
    if (!inView || !visualRef?.current) return;

    const _vh = visualRef.current.clientHeight;
    if (isNaN(_vh) || !_vh) return;

    const scrollRatio = useRange(top / _vh, 0, 1);
    const _y = top / 6;
    const _op = 1 - useRange(scrollRatio, 0, 1);
    setTitle({ y: _y, opacity: _op });
  };

  useEffect(() => {
    // initiate
    if (!page.init) setLoadTitle("loaded");
  }, []);

  useEffect(() => {
    // enter -> exit => entering -> exiting -> entered -> exited
    if (page.transStep == "exiting") {
      setLoadTitle("");
    } else if (page.transStep == "entering") {
      updateTitleParallax(0);
      // } else if (page.transStep == "entered") {
      setTimeout(() => {
        setLoadTitle("loaded");
      }, 400); // trans/cover.jsx 참조
    }
  }, [page.transStep]);

  useEffect(() => {
    // update scroll
    if (page.transStep == "entered") updateTitleParallax();
  }, [scrollPos.page]);

  return (
    <div
      className="page-visual side-padding w-full flex items-end overflow-hidden"
      ref={visualViewRef}
    >
      <h1
        className="page-title fixed pointer-events-none"
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
