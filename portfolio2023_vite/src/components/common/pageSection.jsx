import React, { useRef, useEffect } from "react";
import { useSetRecoilState } from "recoil";

// components
import PageVisual from "./pageVisual";

// state
import { sectionState } from "../../hooks/state/section";
import windowResize from "../../hooks/util/windowResize";

export default function section(props) {
  const pageCategory = props.page;
  const index = props.index;
  const sectionCode = props.section_code;
  const header = props.header;
  const contents = props.contents;

  const sectionRef = useRef();
  const setSection = useSetRecoilState(sectionState[pageCategory]);

  const sectionClass = [
    "side-padding",
    "lg:flex",
    "items-start",
    `${sectionCode}-section`,
    "relative",
  ];

  const updateSectionState = () => {
    const state = {
      index: index,
      offset: sectionRef?.current.offsetTop,
    };
    setSection(prev => ({
      ...prev,
      [sectionCode]: { ...state },
    }));
  };

  useEffect(() => {
    updateSectionState();
    windowResize(() => {
      updateSectionState();
    }, 50);
  }, []);

  return sectionCode == "visual" ? (
    //   <PageVisual {...props} ref={sectionRef} />
    <section
      className="page-visual visual-section around-padding w-full flex items-center sm:items-end parallax-section"
      ref={sectionRef}
    >
      <div className="parallax-layer parallax-depth-6 flex items-center sm:items-end around-padding">
        <h1 className="page-title">
          <span className="page-title-text page-title-border-text flex items-center">
            {props.borderText}
          </span>
          <span className="page-title-text page-title-filled-text flex items-center">
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
