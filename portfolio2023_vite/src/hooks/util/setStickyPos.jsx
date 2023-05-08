// util
import { getCSSProps, setCSSProps } from "./cssProperty";

export default function setStickyPos(scrollPos, pageName) {
  if (!isNaN(scrollPos)) {
    const headerHeight = getCSSProps("--header-height");
    const footerOffset = getCSSProps(`--footer-offset-y-${pageName}`);
    const footerTop = footerOffset - headerHeight;
    const y = footerTop - scrollPos;
    const stickyPos = y > 0 ? 0 : y;

    setCSSProps("--header-sticky-pos", `${stickyPos}px`);

    return stickyPos;
  }
}
