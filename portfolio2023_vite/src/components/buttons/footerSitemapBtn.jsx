import { Link } from "react-router-dom";

// svg
import { ReactComponent as IconExternal } from "../../svg/common/external_icon.svg";

export default function footerSitemapBtn(props) {
  const d = props.data;

  return (
    <dd className="w-full flex items-center">
      {d.external ? (
        <a
          className="footer-sitemap-btn flex items-center"
          href={d.path}
          target="_blank"
        >
          <span>{d.name}</span>
          <figure>
            <IconExternal />
          </figure>
        </a>
      ) : (
        <Link className="footer-sitemap-btn flex items-center" to={d.path}>
          <span>{d.name}</span>
        </Link>
      )}
    </dd>
  );
}
