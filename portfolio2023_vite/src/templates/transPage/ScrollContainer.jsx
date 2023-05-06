import { useEffect, useRef, useState } from "react";
// import { useOutlet } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

// state
import { pageState } from "../../hooks/state/page";
import { scrollState } from "../../hooks/state/scroll";
import { detailsState } from "../../hooks/state/projectDetails";

// util
import setStickyPos from "../../hooks/util/setStickyPos";
import windowScroll from "../../hooks/util/windowScroll";

export default function ScrollContainer(props) {
  const scrollRef = useRef();
  const contentsOutlet = props.contents;
  // const contentsOutlet = useOutlet();

  const page = useRecoilValue(pageState);
  const details = useRecoilValue(detailsState);
  const [fixArea, setFixArea] = useState("");
  const [transPage, setTransPage] = useState("");

  const setScrollPos = useSetRecoilState(scrollState);

  const updateScrollPos = () => {
    const pos = scrollRef?.current?.scrollTop;
    if (isNaN(pos)) return;
    setScrollPos(prev => ({ ...prev, page: pos }));
    setStickyPos(pos);
  };

  useEffect(() => {
    setFixArea(page.cur == "projects" && details.open ? "fix-area" : "");
  }, [page, details]);

  useEffect(() => {
    // 페이지 전환 시작 시, 현재 화면 유지
    if (page.transStep == "enter") setTransPage("overflow-hidden");
    // 페이지 전환 시, 스크롤 초기화
    if (scrollRef?.current && page.transStep == "exited") {
      scrollRef.current.scrollTop = 0;
      setTransPage("");
    }
  }, [page.transStep]);

  useEffect(() => {
    // 스크롤 위치값 업데이트
    updateScrollPos();
    windowScroll(scrollRef.current, updateScrollPos);
  }, []);

  return (
    <div
      className={`scroll-container custom-scrollbar w-full ${fixArea} ${transPage}`}
      ref={scrollRef}
    >
      {contentsOutlet}
    </div>
  );
}
