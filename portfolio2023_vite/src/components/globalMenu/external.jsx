// data
import { useState } from "react";
import { sitemapData } from "../../data/sitemap";

// svg
import { ReactComponent as IconGithub } from "../../svg/header/github_icon.svg";
import { ReactComponent as IconNotion } from "../../svg/header/notion_icon.svg";

export default function externalMenu() {
  const externalData = sitemapData.filter(d => d.external && d.header);
  const [hover, setHover] = useState({
    github: false,
    notion: false,
  });
  const externalIcon = (code, options) => {
    if (code == "github") return <IconGithub {...options} />;
    else if (code == "notion") return <IconNotion {...options} />;
  };

  return externalData.map(d => (
    <div
      className="util-item"
      key={d.code}
      onMouseEnter={() => setHover({ [d.code]: true })}
      onMouseLeave={() => setHover({ [d.code]: false })}
    >
      <a
        href={d.path}
        target="_blank"
        className={`util-btn external-btn flex items-center justify-center ${
          hover[d.code] ? "hover" : ""
        }`}
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
