"use client";

import React, { useEffect, useRef, useState } from "react";
import { ProjectsType } from "@/types/projects";
import Period from "../period/Period";
import SlideTitle from "./SlideTitle";

export default function ProjectItem({ summary }: ProjectsType): JSX.Element {
  const slideRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if (slideRef.current) {
      const width: number = slideRef.current.children?.[0]?.offsetWidth;
      setSlideWidth(width);
    }
  }, [slideRef.current]);

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
