import { NavLink } from "react-router-dom";

// data
import { sitemapData } from "../../data/sitemap";
import { useState } from "react";
import getPageDataBySitemap from "../../hooks/util/getPageDataBySitemap";

export default function gnb() {
  const [gnbHover, setGnbHover] = useState({
    profile: false,
    projects: false,
  });
  const btnClass = `gnb-btn items-center relative`;
  const pageData = getPageDataBySitemap();

  return (
    <nav className="gnb flex items-center ml-auto">
      {sitemapData
        .filter(d => d.header && !d.external)
        .map(d => (
          <NavLink
            className={({ isActive, isPending }) => {
              const active =
                (isActive && !gnbHover[d.code]) || pageData.code == d.code
                  ? " on"
                  : "";
              const hover = !active && gnbHover[d.code] ? " hover" : "";
              return btnClass + active + hover;
            }}
            to={d.path}
            key={d.code}
            end={d.key.includes("projects")}
            onMouseEnter={() => setGnbHover({ [d.code]: true })}
            onMouseLeave={() => setGnbHover({ [d.code]: false })}
          >
            <span>{d.name}</span>
          </NavLink>
        ))}
    </nav>
  );
}
