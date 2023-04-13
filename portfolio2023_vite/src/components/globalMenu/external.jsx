import { useRecoilValue } from "recoil";

// data
import { sitemap } from "../../hooks/recoil/sitemap";

// svg
import { ReactComponent as IconGithub } from "../../svg/header/github_icon.svg";
import { ReactComponent as IconNotion } from "../../svg/header/notion_icon.svg";

export default function externalMenu() {
  const externalData = useRecoilValue(sitemap).filter(
    d => d.external && d.header
  );
  const externalIcon = (code, options) => {
    if (code == "github") return <IconGithub {...options} />;
    else if (code == "notion") return <IconNotion {...options} />;
  };

  return externalData.map((d, i) => (
    <div className="util-item" key={`external_${i}`}>
      <a
        href={d.path}
        target="_blank"
        className="util-btn external-btn flex items-center justify-center"
      >
        <figure className="util-icon">
          {externalIcon(d.code, {
            className: "header-icon",
          })}
        </figure>
      </a>
    </div>
  ));
}
