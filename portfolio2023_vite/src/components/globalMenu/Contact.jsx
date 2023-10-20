import { useState } from "react";

// svg
import IconExternal from "../../svg/common/external_icon.svg";

export default function ContactBtn(props) {
  const d = props.data;
  const [hover, setHover] = useState("");

  return (
    <dd className="w-full flex-items-center">
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
        <button
          className={`footer-btn inline-flex items-center ${hover}`}
          type="button"
          onMouseEnter={() => setHover("hover")}
          onMouseLeave={() => setHover("")}
        >
          <span>{d.name}</span>
        </button>
      )}
    </dd>
  );
}
