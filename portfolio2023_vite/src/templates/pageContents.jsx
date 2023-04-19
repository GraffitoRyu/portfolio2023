import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";
import { useOutlet } from "react-router-dom";

// components
import SeoHelmet from "../components/seo/helmet";
import PageHeader from "../components/common/pageHeader";
import PageFooter from "../components/common/pageFooter";

// state
import { scrollState } from "../hooks/state/scroll";

// util
import windowScroll from "../hooks/util/windowScroll";
import setStickyPos from "../hooks/util/setStickyPos";

export default function transContainer() {
  const currentOutlet = useOutlet();
  const containerRef = useRef();
  const setScrollPos = useSetRecoilState(scrollState);

  const updateScrollPos = () => {
    if (containerRef?.current) {
      const scrollPos = containerRef.current.scrollTop;
      setScrollPos(containerRef.current.scrollTop);
      setStickyPos(scrollPos);
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
      <PageHeader />
      <div className="scroll-container parallax-frame" ref={containerRef}>
        {currentOutlet}
        <PageFooter />
      </div>
    </>
  );
}
