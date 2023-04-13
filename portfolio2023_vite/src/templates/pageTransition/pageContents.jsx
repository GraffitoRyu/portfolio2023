import { createRef } from "react";
import { useOutlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// data
import { sitemapData } from "../../hooks/recoil/sitemap";

export default function pageContents() {
  // 페이지 전환 ref 설정
  const routesData = sitemapData.map(d => {
    return !d.external ? { ...d, nodeRef: createRef() } : d;
  });

  // 페이지 전환 설정
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
        {state => (
          <div ref={nodeRef} className="transition-container w-full">
            {currentOutlet}
          </div>
        )}
      </CSSTransition>
    </TransitionGroup>
  );
}
