import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// components
import TransContainer from "./templates/pageTransition/transContainer";

// data
import { routerSet } from "./data/sitemap";

// state
import { accessDeviceSelector } from "./hooks/state/accessDevice";

// util
import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

export default function App() {
  // 라우터 설정
  const customRouter = createBrowserRouter(routerSet);
  const setDevice = useSetRecoilState(accessDeviceSelector);

  useEffect(() => {
    setDevice();
    windowResizeCheck(() => setDevice(), 20);
  }, []);

  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, []);

  return (
    <RouterProvider router={customRouter}>
      <TransContainer />
    </RouterProvider>
  );
}
