import { useState } from "react";
import { ReactComponent as BtnClose } from "../../svg/btn/close.svg";

export default function CloseBtn(props) {
  const [hover, setHover] = useState("");
  const btnClassName = props.className;
  const btnClick = props.btnClickCallback;
  return (
    <button
      className={`btn-box close-btn ${btnClassName} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => btnClick()}
    >
      <BtnClose />
    </button>
  );
}
