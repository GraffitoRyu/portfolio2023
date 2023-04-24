import React, { createRef } from "react";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import ScrollContainer from "./scrollContainer";

// data
import { sitemapData } from "../../data/sitemap";

export default function transContainer() {
  const loc = useLocation();
  const nowPagePath = loc.pathname;

  // 페이지 전환 컨텐츠 ref 설정
  const routesData = sitemapData.map(d => {
    return !d.external ? { ...d, nodeRef: createRef() } : d;
  });
  const { nodeRef } = routesData.find(r => r.path === nowPagePath) ?? {};

  return (
    <TransitionGroup className="trans-container w-full h-full overflow-hidden">
      <CSSTransition
        classNames="trans"
        key={nowPagePath}
        nodeRef={nodeRef}
        timeout={3000}
        // unmountOnExit
      >
        {state => {
          console.log(state);
          // 스크롤 컨테이너 분리; 페이지 이동 시 스크롤 안먹힘 수정 필요
          return (
            <div className="w-full h-full overflow-hidden" ref={nodeRef}>
              <ScrollContainer />
            </div>
          );
        }}
      </CSSTransition>
    </TransitionGroup>
  );
}
