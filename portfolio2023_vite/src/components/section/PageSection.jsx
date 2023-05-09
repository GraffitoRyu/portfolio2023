import React, { useRef, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

// components
import PageVisual from "./PageVisual";

// util
import windowResize from "../../hooks/util/windowResize";

// state
import { sectionState } from "../../hooks/state/section";
import { pageState } from "../../hooks/state/page";
import { sectionOffsetState } from "../../hooks/state/section";
import updateArrayAtom from "../../hooks/util/updateArrayAtom";

export default function Section(props) {
  const index = props.index;
  const sectionCode = props.section_code;
  const header = props.header;
  const contents = props.contents;

  const { cur: pageCategory } = useRecoilValue(pageState);

  const sectionRef = useRef();
  const setSection = useSetRecoilState(sectionState[pageCategory]);
  const setSectionOffset = useSetRecoilState(sectionOffsetState[pageCategory]);

  const sectionClass = ["items-start", "relative"];

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
      className={`page-section ${sectionCode}-section lg:flex ${
        header ? sectionClass.join(" ") : "w-full"
      } ${
        sectionCode == "intro"
          ? "flex-wrap h-full lg:h-auto"
          : `${pageCategory}-section ${
              sectionCode == "projectsList" ? "" : "side-padding"
            }`
      }`}
      ref={sectionRef}
    >
      {sectionCode == "intro" ? <PageVisual {...props} /> : ""}
      {header ? (
        <header
          className={`section-header lg:w-1/2 lg:sticky ${
            sectionCode == "projectsList" ? "hidden" : ""
          } ${sectionCode == "intro" ? "hidden lg:block self-stretch" : ""}`}
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