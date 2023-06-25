import React from "react";

// type
import { DescNewLineTypes } from "@/types/util/parseDesc";

export default function ParseDescNewLine({
  data,
  breakLine = true,
}: DescNewLineTypes): JSX.Element {
  return (
    <>
      {data?.map((desc: string | JSX.Element, i: number) => (
        <React.Fragment
          key={`parseDescNewLine_${Math.floor(Math.random() * 100000000)}_${i}`}
        >
          <span>{desc} </span>
          {breakLine && i < data.length - 1 && <br />}
        </React.Fragment>
      )) ?? ""}
    </>
  );
}
