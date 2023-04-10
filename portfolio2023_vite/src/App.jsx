import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { HelmetProvider } from "react-helmet-async";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import * as Pages from "./templates/pageContents";

import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

import "./scss/page_transition.scss";

export default function app() {
  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, []);

  return (
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <TransitionGroup className="transition-wrapper relative">
            <CSSTransition
              key={location.pathname}
              classNames={"page-move"}
              timeout={300}
            >
              <Routes location={location}>
                <Route element={<Pages.Profile />} path="/" />
                <Route element={<Pages.Projects />} path="/projects" />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  );
}
