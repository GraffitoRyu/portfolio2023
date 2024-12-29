import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useRecoilValue, useSetRecoilState } from "recoil";

// components
import GnbFooter from "../globalMenu/GnbFooter";
import ContactBtn from "../globalMenu/Contact";

// data
import { sitemapData } from "../../data/sitemap";

// state
// import { footerState } from "../../hooks/state/footer";
import { scrollState } from "../../hooks/state/scroll";
import { pageState } from "../../hooks/state/page";

// util
import windowResize from "../../hooks/util/windowResize";
import { setCSSProps } from "../../hooks/util/cssProperty";
import setStickyPos from "../../hooks/util/setStickyPos";
import useRange from "../../hooks/util/useRange";

export default function PageFooter() {
  const footerRef = useRef();
  const page = useRecoilValue(pageState);
  const scroll = useRecoilValue(scrollState);

  const ft_gnb = sitemapData.filter(d => d.key.includes("sitemap") && d.header);
  const ft_contact = sitemapData.filter(d => d.key.includes("contact"));

  const [footerTitle, setFooterTitle] = useState({
    yRatio: 0,
  });
  const { ref: sectionViewRef, inView } = useInView();
  const footerViewRef = useCallback(
    node => {
      footerRef.current = node;
      sectionViewRef(node);
    },
    [sectionViewRef]
  );

  const updateTitleParallax = (top = scroll.page) => {
    const _ft = footerRef?.current;
    if (!inView || !_ft) return;

    const _vh = _ft.clientHeight;
    const f_top = _ft.offsetTop;
    if (isNaN(_vh) || !_vh) return;

    const y_r = ((top - f_top) / _vh) * 100;
    setFooterTitle({ yRatio: useRange(y_r, -100, 0) });
  };

  const updateFooterPos = () => {
    const offsetY = footerRef?.current?.offsetTop;
    if (isNaN(offsetY)) return;
    setCSSProps(`--footer-offset-y-${page.cur}`, `${offsetY}px`);
    updateTitleParallax();
  };

  useEffect(() => {
    // initiate
    updateFooterPos();
    windowResize(() => updateFooterPos(), 20);
  }, []);

  useEffect(() => {
    // 페이지 변경 시, 푸터 위치 업데이트
    if (page.transStep == "entered") updateFooterPos();
    setStickyPos(scroll.page, page.cur);
  }, [page, inView]);

  useEffect(() => {
    if (page.transStep == "entered") updateTitleParallax();
  }, [scroll.page]);

  return (
    <footer
      id="pageFooter"
      className="page-footer page-bg w-full h-full overflow-hidden"
      ref={footerViewRef}
    >
      <div className="footer-card flex flex-col lg:justify-between w-full h-full">
        <header className="footer-header sm:flex justify-between">
          <h2
            className="footer-title"
            viewport={inView ? "in" : "out"}
            style={{ transform: `translateY(${footerTitle.yRatio}%)` }}
          >
            <span className="page-title-text page-title-border-text flex items-center">
              Let's work
            </span>
            <span className="page-title-text page-title-filled-text flex items-center">
              together
            </span>
          </h2>
        </header>
        <div className="footer-contents mt-auto flex flex-wrap xl:flex-nowrap w-full xl:align-start">
          <dl className="footer-experience flex flex-col w-full xl:w-1/2 mb-auto lg:mb-0">
            <dt>Ryu, Daehyeon</dt>
            <dd>UIUX Engineering</dd>
            <dd>Front-end Development</dd>
            <dd>based in Daejeon, South Korea</dd>
            <dd>4+ years of experience</dd>
          </dl>
          <dl className="footer-info footer-sitemap w-1/2 xl:w-1/4">
            <dt className="capitalize">portfolio</dt>
            {ft_gnb.map((d, i) => (
              <GnbFooter data={d} key={`footer_sitemap_${i}`} />
            ))}
          </dl>
          <dl className="footer-info footer-sitemap w-1/2 xl:w-1/4">
            <dt className="capitalize">contact</dt>
            {ft_contact.map((d, i) => (
              <ContactBtn data={d} key={`footer_sitemap_${i}`} />
            ))}
          </dl>
        </div>
      </div>
    </footer>
  );
}
