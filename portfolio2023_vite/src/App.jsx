import React, { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  Route,
  Routes,
  useOutlet,
  RouterProvider,
} from "react-router-dom";
import { useRecoilValue } from "recoil";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import * as Pages from "./templates/pageContents";

import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";
import { sitemap } from "./hooks/recoil/sitemap";

export default function App() {
  const rootDirectory = location.pathname;
  const curOutlet = useOutlet();

  const sitemapData = useRecoilValue(sitemap);
  const routes = sitemapData.filter((d) => !d.external);
  const { nodeRef } = routes.find((page) => page.path === rootDirectory) ?? {};
  const routerData = {
    path: routes[0].path,
    element: routes[0].components,
    children: routes
      .filter((d, i) => i > 0)
      .map((d) => ({
        index: d.path === "/",
        path: d.path === "/" ? undefined : d.path,
        element: d.components,
      })),
  };
  const router = createBrowserRouter(routerData);

  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, []);

  return (
    <RouterProvider router={router}>
      <TransitionGroup className="transitions-wrapper">
        <CSSTransition
          key={location.key}
          classNames={"page"}
          nodeRef={nodeRef}
          timeout={300}
          unmountOnExit
        >
          {(state) => <div className="test"></div>}
          {/* <Routes location={location}>
          <Route element={<Pages.Profile />} path={`${rootDirectory}`} />
          <Route
            element={<Pages.Projects />}
            path={`${rootDirectory}projects`}
          />
        </Routes> */}
        </CSSTransition>
      </TransitionGroup>
    </RouterProvider>
  );
}
