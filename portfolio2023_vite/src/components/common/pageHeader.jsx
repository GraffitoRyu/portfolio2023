import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

// components
import HeaderTimer from "../headTimer/timer";
import GnbMenu from "../globalMenu/gnb";
import ExternalMenu from "../globalMenu/external";
import ThemeMenu from "../globalMenu/theme";

// state
import { headerState } from "../../hooks/state/header";

// util
import saveCssHeaderHeight from "../../hooks/util/saveCssHeaderHeight";
import windowResizeCheck from "../../hooks/util/windowResize";

export default function pageHeader() {
  const headerRef = useRef();
  const [header, setHeader] = useRecoilState(headerState);

  const updateHeaderHeight = () => {
    if (headerRef?.current) {
      const height = headerRef.current.clientHeight;
      saveCssHeaderHeight(height);
      setHeader(prev => ({ ...prev, height: height }));
    }
  };

  useEffect(() => {
    updateHeaderHeight();
    windowResizeCheck(updateHeaderHeight, 20);
  }, [header.stickyPos]);

  return (
    <header
      id="pageHeader"
      className="page-header flex side-padding fixed w-full left-0"
      ref={headerRef}
      style={{ transform: `translateY(${header.stickyPos}px)` }}
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
