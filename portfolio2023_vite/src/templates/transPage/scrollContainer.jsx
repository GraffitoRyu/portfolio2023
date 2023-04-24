import { useEffect, useRef } from "react";
import { useOutlet } from "react-router-dom";
import { useSetRecoilState } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";

// util
import setStickyPos from "../../hooks/util/setStickyPos";
import windowScroll from "../../hooks/util/windowScroll";

export default function scrollContainer() {
  const scrollRef = useRef();
  const contentsOutlet = useOutlet();

  const setScrollPos = useSetRecoilState(scrollState);

  const updateScrollPos = () => {
    if (scrollRef?.current) {
      const pos = scrollRef.current.scrollTop;
      setScrollPos(pos);
      setStickyPos(pos);
    }
  };

  useEffect(() => {
    updateScrollPos();
    windowScroll(scrollRef.current, updateScrollPos);
  }, []);

  return (
    <div className="scroll-container w-full" ref={scrollRef}>
      {contentsOutlet}
    </div>
  );
}
