import { useState } from "react";
import { Link } from "react-router-dom";

// svg
import { ReactComponent as IconExternal } from "../../svg/common/external_icon.svg";

export default function GnbFooter(props) {
  const d = props.data;
  const [hover, setHover] = useState("");

  return (
    <dd className="w-full flex items-center">
      {d.external ? (
        <a
          className={`footer-btn inline-flex items-center ${hover}`}
          href={d.path}
          target="_blank"
          onMouseEnter={() => setHover("hover")}
          onMouseLeave={() => setHover("")}
        >
          <span>{d.name}</span>
          <figure>
            <IconExternal />
          </figure>
        </a>
      ) : (
        <Link
          className={`footer-btn inline-flex items-center ${hover}`}
          to={d.path}
          onMouseEnter={() => setHover("hover")}
          onMouseLeave={() => setHover("")}
        >
          <span>{d.name}</span>
        </Link>
      )}
    </dd>
  );
}
