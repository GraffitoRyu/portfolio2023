import { useRecoilValue } from "recoil";
import { sitemap } from "../../hooks/recoil/sitemap";
import FooterSitemapBtn from "./footerSitemapBtn";

export default function pageFooter() {
  const sitemapData = useRecoilValue(sitemap);

  return (
    <footer id="pageFooter" className="page-footer around-padding">
      <div className="footer-card flex flex-col justify-between">
        <header className="footer-header flex justify-between">
          <h2 className="footer-title">
            <span className="page-title-text page-title-border-text flex items-center">Let's work</span>
            <span className="page-title-text page-title-filled-text flex items-center">together</span>
          </h2>
          <p className="published">published in April, 2023.</p>
        </header>
        <div className="footer-contents flex">
          <p className="footer-experience flex flex-col w-1/2">
            <span>Front-end Development</span>
            <span>Web Publish</span>
            <span>based in Daejeon, South Korea</span>
            <span>4+ years of experience</span>
          </p>
          <dl className="footer-info footer-sitemap">
            <dt>류대현</dt>
            {sitemapData.map((d, i) =>
              <FooterSitemapBtn data={d} key={`footer_sitemap_${i}`} />
            )}
          </dl>
        </div>
      </div>
    </footer>
  );
}