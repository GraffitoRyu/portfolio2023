import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// data
import { cursor } from "../../hooks/state/cursor";

// state
import { accessDeviceSelector } from "../../hooks/state/accessDevice";

export default function customCursor() {
  // 마우스 장치 여부
  const [cursorHide, setCursorHide] = useState(true);
  const { mobile } = useRecoilValue(accessDeviceSelector);

  const [pos, setPos] = useRecoilState(cursor);
  const cursorRef = useRef();

  const updatePos = e => {
    if (e?.target) {
      let isInteractiveElement = "";
      if (e.target.closest("a")) isInteractiveElement = "link";
      else if (e.target.closest("button")) isInteractiveElement = "link";
      else if (
        e.target.innerText &&
        e.target.closest("h1,h2,h3,h4,h5,h6,p,dt,dd,time")
      )
        isInteractiveElement = "text";

      const d = {
        x: e.clientX,
        y: e.clientY,
        hover: isInteractiveElement,
      };
      setPos(d);
    }
  };

  useEffect(() => {
    setCursorHide(mobile);
  }, []);

  useEffect(() => {
    if (!mobile || matchMedia("(pointer:fine)").matches) {
      window.addEventListener("mousemove", updatePos);
      return () => {
        window.removeEventListener("mousemove", updatePos);
      };
    }
  }, [pos]);

  return (
    <div
      className={`cursor-container fixed ${pos.hover} ${
        cursorHide ? "opacity-0" : ""
      }`}
      ref={cursorRef}
      style={{ left: pos.x, top: pos.y }}
    >
      <figure className="cursor"></figure>
    </div>
  );
}
