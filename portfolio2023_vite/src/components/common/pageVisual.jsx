import React from "react";

export default function pageVisual(props) {
  const visualRef = props.ref;

  return (
    <section
      className="page-visual visual-section around-padding w-full flex items-center sm:items-end parallax-section"
      ref={visualRef}
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
  );
}
