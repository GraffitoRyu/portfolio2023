import { useState } from "react";
import { ReactComponent as BtnLink } from "../../svg/btn/link.svg";

export default function OpenLinkBtn(props) {
  const [hover, setHover] = useState("");
  const btnClassName = props.className;
  const linkUrl = props.url;

  return (
    <a
      className={`btn-box w-auto open-link-btn ${btnClassName} ${hover}`}
      target="_blank"
      href={linkUrl}
      onMouseEnter={() => setHover("hover link")}
      onMouseLeave={() => setHover("")}
    >
      <span className="btn-text">VIEW LIVE WEB</span>
      <BtnLink />
    </a>
  );
}
