import { useState } from "react";
import { ReactComponent as BtnClose } from "../../svg/btn/close.svg";

export default function closeBtn(props) {
  const [hover, setHover] = useState(false);
  const btnClassName = props.className;
  const btnType = props.type;
  const btnClick = props.btnClickCallback;
  return (
    <button
      className={`btn-box close-btn ${btnClassName} ${hover ? "hover" : ""}`}
      btn-type={btnType}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => btnClick()}
    >
      <BtnClose />
    </button>
  );
}
