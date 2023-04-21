import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

// components
import HeaderTimer from "../headTimer/timer";
import GnbMenu from "../globalMenu/gnb";
import ExternalMenu from "../globalMenu/external";
import ThemeMenu from "../globalMenu/theme";

// state
import { headerState } from "../../hooks/state/header";

// util
import windowResize from "../../hooks/util/windowResize";
import { getCSSProps, setCSSProps } from "../../hooks/util/cssProperty";

export default function pageHeader(props) {
  const headerRef = useRef();
  const setHeader = useSetRecoilState(headerState);

  const updateHeaderHeight = () => {
    if (headerRef?.current) {
      const height = headerRef.current.offsetHeight;
      setCSSProps("--header-height", `${height}px`);
      setHeader(prev => ({ ...prev, height: height }));
    }
  };

  useEffect(() => {
    updateHeaderHeight();
    windowResize(updateHeaderHeight, 20);
  }, []);

  return (
    <header
      id="pageHeader"
      className="page-header flex side-padding fixed w-full left-0"
      ref={headerRef}
    >
      <HeaderTimer />
      {/* <div className="flex items-center" style={{ color: "#fff" }}>
        headerHeight: {getCSSProps("--header-height")} / footerOffset:
        {getCSSProps("--footer-offset-y")} / scrollPos: {props.scrollPos}
      </div> */}
      <GnbMenu />
      <div className="util-menu flex items-center">
        <ThemeMenu />
        <ExternalMenu />
      </div>
    </header>
  );
}
