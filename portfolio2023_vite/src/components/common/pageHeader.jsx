import { useEffect } from "react";

// components
import HeaderTimer from "../headTimer/timer";
import GnbMenu from "../globalMenu/gnb";
import ExternalMenu from "../globalMenu/external";
import ThemeMenu from "../globalMenu/theme";

// util
import checkHeaderHeight from "../../hooks/util/checkHeaderHeight";
import windowResizeCheck from "../../hooks/util/windowResize";

export default function pageHeader() {
  useEffect(() => {
    checkHeaderHeight();
    windowResizeCheck(checkHeaderHeight, 20);
  }, []);

  return (
    <header
      id="pageHeader"
      className="page-header flex side-padding sticky w-full top-0"
    >
      <HeaderTimer />
      <GnbMenu />
      <div className="util-menu flex items-center">
        <ThemeMenu />
        <ExternalMenu />
      </div>
    </header>
  );
}
