import { useEffect, useState } from "react";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// data
import { sitemapData } from "../../data/sitemap";

// state
import { pageState } from "../../hooks/state/page";

// util
import getPageDataBySitemap from "../../hooks/util/getPageDataBySitemap";

export default function Gnb() {
  return (
    <nav className="gnb flex items-center ml-auto">
      {sitemapData
        .filter(d => d.header && !d.external)
        .map(d => (
          <GnbBtn data={d} key={d.code} />
        ))}
    </nav>
  );
}

function GnbBtn(props) {
  const d = props.data;

  const [gnbHover, setGnbHover] = useState({
    profile: false,
    projects: false,
  });
  const btnClass = `gnb-btn items-center relative`;
  const pageData = getPageDataBySitemap();

  const setPageState = useSetRecoilState(pageState);
  const resolved = useResolvedPath(d.path);
  const match = useMatch({ path: resolved.pathname, end: true });

  useEffect(() => {
    setPageState(prev => ({ ...prev, cur: d.code }));
  }, [match]);

  return (
    <NavLink
      className={({ isActive, isPending }) => {
        const active =
          (isActive && !gnbHover[d.code]) || pageData.code == d.code
            ? " on"
            : "";
        const hover = !active && gnbHover[d.code] ? " hover" : "";
        return btnClass + active + hover;
      }}
      to={{
        pathname: d.path,
        state: { fromPathname: location.pathname },
      }}
      end={d.key.includes("projects")}
      onMouseEnter={() => setGnbHover({ [d.code]: true })}
      onMouseLeave={() => setGnbHover({ [d.code]: false })}
    >
      <span>{d.name}</span>
    </NavLink>
  );
}
