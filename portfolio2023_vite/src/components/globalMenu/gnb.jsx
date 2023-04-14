import { NavLink } from "react-router-dom";

// data
import { sitemapData } from "../../data/sitemap";

export default function gnb() {
  const btnClass = "gnb-btn items-center relative";

  return (
    <nav className="gnb flex items-center ml-auto">
      {sitemapData
        .filter(d => d.header && !d.external)
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
