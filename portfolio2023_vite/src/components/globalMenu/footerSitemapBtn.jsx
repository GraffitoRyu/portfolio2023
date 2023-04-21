import { Link } from "react-router-dom";

// svg
import { ReactComponent as IconExternal } from "../../svg/common/external_icon.svg";
import { useState } from "react";

export default function footerSitemapBtn(props) {
  const d = props.data;

  const [hover, setHover] = useState(false);

  return (
    <dd className="w-full flex items-center">
      {d.external ? (
        <a
          className={`footer-sitemap-btn flex items-center ${
            hover ? "hover" : ""
          }`}
          href={d.path}
          target="_blank"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>{d.name}</span>
          <figure>
            <IconExternal />
          </figure>
        </a>
      ) : (
        <Link
          className={`footer-sitemap-btn flex items-center ${
            hover ? "hover" : ""
          }`}
          to={d.path}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>{d.name}</span>
        </Link>
      )}
    </dd>
  );
}
