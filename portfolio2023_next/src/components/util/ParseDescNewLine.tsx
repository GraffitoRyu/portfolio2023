import { Fragment } from "react";

export default function ParseDescNewLine({
  data,
  breakLine = true,
}: DescNewLineTypes) {
  return (
    <>
      {data?.map((desc: string | React.ReactNode, i: number) => (
        <Fragment
          key={`parseDescNewLine_${Math.floor(Math.random() * 100000000)}_${i}`}
        >
          <span>{desc} </span>
          {breakLine && i < data.length - 1 && <br />}
        </Fragment>
      )) ?? ""}
    </>
  );
}
