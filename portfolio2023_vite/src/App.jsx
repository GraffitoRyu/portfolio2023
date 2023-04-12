import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// components
import ContentsRoot from "./roots/contentsRoot";

// data
import { routerSet } from "./hooks/recoil/sitemap";

// util
import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

export default function App() {
  const routerData = useRecoilValue(routerSet);
  const customRouter = createBrowserRouter(routerData);

  useEffect(() => {
    checkScreenSize();
    windowResizeCheck(checkScreenSize, 20);
  }, []);

  return (
    <RouterProvider router={customRouter}>
      {/** 페이지 전환 컨테이너 컴포넌트화 */}
      <ContentsRoot />
    </RouterProvider>
  );
}
