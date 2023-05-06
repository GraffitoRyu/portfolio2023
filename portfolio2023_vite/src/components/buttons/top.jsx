import { useState } from "react";
import { ReactComponent as BtnTop } from "../../svg/btn/top.svg";

export default function TopBtn(props) {
  const [hover, setHover] = useState("");
  const btnClassName = props.className;
  const btnClick = props.btnClickCallback;
  return (
    <button
      className={`btn-box top-btn svg-h-auto ${btnClassName} ${hover}`}
      onMouseEnter={() => setHover("hover")}
      onMouseLeave={() => setHover("")}
      onClick={() => {
        btnClick();
        console.log("click top btn!");
      }}
    >
      <BtnTop />
    </button>
  );
}
