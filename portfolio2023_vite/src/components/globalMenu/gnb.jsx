import { NavLink, Link } from "react-router-dom";
import { useRecoilValue } from "recoil";

// data
import { sitemap } from "../../hooks/recoil/sitemap";

export default function gnb() {
  const sitemapData = useRecoilValue(sitemap).filter(d => !d.external);
  const btnClass = "gnb-btn items-center relative";

  return (
    <nav className="gnb flex items-center ml-auto">
      {sitemapData
        .filter(d => d.header)
        .map((d, i) => (
          <NavLink
            className={({ isActive, isPending }) =>
              isActive ? btnClass + " on" : btnClass
            }
            to={d.path}
            key={`gnb_${i}`}
            end={d.key.includes("projects")}
          >
            <span>{d.name}</span>
          </NavLink>
        ))}
    </nav>
  );
}
