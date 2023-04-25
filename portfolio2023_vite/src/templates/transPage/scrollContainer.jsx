import { useEffect, useRef, useState } from "react";
import { useOutlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

// state
import { scrollState } from "../../hooks/state/scroll";

// util
import setStickyPos from "../../hooks/util/setStickyPos";
import windowScroll from "../../hooks/util/windowScroll";
import { detailsState } from "../../hooks/state/projectDetails";
import { pageState } from "../../hooks/state/page";

export default function scrollContainer() {
  const scrollRef = useRef();
  const contentsOutlet = useOutlet();

  const currentPage = useRecoilValue(pageState);
  const details = useRecoilValue(detailsState);
  const [fixArea, setFixArea] = useState("");

  const setScrollPos = useSetRecoilState(scrollState);

  const updateScrollPos = () => {
    if (scrollRef?.current) {
      const pos = scrollRef.current.scrollTop;
      setScrollPos(prev => ({ ...prev, page: pos }));
      setStickyPos(pos);
    }
  };

  useEffect(() => {
    setFixArea(currentPage.cur == "projects" && details.open ? "fix-area" : "");
  }, [currentPage, details]);

  useEffect(() => {
    updateScrollPos();
    windowScroll(scrollRef.current, updateScrollPos);
  }, []);

  return (
    <div
      className={`scroll-container custom-scrollbar w-full ${fixArea}`}
      ref={scrollRef}
    >
      {contentsOutlet}
    </div>
  );
}
