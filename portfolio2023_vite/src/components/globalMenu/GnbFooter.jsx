import { useState } from "react";
import { NavLink } from "react-router-dom";

// svg
import { ReactComponent as IconExternal } from "../../svg/common/external_icon.svg";

export default function GnbFooter(props) {
  const d = props.data;
  const [hover, setHover] = useState("");
  const attr = {
    className: `footer-btn inline-flex items-center ${hover}`,
    onMouseEnter: () => setHover("hover"),
    onMouseLeave: () => setHover(""),
  };

  return (
    <dd className="w-full flex items-center">
      {d.external ? (
        <a href={d.path} target="_blank" {...attr}>
          <span>{d.name}</span>
          <figure>
            <IconExternal />
          </figure>
        </a>
      ) : (
        <GnbBtn data={d} attr={attr} />
      )}
    </dd>
  );
}

function GnbBtn(props) {
  const d = props.data;
  const attr = props.attr;

  return (
    <NavLink
      to={{ pathname: d.path, state: { fromPathname: location.pathname } }}
      {...attr}
    >
      <span>{d.name}</span>
    </NavLink>
  );
}
