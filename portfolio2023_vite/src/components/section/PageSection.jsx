import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";

// components
import PageVisual from "./PageVisual";

// util
import windowResize from "../../hooks/util/windowResize";
import updateArrayAtom from "../../hooks/util/updateArrayAtom";

// state
import { sectionState } from "../../hooks/state/section";
import { sectionOffsetState } from "../../hooks/state/section";

export default function Section(props) {
  const index = props.index;
  const sectionCode = props.section_code;
  const pageCategory = props.page_name;
  const header = props.header;
  const contents = props.contents;

  const sectionRef = useRef();
  const { ref: sectionViewRef, inView: sectionView } = useInView();
  const containerViewRef = useCallback(
    node => {
      sectionRef.current = node;
      sectionViewRef(node);
    },
    [sectionViewRef]
  );
  const setSection = useSetRecoilState(sectionState[pageCategory]);
  const setSectionOffset = useSetRecoilState(sectionOffsetState[pageCategory]);

  const isIntro_section = sectionCode == "intro" ? "intro" : "noneIntro";
  const sectionClass = {
    common: `page-section ${sectionCode}-section lg:flex items-start relative`,
    intro: "flex-wrap h-full lg:h-auto",
    noneIntro: `${pageCategory}-section`,
  };
  const headerCheck =
    sectionCode == "intro" || sectionCode == "projectsList"
      ? sectionCode
      : "noneIntro";
  const headerClass = {
    common: "section-header lg:w-1/2 lg:sticky",
    intro: "hidden lg:block self-stretch",
    projectsList: "hidden",
    noneIntro: "",
  };

  const { ref: headerRef, inView: headerView } = useInView();
  const isHeaderView = () =>
    sectionView && headerView ? "header-in-view" : "";

  const updateSectionState = () => {
    let state = {
      order: index,
      view: false,
    };
    if (sectionRef?.current) {
      const offsetY = sectionRef.current.offsetTop;
      const height = sectionRef.current.clientHeight;
      state = {
        ...state,
        offset: offsetY,
        height: height,
        range: [offsetY, offsetY + height],
      };
    }

    setSection(prev => ({
      ...prev,
      [sectionCode]: { ...state },
    }));

    setSectionOffset(prev => updateArrayAtom(prev, index, state.range));
  };

  useEffect(() => {
    updateSectionState();
    windowResize(() => {
      updateSectionState();
    }, 50);
  }, []);

  return (
    <section
      className={`${sectionClass.common} ${sectionClass[isIntro_section]} ${
        sectionCode == "projectsList" || sectionCode == "intro"
          ? ""
          : "side-padding"
      }`}
      ref={containerViewRef}
    >
      {sectionCode == "intro" ? <PageVisual {...props} /> : ""}
      {header ? (
        <header
          className={`${headerClass.common} ${
            headerClass[headerCheck]
          } ${isHeaderView()}`}
          ref={headerRef}
        >
          {header.empty ? (
            ""
          ) : (
            <React.Fragment>
              <h2 className="capitalize">{header.title}</h2>
              <p>
                {header.desc?.map((d, i) => (
                  <React.Fragment key={`desc_${i}`}>
                    <span>{d}</span>
                    {i < header.desc.length - 1 ? <br /> : ""}
                  </React.Fragment>
                ))}
              </p>
            </React.Fragment>
          )}
        </header>
      ) : (
        ""
      )}
      <div className={`section-contents ${header ? "lg:w-1/2" : "w-full"}`}>
        {contents}
      </div>
    </section>
  );
}
