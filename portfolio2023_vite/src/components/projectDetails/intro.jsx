// components
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// components
import CloseBtn from "../buttons/close";
import OpenLinkBtn from "../buttons/openLink";

// data
import { getRootPathname } from "../../data/sitemap";

// state
import { detailsState } from "../../hooks/state/projectDetails";
import { scrollState } from "../../hooks/state/scroll";

// util
import getDetailsData from "../../hooks/util/getDetailsData";
import useComputedStyle from "../../hooks/util/useComputedStyle";
import windowResize from "../../hooks/util/windowResize";
import useMatrix from "../../hooks/util/useMatrix";
import { accessDeviceAtom } from "../../hooks/state/accessDevice";

export default function detailsIntro() {
  const [urlParams, setUrlParams] = useSearchParams();
  const [details, setDetails] = useRecoilState(detailsState);
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
  const introVisual = useRef();
  const scrollPos = useRecoilValue(scrollState);
  const device = useRecoilValue(accessDeviceAtom);
  const [mobileView, setMobileView] = useState(device.mobile);
  const [fixedTitle, setFixedTitle] = useState("");
  const [_t, setInitTitle] = useState({ y: 0, size: 160 });
  const [_c, setCategory] = useState({ y: 0, w: 0, size: 24 });

  const cutRange = (v, min, max) => {
    if (!isNaN(v) && !isNaN(min) && !isNaN(max))
      return v < min ? min : v > max ? max : v;
    else return v;
  };

  const updateDeltaRatio = scrollTop => 1 - cutRange(scrollTop, 0, _t.y) / _t.y;
  const updateSize = ratio => cutRange(_t.size * ratio, _c.size, _t.size);
  const updateX = ratio => cutRange(_c.w - _c.w * ratio, 0, _c.w);
  const updateY = ratio => cutRange(_t.y * ratio, 0, _t.y);

  const resetStyle = () => {
    setFixedTitle("");
    detailsTitleRef?.current?.removeAttribute("style");
    titleTextRef?.current?.removeAttribute("style");
    subtitleTextRef?.current?.removeAttribute("style");
  };

  const updateInitTitle = () => {
    if (!mobileView && introRef?.current && titleTextRef?.current) {
      const initSize = useComputedStyle(titleTextRef.current, "font-size");
      const posArr = useMatrix(detailsTitleRef.current);
      if (posArr?.length > 1) {
        setInitTitle({
          y: posArr[1],
          size: initSize,
        });
      }
    }
  };

  const updateCategory = () => {
    if (!mobileView && titleCategory?.current) {
      const el = titleCategory.current;
      setCategory({
        y: el.offsetTop,
        w: el.clientWidth,
        size: useComputedStyle(el, "font-size"),
      });
    }
  };

  const updateTitleSize = ratio => {
    if (titleTextRef?.current)
      titleTextRef.current.style.fontSize = `${updateSize(ratio)}px`;
  };

  const updateTitlePos = ratio => {
    const _x = updateX(ratio);
    const _y = updateY(ratio);
    if (detailsTitleRef?.current)
      detailsTitleRef.current.style.transform = `translate(${_x}px, ${_y}px)`;
  };

  const updateSubtitle = ratio => {
    if (subtitleTextRef?.current)
      subtitleTextRef.current.style.opacity = Math.pow(ratio, 4);
  };

  const updateIntroVisual = ratio => {
    if (introVisual?.current)
      introVisual.current.style.opacity = cutRange(Math.pow(ratio, 2), 0.1, 1);
  };

  const updateTitleState = scrollTop => {
    if (mobileView) {
      resetStyle();
      return;
    }

    if (0 < scrollTop) {
      const r_ = updateDeltaRatio(scrollTop);
      const curY = updateY(r_);

      // 타이틀 서브텍스트 투명도 업데이트
      updateSubtitle(r_);
      updateIntroVisual(r_);

      // 상단 고정 클래스
      if (_c.y < curY) setFixedTitle("");
      else setFixedTitle("fix-header-title");

      // 타이틀 업데이트
      if (_c.y < curY && curY < _t.y) {
        updateTitleSize(r_);
        updateTitlePos(r_);
      }
    } else {
      // 초기 상태
      resetStyle();
    }
  };

  const updateByResize = () => {
    setMobileView(device.mobile ? device.mobile : window.innerWidth < 1024);
    updateInitTitle();
    updateCategory();
    updateTitleState(scrollPos.details);
  };

  useEffect(() => {
    updateByResize();
    windowResize(updateByResize, 50);
  }, []);

  useEffect(() => {
    updateByResize();
  }, [details.open]);

  useEffect(() => {
    if (details.open) updateTitleState(scrollPos.details);
  }, [scrollPos.details, mobileView, _t, _c, details.open]);

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
      <div className="details-title-mobile-container lg:hidden relative">
        <h1 className="details-title w-full">
          {d?.summary?.title.split("\n").map((t, i) => (
            <span className="block break-keep" key={`title_${i}`}>
              {t}
            </span>
          ))}
        </h1>
        <p className="details-subtitle">{d?.summary?.desc}</p>
      </div>
      <ul className="details-btn-list flex items-center lg:justify-end lg:mt-auto relative">
        <li>
          <OpenLinkBtn url={d?.service?.link} />
        </li>
      </ul>
      <figure
        className="details-intro-bg w-full h-full pointer-events-none overflow-hidden absolute top-0 left-0"
        ref={introVisual}
      >
        <img
          className="w-full h-full object-cover"
          src={`${getRootPathname()}img/details/intro_${d?.pathQuery}.jpg`}
          alt={d?.pathQuery}
        />
      </figure>
    </section>
  );
}
