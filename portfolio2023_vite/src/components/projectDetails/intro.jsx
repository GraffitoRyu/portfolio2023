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
import { easeOutQuart } from "../../hooks/util/cubicBezier";

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
  const subtitleTextRef = useRef();
  const scrollPos = useRecoilValue(scrollState);
  const [mobileView, setMobileView] = useState(false);
  const [fixedTitle, setFixedTitle] = useState("");
  const [initTitle, setInitTitle] = useState({
    y: 0,
    fontSize: 160,
  });

  const updateInitTitle = () => {
    const screenX = window.innerWidth;
    if (screenX < 1024) {
      setMobileView(true);
      return;
    }
    setMobileView(false);
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

  const cutRange = (v, min, max) => {
    return v < min ? min : v > max ? max : v;
  };

  useEffect(() => {
    updateInitTitle();
    windowResize(updateInitTitle, 50);
  }, []);

  useEffect(() => {
    if (mobileView) {
      detailsTitleRef?.current?.removeAttribute("style");
      titleTextRef?.current?.removeAttribute("style");
      subtitleTextRef?.current?.removeAttribute("style");
      return;
    }

    const top = scrollPos.details;
    const initY = initTitle.y;
    const initFontSize = initTitle.fontSize;

    if (titleCategory?.current) {
      const category = {
        pos: titleCategory.current.offsetTop,
        width: titleCategory.current.clientWidth,
        size: useComputedStyle(titleCategory.current, "font-size"),
      };
      // console.log(`category`, category);

      const deltaRatio = (initY - cutRange(top, 0, initY)) / initY;

      const posX = cutRange(
        category.width - category.width * deltaRatio,
        0,
        category.width
      );
      const posY = cutRange(initY * deltaRatio, 0, initY - category.pos);
      const deltaSize = cutRange(
        initFontSize * deltaRatio,
        category.size,
        initFontSize
      );
      const sub_ = {
        opacity: deltaRatio / 2,
        hide: posY < category.pos ? "none" : "block",
      };

      if (top > 0) {
        setFixedTitle("");
        titleTextRef.current.style.fontSize = `${deltaSize}px`;
        subtitleTextRef.current.style.opacity = sub_.opacity;
        subtitleTextRef.current.style.display = sub_.hide;

        if (posY > category.pos) {
          detailsTitleRef.current.style.transform = `translate(${posX}px, ${posY}px)`;
        } else {
          detailsTitleRef.current.removeAttribute("style");
          titleTextRef.current.removeAttribute("style");
          setFixedTitle("fix-header-title");
        }
      } else {
        setFixedTitle("");
        detailsTitleRef.current.removeAttribute("style");
      }
    }
  }, [scrollPos.details]);

  return (
    <section
      className={`details-section details-intro around-padding w-full lg:flex lg:flex-col ${
        mobileView ? "mobile-view" : ""
      }`}
      ref={introRef}
    >
      <header
        className={`details-header side-padding w-full flex items-center fixed left-0 ${fixedTitle}`}
      >
        <p className="page-category" ref={titleCategory}>
          프로젝트<span>/</span>
        </p>
        <div
          className={`details-title-container lg:pointer-events-none lg:absolute`}
          ref={detailsTitleRef}
        >
          <h1 className="details-title lg:w-3/4" ref={titleTextRef}>
            {d?.summary?.title.split("\n").map((t, i) => (
              <span className="whitespace-nowrap" key={`title_${i}`}>
                {t}
              </span>
            ))}
          </h1>
          <p className="details-subtitle" ref={subtitleTextRef}>
            {d?.summary?.desc}
          </p>
        </div>
        <CloseBtn
          className="details-close ml-auto"
          btnClickCallback={() => closeDetails()}
        />
      </header>
      <div className="details-title-mobile-container lg:hidden">
        <h1 className="details-title w-full">
          {d?.summary?.title.split("\n").map((t, i) => (
            <span className="block break-keep" key={`title_${i}`}>
              {t}
            </span>
          ))}
        </h1>
        <p className="details-subtitle">{d?.summary?.desc}</p>
      </div>
      <ul className="details-btn-list flex items-center lg:justify-end lg:mt-auto">
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
