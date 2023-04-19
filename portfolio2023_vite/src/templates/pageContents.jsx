import { useEffect, useRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useOutlet } from "react-router-dom";

// components
import SeoHelmet from "../components/seo/helmet";
import PageHeader from "../components/common/pageHeader";
import PageFooter from "../components/common/pageFooter";

// util
import windowScroll from "../hooks/util/windowScroll";
import setStickyPos from "../hooks/util/setStickyPos";

// state
import { pageState } from "../hooks/state/page";
import { scrollState } from "../hooks/state/scroll";
import { sectionState, sectionOffsetState } from "../hooks/state/section";

export default function transContainer() {
  const currentOutlet = useOutlet();
  const containerRef = useRef();
  const [scrollPos, setScrollPos] = useRecoilState(scrollState);

  const pageCategory = useRecoilValue(pageState).cur;
  const section = useRecoilValue(sectionState[pageCategory]);
  const sectionOffset = useRecoilValue(sectionOffsetState[pageCategory]);

  const updateScrollPos = () => {
    if (containerRef?.current) {
      setScrollPos(containerRef.current.scrollTop);
      setStickyPos(containerRef.current.scrollTop);
    }
  };
  useEffect(() => {
    updateScrollPos();
    windowScroll(containerRef.current, () => {
      updateScrollPos();
    });
  }, []);

  return (
    <>
      <SeoHelmet />
      <PageHeader scrollPos={scrollPos} />
      <div className="scroll-container parallax-frame" ref={containerRef}>
        {currentOutlet}
        <PageFooter />
      </div>
    </>
  );
}
