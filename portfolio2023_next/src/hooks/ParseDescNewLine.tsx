import { DescNewLineTypes } from "@/types/parseDesc";
import React from "react";

export default function ParseDescNewLine({
  data,
}: DescNewLineTypes): JSX.Element {
  return (
    <>
      {data.map((desc: string | JSX.Element, i: number) => (
        <React.Fragment
          key={`parseDescNewLine_${Math.floor(Math.random() * 100000000)}_${i}`}
        >
          <span>{desc}</span>
          {i < data.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}
