import { useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

// components
import FooterSitemapBtn from "../globalMenu/footerSitemapBtn";

// data
import { sitemapData } from "../../data/sitemap";

// state
import { footerState } from "../../hooks/state/footer";

// util
import windowResize from "../../hooks/util/windowResize";
import { setCSSProps } from "../../hooks/util/cssProperty";

export default function pageFooter() {
  const footerRef = useRef();
  const setFooter = useSetRecoilState(footerState);

  const updateFooterPos = () => {
    if (footerRef?.current) {
      const offsetY = footerRef.current.offsetTop;
      setCSSProps("--footer-offset-y", `${offsetY}px`);
      setFooter(prev => ({ ...prev, offset: offsetY }));
    }
  };

  useEffect(() => {
    updateFooterPos();
    windowResize(updateFooterPos, 20);
  }, []);

  return (
    <footer
      id="pageFooter"
      className="page-footer page-bg w-full h-full lg:h-screen"
      ref={footerRef}
    >
      <div className="footer-card flex flex-col lg:justify-between w-full h-full">
        <header className="footer-header sm:flex justify-between">
          <h2 className="footer-title">
            <span className="page-title-text page-title-border-text flex items-center">
              Let's work
            </span>
            <span className="page-title-text page-title-filled-text flex items-center">
              together
            </span>
          </h2>
        </header>
        <div className="footer-contents flex flex-wrap lg:flex-nowrap w-full flex-1 lg:flex-none">
          <dl className="footer-experience flex flex-col w-full lg:w-1/2 mb-auto lg:mb-0">
            <dt>Ryu, Daehyeon</dt>
            <dd>Front-end Development</dd>
            <dd>Web Publish</dd>
            <dd>based in Daejeon, South Korea</dd>
            <dd>4+ years of experience</dd>
          </dl>
          <dl className="footer-info footer-sitemap w-1/2 lg:w-1/4">
            {/* <dt>류대현</dt> */}
            {sitemapData
              .filter(d => d.header)
              .map((d, i) => (
                <FooterSitemapBtn data={d} key={`footer_sitemap_${i}`} />
              ))}
          </dl>
          <dl className="footer-info footer-sitemap w-1/2 lg:w-1/4">
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
