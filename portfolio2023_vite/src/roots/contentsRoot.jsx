import { useEffect, createRef } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useOutlet, useLocation } from "react-router-dom";
import {
  SwitchTransition,
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

import { sitemapData } from "../hooks/recoil/sitemap";

const routesData = sitemapData.map(d => {
  return !d.external ? { ...d, nodeRef: createRef() } : d;
});

export default function contentsRoot() {
  const location = useLocation();
  const curOutlet = useOutlet();
  const rootDirectory = location.pathname;
  console.log("pathname:", rootDirectory);

  const { nodeRef } =
    routesData.find(route => route.path === rootDirectory) ?? {};

  useEffect(() => {}, []);

  return (
    <SwitchTransition className="transitions-wrapper">
      <CSSTransition
        key={rootDirectory}
        classNames={"page"}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        {state => (
          <div ref={nodeRef} className="transition-container">
            {curOutlet}
          </div>
        )}
      </CSSTransition>
    </SwitchTransition>
  );
}
