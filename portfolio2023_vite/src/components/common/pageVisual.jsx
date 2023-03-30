import React from "react";

export default function pageVisual(props) {
  return (
    <section className="page-visual side-padding">
      <h1 className="page-title">
        <span className="page-title-border-text flex">{props.borderText}</span>
        <span className="page-title-filled-text flex">{props.filledText}</span>
      </h1>
    </section>
  );
}