import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";

import * as Pages from "./templates/pageContents";

import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

export default function app() {
  const rootDirectory = location.pathname;
  const nodeRef = useRef();

  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <SwitchTransition className="transition-wrapper relative">
            <CSSTransition
              key={rootDirectory}
              nodeRef={nodeRef}
              classNames={"page-move"}
              timeout={300}
              unmountOnExit
            >
              <Routes location={location}>
                <Route
                  element={<Pages.Profile />}
                  path={`${rootDirectory}`}
                  ref={nodeRef}
                />
                <Route
                  element={<Pages.Projects />}
                  path={`${rootDirectory}projects`}
                  ref={nodeRef}
                />
              </Routes>
            </CSSTransition>
          </SwitchTransition>
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}
