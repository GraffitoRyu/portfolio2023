import React from "react";

export default function pageVisual(props) {
  return (
    <section className="page-visual around-padding flex items-center w-full sticky top-0">
      <h1 className="page-title">
        <span className="page-title-text page-title-border-text flex items-center">
          {props.borderText}
        </span>
        <span className="page-title-text page-title-filled-text flex items-center">
          {props.filledText}
        </span>
      </h1>
    </section>
  );
}
