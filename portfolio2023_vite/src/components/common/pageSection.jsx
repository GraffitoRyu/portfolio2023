import React, { useRef, useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

// components
import PageVisual from "./pageVisual";

// util
import windowResize from "../../hooks/util/windowResize";

// state
import { sectionState } from "../../hooks/state/section";
import { pageState } from "../../hooks/state/page";
import { sectionOffsetState } from "../../hooks/state/section";
import updateArrayAtom from "../../hooks/util/updateArrayAtom";

export default function section(props) {
  const index = props.index;
  const sectionCode = props.section_code;
  const header = props.header;
  const contents = props.contents;

  const pageCategory = useRecoilValue(pageState).cur;
  const isVisual = sectionCode === "visual";

  const sectionRef = useRef();
  const [loaded, setLoaded] = useState("");
  const [section, setSection] = useRecoilState(sectionState[pageCategory]);
  const setSectionOffset = useSetRecoilState(sectionOffsetState[pageCategory]);

  const sectionClass = [
    "side-padding",
    "lg:flex",
    "items-start",
    `${sectionCode}-section`,
    "relative",
  ];

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
    console.log(section);
  }, []);

  useEffect(() => {
    if (isVisual) setLoaded("loaded");
  }, []);

  return isVisual ? (
    //   <PageVisual {...props} ref={sectionRef} />
    <section
      className="page-visual visual-section around-padding w-full flex items-center sm:items-end parallax-section"
      ref={sectionRef}
    >
      <div className="parallax-layer parallax-depth-6 flex items-center sm:items-end around-padding">
        <h1 className="page-title">
          <span
            className={`page-title-text page-title-border-text flex items-center ${loaded}`}
          >
            {props.borderText}
          </span>
          <span
            className={`page-title-text page-title-filled-text flex items-center ${loaded}`}
          >
            {props.filledText}
          </span>
        </h1>
      </div>
    </section>
  ) : (
    <section
      className={`page-section ${header ? sectionClass.join(" ") : "w-full"}`}
      ref={sectionRef}
    >
      {header ? (
        <header className={`section-header lg:w-1/2`}>
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
