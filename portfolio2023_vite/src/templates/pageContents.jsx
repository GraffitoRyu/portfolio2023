import React, { useEffect, useRef, createRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useOutlet } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import SeoHelmet from "../components/seo/helmet";
import PageHeader from "../components/section/pageHeader";

// util
import windowScroll from "../hooks/util/windowScroll";
import setStickyPos from "../hooks/util/setStickyPos";

// state
import { pageState } from "../hooks/state/page";
import { scrollState } from "../hooks/state/scroll";
import { sectionState, sectionOffsetState } from "../hooks/state/section";

// data
import { getRootPathname, sitemapData } from "../data/sitemap";

export default function transContainer() {
  const nowPagePath = location.pathname;
  const currentOutlet = useOutlet();
  const containerRef = useRef();
  const [scrollPos, setScrollPos] = useRecoilState(scrollState);

  // 페이지 전환 컨텐츠 ref 설정
  const routesData = sitemapData.map(d => {
    return !d.external ? { ...d, nodeRef: createRef() } : d;
  });
  const { nodeRef } =
    routesData.find(route => route.path === nowPagePath) ?? {};

  // const pageCategory = useRecoilValue(pageState).cur;
  // const section = useRecoilValue(sectionState[pageCategory]);
  // const sectionOffset = useRecoilValue(sectionOffsetState[pageCategory]);

  const updateScrollPos = () => {
    if (containerRef?.current) {
      setScrollPos(containerRef.current.scrollTop);
      setStickyPos(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    console.log("now path: ", nowPagePath);
    updateScrollPos();
    windowScroll(containerRef.current, () => {
      updateScrollPos();
    });
  }, []);

  return (
    <>
      <SeoHelmet />
      <PageHeader scrollPos={scrollPos} />
      <TransitionGroup className="transPage-container w-full h-full overflow-hidden">
        <CSSTransition
          classNames={"transPage"}
          key={nowPagePath}
          nodeRef={nodeRef}
          timeout={3000}
          unmountOnExit
        >
          {state => {
            console.log(state);
            // if (state == '')
            return (
              <div className="scroll-container w-full" ref={containerRef}>
                {currentOutlet}
              </div>
            );
          }}
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}
