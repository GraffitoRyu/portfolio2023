"use client";

import React, { useEffect, useRef, useState } from "react";
import { SummaryType } from "@/types/projects";
import Period from "../period/Period";
import SlideTitle from "./SlideTitle";

export default function ProjectItem({
  summary,
}: {
  summary: SummaryType;
}): JSX.Element {
  const slideRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    const { current: el } = slideRef;
    if (el) {
      const width: number = (el.children[0] as HTMLElement).offsetWidth;
      setSlideWidth(width);
    }
  }, []);

  useEffect(() => {
    setDuration((slideWidth / 1000) * 3.2);
  }, [slideWidth]);

  return (
    <li className="w-full">
      <button className="relative w-full overflow-hidden select-auto">
        <div className="basic-box w-3/5 relative">
          <Period className="absolute left-full" date={summary.period} />
          <div className="fade-container text-right overflow-hidden">
            <h3>{summary.title}</h3>
          </div>
          <div className="fade-container text-right overflow-hidden">
            <p>{summary.desc}</p>
          </div>
          <ul className="fade-container overflow-hidden flex items-center justify-end">
            {summary.role?.map((d: string, i: number) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
        <div
          className="hover-box  top-full w-full text-left underline whitespace-nowrap flex"
          ref={slideRef}
        >
          <SlideTitle duration={duration} text={summary.title} />
        </div>
      </button>
    </li>
  );
}
