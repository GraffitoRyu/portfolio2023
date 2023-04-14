import { useEffect } from "react";

// util
import checkHeaderHeight from "../../hooks/util/checkHeaderHeight";

// components
import HeaderTimer from "../headTimer/timer";
import GnbMenu from "../globalMenu/gnb";
import ExternalMenu from "../globalMenu/external";
import ThemeMenu from "../globalMenu/theme";

export default function pageHeader() {
  useEffect(() => {
    checkHeaderHeight();
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
