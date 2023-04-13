import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import TransContainer from "./templates/pageTransition/transContainer";

// data
import { routerSet } from "./hooks/recoil/sitemap";

// util
import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

export default function App() {
  // 라우터 설정
  const routerData = useRecoilValue(routerSet);
  const customRouter = createBrowserRouter(routerData);

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
