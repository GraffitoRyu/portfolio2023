import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import PageTemplate from "./templates/transPage/pageTemplate";

// data
import { routerSet } from "./data/sitemap";

// state
import { accessDeviceSelector } from "./hooks/state/accessDevice";

// util
import windowResizeCheck from "./hooks/util/windowResize";
import { setCSSProps } from "./hooks/util/cssProperty";

export default function App() {
  // 라우터 설정
  const customRouter = createBrowserRouter(routerSet);
  const setDevice = useSetRecoilState(accessDeviceSelector);

  const updateScreenSize = () => {
    setCSSProps("--screen-size-x", `${window.innerWidth}px`);
    setCSSProps("--screen-size-y", `${window.innerHeight}px`);
    setCSSProps(
      "--root-font-size",
      getComputedStyle(document.querySelector("html")).getPropertyValue(
        "font-size"
      )
    );
  };

  useEffect(() => {
    setDevice();
    windowResizeCheck(() => setDevice(), 20);
  }, []);

  useEffect(() => {
    updateScreenSize();
    windowResizeCheck(updateScreenSize, 20);
  }, []);

  return (
    <RouterProvider router={customRouter}>
      <PageTemplate />
    </RouterProvider>
  );
}
