import React from "react";

// type
import { DescNewLineTypes } from "@/types/parseDesc";

// style components
import { ResponsiveBr } from "@/styles/styled/components/hooks";

export default function ParseDescNewLine({
  data,
}: DescNewLineTypes): JSX.Element {
  return (
    <>
      {data?.map((desc: string | JSX.Element, i: number) => (
        <React.Fragment
          key={`parseDescNewLine_${Math.floor(Math.random() * 100000000)}_${i}`}
        >
          <span>{desc}</span>
          {i < data.length - 1 && <ResponsiveBr />}
        </React.Fragment>
      )) ?? ""}
    </>
  );
}
