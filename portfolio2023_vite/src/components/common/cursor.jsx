import { useEffect, useRef } from "react";

// data
import { cursor } from "../../hooks/recoil/cursor.data";
import { useRecoilState } from "recoil";

export default function customCursor() {
  // 마우스 장치 여부
  if (!matchMedia("(pointer:fine)").matches) return;

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
      console.log(d);
      setPos(d);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", updatePos);
    return () => {
      window.removeEventListener("mousemove", updatePos);
    };
  }, [pos]);

  return (
    <div
      className={`cursor-container fixed ${pos.hover}`}
      ref={cursorRef}
      style={{ top: pos.y, left: pos.x }}
    >
      <figure className="cursor"></figure>
    </div>
  );
}

function updateCursorPos() {}
