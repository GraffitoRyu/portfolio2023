import React from "react";

export default function pageVisual(props) {
  return (
    <section className="page-visual w-full parallax-section ">
      {/* <section className="page-visual around-padding w-full sticky top-0 parallax-frame"> */}
      <div className="parallax-layer parallax-depth-1 flex items-center sm:items-end  around-padding">
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
