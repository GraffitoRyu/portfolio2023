import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// components
import FooterSitemapBtn from "../buttons/footerSitemapBtn";

// data
import { sitemapData } from "../../data/sitemap";
import { scrollState } from "../../hooks/state/scroll";

// state
import { headerState } from "../../hooks/state/header";
import { footerState } from "../../hooks/state/footer";

// util
import windowResizeCheck from "../../hooks/util/windowResize";

export default function pageFooter() {
  const footerRef = useRef();
  const [footer, setFooter] = useRecoilState(footerState);

  const updateFooterPos = () => {
    if (footerRef?.current) {
      setFooter({ offset: footerRef.current.offsetTop });
    }
  };

  useEffect(() => {
    updateFooterPos();
    windowResizeCheck(updateFooterPos, 20);
  }, [footer.offset]);

  return (
    <footer
      id="pageFooter"
      className="page-footer around-padding page-bg w-full lg:h-screen"
      ref={footerRef}
    >
      <div className="footer-card flex flex-col justify-between w-full lg:h-full">
        <header className="footer-header sm:flex justify-between">
          <h2 className="footer-title">
            <span className="page-title-text page-title-border-text flex items-center">
              Let's work
            </span>
            <span className="page-title-text page-title-filled-text flex items-center">
              together
            </span>
          </h2>
          <p className="published">published in April, 2023.</p>
        </header>
        <div className="footer-contents sm:flex w-full">
          <p className="footer-experience flex flex-col w-1/2">
            <span>Front-end Development</span>
            <span>Web Publish</span>
            <span>based in Daejeon, South Korea</span>
            <span>4+ years of experience</span>
          </p>
          <dl className="footer-info footer-sitemap w-1/4">
            {/* <dt>류대현</dt> */}
            {sitemapData
              .filter(d => d.header)
              .map((d, i) => (
                <FooterSitemapBtn data={d} key={`footer_sitemap_${i}`} />
              ))}
          </dl>
          <dl className="footer-info footer-sitemap w-1/4">
            {/* <dt>Contact</dt> */}
            {sitemapData.map((d, i) => (
              <FooterSitemapBtn data={d} key={`footer_sitemap_${i}`} />
            ))}
          </dl>
        </div>
      </div>
    </footer>
  );
}
