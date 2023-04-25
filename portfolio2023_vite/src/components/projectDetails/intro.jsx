// components
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// components
import CloseBtn from "../buttons/close";
import OpenLinkBtn from "../buttons/openLink";
import TopBtn from "../buttons/top";

// state
import { detailsState } from "../../hooks/state/projectDetails";
import { scrollState } from "../../hooks/state/scroll";

// util
import getDetailsData from "../../hooks/util/getDetailsData";
import useComputedStyle from "../../hooks/util/useComputedStyle";
import windowResize from "../../hooks/util/windowResize";

export default function detailsIntro() {
  const [urlParams, setUrlParams] = useSearchParams();
  const setDetails = useSetRecoilState(detailsState);
  const d = getDetailsData(urlParams.get("category"));

  const closeDetails = () => {
    // update url params
    urlParams.delete("category");
    setUrlParams(urlParams);

    // close details
    setDetails({ open: false, category: undefined });
  };

  // 스크롤에 따라 타이틀을 fixed header로 이동
  const introRef = useRef();
  const titleCategory = useRef();
  const detailsTitleRef = useRef();
  const titleTextRef = useRef();
  const scrollPos = useRecoilValue(scrollState);
  const [initTitle, setInitTitle] = useState({
    y: 0,
    fontSize: 160,
  });

  const updateInitTitle = () => {
    if (introRef?.current) {
      const details_vh = introRef.current.clientHeight;
      const sectionPadding = useComputedStyle(introRef.current, "padding-top");
      const titleHeight = detailsTitleRef.current.clientHeight;
      const initFontSize = useComputedStyle(titleTextRef.current, "font-size");

      const initY = details_vh - titleHeight - sectionPadding * 2;
      setInitTitle({
        ...initTitle,
        y: initY,
        fontSize: initFontSize,
      });
    }
  };
  useEffect(() => {
    updateInitTitle();
    windowResize(updateInitTitle, 50);
  }, []);

  useEffect(() => {
    const top = scrollPos.details;
    const initY = initTitle.y;
    const initFontSize = initTitle.fontSize;

    if (titleCategory?.current) {
      const categoryWidth = titleCategory.current.clientWidth;
      const categoryFontSize = useComputedStyle(
        titleCategory.current,
        "font-size"
      );
      const deltaY = initY - top * 1.5;
      const posY = deltaY < 0 ? 0 : deltaY > initY ? initY : deltaY;

      const deltaSize = initFontSize - (top * 8) / categoryFontSize;
      const fontSize =
        deltaSize < categoryFontSize
          ? categoryFontSize
          : deltaSize > initFontSize
          ? initFontSize
          : deltaSize;
      if (top > 0) {
        detailsTitleRef.current.style.transform = `translate(0px, ${posY}px)`;
        titleTextRef.current.style.fontSize = `${fontSize}px`;
      } else {
        detailsTitleRef.current.removeAttribute("style");
      }
    }
  }, [scrollPos.details]);

  return (
    <section
      className="details-section details-intro around-padding w-full flex flex-col"
      ref={introRef}
    >
      <header className="details-header side-padding w-full flex items-center fixed left-0">
        <p className="page-category" ref={titleCategory}>
          프로젝트
        </p>
        <div
          className="details-title-container pointer-events-none absolute"
          ref={detailsTitleRef}
          // style={{
          //   transform: `translate(${detailsTitle.x}px, ${detailsTitle.y}px)`,
          // }}
        >
          <h1 className="details-title w-3/4" ref={titleTextRef}>
            {d?.summary?.title.split("\n").map((t, i) => (
              <span className="whitespace-nowrap" key={`title_${i}`}>
                {t}
              </span>
            ))}
          </h1>
          <p className="details-subtitle">{d?.summary?.desc}</p>
        </div>
        <CloseBtn
          className="details-close ml-auto"
          btnClickCallback={() => closeDetails()}
        />
      </header>
      <ul className="details-btn-list flex items-center justify-end mt-auto">
        <li>
          <OpenLinkBtn url={d?.service?.link} />
        </li>
        {/* <li className="fixed">
          <TopBtn />
        </li> */}
      </ul>
    </section>
  );
}
