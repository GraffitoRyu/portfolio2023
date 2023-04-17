import { createRef } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// data
import { sitemapData } from "../../data/sitemap";

// util
import useInterval from "../../hooks/util/useInterval";

export default function pageContents() {
  // 페이지 전환 ref 설정
  const routesData = sitemapData.map(d => {
    return !d.external ? { ...d, nodeRef: createRef() } : d;
  });

  // 페이지 전환 설정
  const _html = document.querySelector("html");
  const location = useLocation();
  const currentOutlet = useOutlet();
  const rootDirectory = location.pathname;
  const { nodeRef } =
    routesData.find(route => route.path === rootDirectory) ?? {};

  return (
    <TransitionGroup className="transitions-wrapper page-contents-container w-full">
      <CSSTransition
        key={rootDirectory}
        classNames={"page"}
        nodeRef={nodeRef}
        timeout={1000}
        unmountOnExit
      >
        {state => {
          console.log("--", state);
          state == "entering" ? (_html.scrollTop = 0) : "";
          return (
            <div ref={nodeRef} className="transition-container w-full">
              {currentOutlet}
            </div>
          );
        }}
      </CSSTransition>
    </TransitionGroup>
  );
}

// function scrollToTop(to) {
//   const _html = document.querySelector('html');
//   const curPos = _html.scrollTop;
//   useInterval(() => {
//     _html.scrollTOp = curPos - easeOutQuart(curPos);
//   }, 1000)
// }

// function easeOutQuart(x) {
//   return 1 - Math.pow(1 - x, 4);
// }
