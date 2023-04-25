import React from "react";

export default function replaceNewlineToBr(text) {
  if (!text) return [];
  if (text.includes("\n")) {
    const textArr = text.split("\n");
    return textArr.map((t, i) => (
      <React.Fragment key={`text_${i}`}>
        {t}
        {textArr.length - 1 == i ? "" : <br />}
      </React.Fragment>
    ));
  } else return text;
}
