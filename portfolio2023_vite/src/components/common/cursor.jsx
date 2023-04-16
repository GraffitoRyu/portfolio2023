import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

// data
import { cursor } from "../../hooks/state/cursor";

// state
import { mobileSelector } from "../../hooks/state/mobile";

export default function customCursor() {
  // 마우스 장치 여부
  const [cursorHide, setCursorHide] = useState(true);
  const isMobile = useRecoilValue(mobileSelector);

  const [pos, setPos] = useRecoilState(cursor);
  const cursorRef = useRef();

  const updatePos = e => {
    if (e?.target) {
      let isInteractiveElement = "";
      if (e.target.closest("a")) isInteractiveElement = "link";
      else if (e.target.closest("button")) isInteractiveElement = "link";

      const d = {
        x: e.clientX,
        y: e.clientY,
        hover: isInteractiveElement,
      };
      setPos(d);
    }
  };

  useEffect(() => {
    setCursorHide(isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile || matchMedia("(pointer:fine)").matches) {
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
      style={{ top: pos.y, left: pos.x }}
    >
      <figure className="cursor"></figure>
    </div>
  );
}

function updateCursorPos() {}
