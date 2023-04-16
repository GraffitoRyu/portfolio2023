import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";

// components
import TransContainer from "./templates/pageTransition/transContainer";

// data
import { routerSet } from "./data/sitemap";

// state
import { mobileSelector } from "./hooks/state/mobile";
import { appleSelector } from "./hooks/state/apple";
import { tabletSelector } from "./hooks/state/tablet";

// util
import checkScreenSize from "./hooks/util/checkScreenSize";
import windowResizeCheck from "./hooks/util/windowResize";

export default function App() {
  // 라우터 설정
  const customRouter = createBrowserRouter(routerSet);
  const [isMobile, setMobile] = useRecoilState(mobileSelector);
  const [isAppleWeb, setApple] = useRecoilState(appleSelector);
  const [isTablet, setTablet] = useRecoilState(tabletSelector);

  const checkDevice = async () => {
    console.log(`----------------- check device --------------`);

    document.querySelector("html").classList.remove("mobile");
    document.querySelector("html").classList.remove("apple-web");
    document.querySelector("html").classList.remove("tablet");
    if (isMobile) document.querySelector("html").classList.add("mobile");
    if (isAppleWeb) document.querySelector("html").classList.add("apple-web");
    if (isTablet) document.querySelector("html").classList.add("tablet");

    await setMobile();
    await setApple();
    await setTablet(isMobile);

    console.log("isMobile:", isMobile);
    console.log("isAppleWeb:", isAppleWeb);
    console.log("isTablet:", isTablet);
  };

  useEffect(() => {
    checkDevice();
    windowResizeCheck(checkDevice, 20);
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
