import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

// components
import PageTemplate from "./templates/transPage/PageTemplate";

// data
import { routerSet } from "./data/sitemap";

// state
import { accessDeviceSelector } from "./hooks/state/accessDevice";
import { pageState } from "./hooks/state/page";

// util
import windowResizeCheck from "./hooks/util/windowResize";
import { setCSSProps } from "./hooks/util/cssProperty";
import changeOrientation from "./hooks/util/changeOrientation";

export default function App() {
  // 라우터 설정
  const customRouter = createBrowserRouter(routerSet);
  const setDevice = useSetRecoilState(accessDeviceSelector);
  const [page, setPageState] = useRecoilState(pageState);

  const updateScreenSize = () => {
    setCSSProps("--screen-size-x", `${window.innerWidth}px`);
    setCSSProps("--screen-size-y", `${window.innerHeight}px`);
  };

  useEffect(() => {
    setDevice();
    updateScreenSize();
    changeOrientation(() => setDevice());
    windowResizeCheck(() => setDevice(), 20);
    windowResizeCheck(() => updateScreenSize(), 20);

    if (!page.init) setPageState(prev => ({ ...prev, init: true }));
  }, []);

  return (
    <RouterProvider router={customRouter}>
      <PageTemplate />
    </RouterProvider>
  );
}
